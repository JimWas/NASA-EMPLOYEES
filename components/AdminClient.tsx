"use client";

import { useEffect, useState } from "react";
import { PageContent } from "@/lib/types";
import { RichTextEditor } from "@/components/RichTextEditor";

type Props = {
  initialContent: PageContent;
};

type SaveState = "idle" | "saving" | "saved" | "error";

function SectionCard({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="admin-card">
      <div className="admin-card__header">
        <h2>{title}</h2>
      </div>
      <div className="admin-card__body">{children}</div>
    </section>
  );
}

function TextField({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea rows={5} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

export function AdminClient({ initialContent }: Props) {
  const [content, setContent] = useState<PageContent>(initialContent);
  const [code, setCode] = useState(JSON.stringify(initialContent, null, 2));
  const [mode, setMode] = useState<"form" | "code">("form");
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [message, setMessage] = useState("Ready to edit.");

  useEffect(() => {
    setCode(JSON.stringify(content, null, 2));
  }, [content]);

  useEffect(() => {
    const savedDraft = window.localStorage.getItem("nasa-people-draft");
    if (!savedDraft) {
      return;
    }

    try {
      const parsed = JSON.parse(savedDraft) as PageContent;
      setContent(parsed);
      setMessage("Recovered your last local draft from this browser.");
    } catch {
      window.localStorage.removeItem("nasa-people-draft");
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("nasa-people-draft", JSON.stringify(content));
  }, [content]);

  const saveContent = async (nextContent: PageContent) => {
    setSaveState("saving");
    setMessage("Saving changes...");

    const response = await fetch("/api/content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nextContent)
    });

    if (!response.ok) {
      setSaveState("error");
      setMessage("Save failed. Check your JSON or server logs.");
      return;
    }

    const saved = (await response.json()) as PageContent;
    setContent(saved);
    setSaveState("saved");
    setMessage("Saved. Refresh the homepage preview if it is open in another tab.");
  };

  const updateContent = (updater: (current: PageContent) => PageContent) => {
    setContent((current) => updater(current));
  };

  const handleCodeApply = () => {
    try {
      const parsed = JSON.parse(code) as PageContent;
      setContent(parsed);
      setMessage("Code editor changes loaded into the preview state.");
      setSaveState("idle");
    } catch {
      setSaveState("error");
      setMessage("JSON is invalid. Fix syntax before applying.");
    }
  };

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });
    const data = (await response.json()) as { url?: string; error?: string };
    if (!response.ok || !data.url) {
      setSaveState("error");
      setMessage(data.error ?? "Upload failed.");
      return "";
    }
    setMessage(`Uploaded ${file.name}. Paste or use ${data.url}`);
    return data.url;
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "people-of-nasa-content.json";
    anchor.click();
    URL.revokeObjectURL(url);
    setMessage("Exported the current draft as JSON.");
  };

  const importJsonFile = async (file: File) => {
    const text = await file.text();
    try {
      const parsed = JSON.parse(text) as PageContent;
      setContent(parsed);
      setMessage("Imported JSON into the current draft.");
      setSaveState("idle");
    } catch {
      setSaveState("error");
      setMessage("Imported file is not valid JSON for this content model.");
    }
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <p className="admin-sidebar__eyebrow">Content Studio</p>
          <h1>People of NASA Admin</h1>
          <p>
            Edit visually, switch to raw JSON when needed, and save back to the
            page content store.
          </p>
        </div>
        <div className="admin-sidebar__controls">
          <button
            type="button"
            className={mode === "form" ? "button button--primary" : "button button--ghost"}
            onClick={() => setMode("form")}
          >
            WYSIWYG + Forms
          </button>
          <button
            type="button"
            className={mode === "code" ? "button button--primary" : "button button--ghost"}
            onClick={() => setMode("code")}
          >
            Code Editor
          </button>
          <button type="button" className="button button--primary" onClick={() => saveContent(content)}>
            {saveState === "saving" ? "Saving..." : "Save Content"}
          </button>
          <button type="button" className="button button--ghost" onClick={exportJson}>
            Export JSON
          </button>
          <a href="/" className="button button--ghost">
            Open Live Preview
          </a>
        </div>
        <div className={`save-status save-status--${saveState}`}>{message}</div>
        <label className="upload-dropzone">
          <span>Upload image</span>
          <input
            type="file"
            accept="image/*"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) {
                return;
              }
              await handleUpload(file);
            }}
          />
        </label>
        <label className="upload-dropzone">
          <span>Import content JSON</span>
          <input
            type="file"
            accept="application/json"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              if (!file) {
                return;
              }
              await importJsonFile(file);
            }}
          />
        </label>
        <button
          type="button"
          className="button button--ghost"
          onClick={() => {
            window.localStorage.removeItem("nasa-people-draft");
            setContent(initialContent);
            setMessage("Local draft cleared. Restored the last saved backend version.");
            setSaveState("idle");
          }}
        >
          Reset to Saved Version
        </button>
      </aside>

      <div className="admin-main">
        {mode === "form" ? (
          <>
            <SectionCard title="Site Header">
              <div className="field-grid field-grid--2">
                <TextField
                  label="Page Title"
                  value={content.site.pageTitle}
                  onChange={(value) =>
                    updateContent((current) => ({
                      ...current,
                      site: { ...current.site, pageTitle: value }
                    }))
                  }
                />
                <TextField
                  label="Badge"
                  value={content.site.badge}
                  onChange={(value) =>
                    updateContent((current) => ({
                      ...current,
                      site: { ...current.site, badge: value }
                    }))
                  }
                />
              </div>
              <TextAreaField
                label="Site Intro"
                value={content.site.intro}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    site: { ...current.site, intro: value }
                  }))
                }
              />
            </SectionCard>

            <SectionCard title="Hero">
              <div className="field-grid field-grid--2">
                <TextField
                  label="Hero Title"
                  value={content.hero.title}
                  onChange={(value) =>
                    updateContent((current) => ({
                      ...current,
                      hero: { ...current.hero, title: value }
                    }))
                  }
                />
                <TextField
                  label="Primary CTA Label"
                  value={content.hero.primaryCta.label}
                  onChange={(value) =>
                    updateContent((current) => ({
                      ...current,
                      hero: {
                        ...current.hero,
                        primaryCta: { ...current.hero.primaryCta, label: value }
                      }
                    }))
                  }
                />
                <TextField
                  label="Background Image"
                  value={content.hero.backgroundImage}
                  onChange={(value) =>
                    updateContent((current) => ({
                      ...current,
                      hero: { ...current.hero, backgroundImage: value }
                    }))
                  }
                />
                <TextField
                  label="Portrait Image"
                  value={content.hero.portraitImage}
                  onChange={(value) =>
                    updateContent((current) => ({
                      ...current,
                      hero: { ...current.hero, portraitImage: value }
                    }))
                  }
                />
              </div>
              <TextAreaField
                label="Hero Subtitle"
                value={content.hero.subtitle}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    hero: { ...current.hero, subtitle: value }
                  }))
                }
              />
            </SectionCard>

            <SectionCard title="Mission Copy">
              <TextField
                label="Section Title"
                value={content.mission.title}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    mission: { ...current.mission, title: value }
                  }))
                }
              />
              <RichTextEditor
                label="Body"
                value={content.mission.bodyHtml}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    mission: { ...current.mission, bodyHtml: value }
                  }))
                }
              />
              <TextField
                label="Mission Image"
                value={content.mission.image}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    mission: { ...current.mission, image: value }
                  }))
                }
              />
            </SectionCard>

            <SectionCard title="Culture Copy">
              <TextField
                label="Section Title"
                value={content.culture.title}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    culture: { ...current.culture, title: value }
                  }))
                }
              />
              <RichTextEditor
                label="Body"
                value={content.culture.bodyHtml}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    culture: { ...current.culture, bodyHtml: value }
                  }))
                }
              />
              <TextField
                label="Culture Image"
                value={content.culture.image}
                onChange={(value) =>
                  updateContent((current) => ({
                    ...current,
                    culture: { ...current.culture, image: value }
                  }))
                }
              />
            </SectionCard>

            <SectionCard title="Code-savvy extras">
              <p className="admin-note">
                The JSON mode exposes every nested field including gallery cards,
                navigation, stats, benefits, and footer links. Use it for bulk edits,
                content migrations, or precise structural changes.
              </p>
            </SectionCard>
          </>
        ) : (
          <SectionCard title="Full Content JSON">
            <label className="field">
              <span>Content Model</span>
              <textarea
                className="code-editor"
                rows={36}
                value={code}
                onChange={(event) => setCode(event.target.value)}
              />
            </label>
            <div className="admin-actions">
              <button type="button" className="button button--ghost" onClick={handleCodeApply}>
                Apply JSON to Draft
              </button>
              <button type="button" className="button button--primary" onClick={() => saveContent(content)}>
                Save Draft to Backend
              </button>
            </div>
          </SectionCard>
        )}

        <SectionCard title="Live Preview">
          <div className="preview-frame">
            <iframe title="Homepage preview" src="/" />
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
