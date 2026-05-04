"use client";

import { useRef } from "react";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const actions = [
  { label: "B", command: "bold" },
  { label: "I", command: "italic" },
  { label: "H2", command: "formatBlock", value: "h2" },
  { label: "P", command: "formatBlock", value: "p" },
  { label: "List", command: "insertUnorderedList" }
];

export function RichTextEditor({ label, value, onChange }: Props) {
  const editorRef = useRef<HTMLDivElement | null>(null);

  const runCommand = (command: string, commandValue?: string) => {
    document.execCommand(command, false, commandValue);
    onChange(editorRef.current?.innerHTML ?? "");
  };

  return (
    <label className="field">
      <span>{label}</span>
      <div className="wysiwyg">
        <div className="wysiwyg__toolbar">
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              onClick={() => runCommand(action.command, action.value)}
            >
              {action.label}
            </button>
          ))}
        </div>
        <div
          ref={editorRef}
          className="wysiwyg__editor"
          contentEditable
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{ __html: value }}
          onInput={(event) => onChange(event.currentTarget.innerHTML)}
        />
      </div>
    </label>
  );
}
