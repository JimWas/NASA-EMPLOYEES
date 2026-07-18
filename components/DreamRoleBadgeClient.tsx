"use client";

import { FormEvent, useMemo, useState } from "react";

type MissionArea = {
  name: string;
  code: string;
  station: string;
};

type BadgeTheme = {
  name: string;
  accent: string;
  accentSoft: string;
  panel: string;
  deep: string;
};

const missionAreas: MissionArea[] = [
  { name: "Human Exploration", code: "HX", station: "Moon & Mars Systems" },
  { name: "Earth & Climate", code: "EC", station: "Earth Science Division" },
  { name: "Robotics", code: "RB", station: "Autonomous Systems Lab" },
  { name: "Space Science", code: "SS", station: "Deep Space Observatory" },
  { name: "Technology", code: "TX", station: "Advanced Concepts Lab" },
  { name: "Mission Operations", code: "MO", station: "Mission Control" },
  { name: "Public Service", code: "PS", station: "Public Mission Office" },
  { name: "Education", code: "ED", station: "Next Generation Lab" }
];

const badgeThemes: BadgeTheme[] = [
  { name: "Orbit Blue", accent: "#58a6ff", accentSoft: "#b8dcff", panel: "#10233e", deep: "#07111f" },
  { name: "Mars Signal", accent: "#ff6b4a", accentSoft: "#ffc0ad", panel: "#3b1c1a", deep: "#170b0d" },
  { name: "Lunar Silver", accent: "#d8e1ec", accentSoft: "#ffffff", panel: "#27313d", deep: "#0c1118" },
  { name: "Aurora Green", accent: "#3ee6a8", accentSoft: "#b8ffe4", panel: "#12352f", deep: "#061713" }
];

function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean).slice(0, 2);
  return parts.map((part) => part[0]?.toUpperCase()).join("") || "FE";
}

function badgeNumberFor(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return String(Math.abs(hash) % 1000000).padStart(6, "0");
}

function drawRoundedRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  context.beginPath();
  context.roundRect(x, y, width, height, radius);
}

function fitText(context: CanvasRenderingContext2D, text: string, maxWidth: number, startSize: number, minSize: number) {
  let size = startSize;
  while (size > minSize) {
    context.font = `700 ${size}px Arial, sans-serif`;
    if (context.measureText(text).width <= maxWidth) break;
    size -= 2;
  }
  return size;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

export function DreamRoleBadgeClient() {
  const [displayName, setDisplayName] = useState("Future Explorer");
  const [dreamRole, setDreamRole] = useState("Mission Systems Designer");
  const [callSign, setCallSign] = useState("STARLIGHT");
  const [missionArea, setMissionArea] = useState(missionAreas[0].name);
  const [themeName, setThemeName] = useState(badgeThemes[0].name);
  const [generated, setGenerated] = useState(false);
  const [message, setMessage] = useState("");

  const area = missionAreas.find((item) => item.name === missionArea) || missionAreas[0];
  const theme = badgeThemes.find((item) => item.name === themeName) || badgeThemes[0];
  const safeName = displayName.trim() || "Future Explorer";
  const safeRole = dreamRole.trim() || "Dream NASA Role";
  const safeCallSign = (callSign.trim() || "STARLIGHT").toUpperCase();
  const initials = initialsFor(safeName);
  const badgeNumber = useMemo(
    () => badgeNumberFor(`${safeName}|${safeRole}|${missionArea}|${safeCallSign}`),
    [safeName, safeRole, missionArea, safeCallSign]
  );

  function markChanged() {
    setGenerated(false);
    setMessage("");
  }

  function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!displayName.trim() || !dreamRole.trim()) {
      setMessage("Add a display name and dream role to generate your badge.");
      return;
    }
    setGenerated(true);
    setMessage("Dream role badge generated. It is ready to download.");
  }

  async function downloadBadge() {
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 1000;
    const context = canvas.getContext("2d");
    if (!context) return;

    const background = context.createLinearGradient(0, 0, 1600, 1000);
    background.addColorStop(0, theme.deep);
    background.addColorStop(0.62, theme.panel);
    background.addColorStop(1, "#050912");
    context.fillStyle = background;
    context.fillRect(0, 0, 1600, 1000);

    let seed = Number(badgeNumber);
    context.fillStyle = "rgba(255,255,255,0.42)";
    for (let index = 0; index < 95; index += 1) {
      seed = (seed * 9301 + 49297) % 233280;
      const x = (seed / 233280) * 1600;
      seed = (seed * 9301 + 49297) % 233280;
      const y = (seed / 233280) * 1000;
      const radius = index % 11 === 0 ? 2.4 : 1.2;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }

    context.fillStyle = theme.accent;
    context.fillRect(0, 0, 28, 1000);
    context.fillRect(28, 0, 1572, 14);

    drawRoundedRect(context, 72, 62, 1456, 876, 44);
    context.fillStyle = "rgba(5, 9, 18, 0.72)";
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.16)";
    context.lineWidth = 3;
    context.stroke();

    drawRoundedRect(context, 112, 104, 390, 792, 30);
    context.fillStyle = "rgba(255,255,255,0.055)";
    context.fill();
    context.strokeStyle = "rgba(255,255,255,0.12)";
    context.stroke();

    context.beginPath();
    context.arc(307, 320, 126, 0, Math.PI * 2);
    context.fillStyle = theme.accent;
    context.globalAlpha = 0.18;
    context.fill();
    context.globalAlpha = 1;
    context.strokeStyle = theme.accent;
    context.lineWidth = 6;
    context.stroke();
    context.fillStyle = theme.accentSoft;
    context.font = "700 112px Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(initials, 307, 324);

    context.textAlign = "left";
    context.textBaseline = "alphabetic";
    context.fillStyle = theme.accent;
    context.font = "700 28px Arial, sans-serif";
    context.fillText("CALL SIGN", 158, 520);
    context.fillStyle = "#ffffff";
    const callSignSize = fitText(context, safeCallSign, 300, 48, 28);
    context.font = `700 ${callSignSize}px Arial, sans-serif`;
    context.fillText(safeCallSign, 158, 574);

    context.fillStyle = "rgba(255,255,255,0.56)";
    context.font = "700 22px Arial, sans-serif";
    context.fillText("HONORARY ID", 158, 700);
    context.fillStyle = "#ffffff";
    context.font = "700 34px ui-monospace, SFMono-Regular, Menlo, monospace";
    context.fillText(`${area.code}-${badgeNumber}`, 158, 748);

    for (let index = 0; index < 34; index += 1) {
      const barWidth = index % 5 === 0 ? 6 : index % 2 === 0 ? 3 : 2;
      context.fillStyle = index % 4 === 0 ? theme.accent : "rgba(255,255,255,0.7)";
      context.fillRect(158 + index * 8, 808, barWidth, 44);
    }

    try {
      const logo = await loadImage("/nasa-logo.svg");
      context.drawImage(logo, 550, 92, 104, 104);
    } catch {
      // The badge remains complete if the decorative logo cannot load.
    }

    context.fillStyle = "rgba(255,255,255,0.62)";
    context.font = "700 24px Arial, sans-serif";
    context.fillText("NASAEMPLOYEES.COM", 680, 125);
    context.fillStyle = theme.accent;
    context.font = "700 23px Arial, sans-serif";
    context.fillText("HONORARY DREAM ROLE • IMAGINED MISSION", 680, 165);

    context.fillStyle = "#ffffff";
    const nameSize = fitText(context, safeName, 820, 88, 44);
    context.font = `700 ${nameSize}px Arial, sans-serif`;
    context.fillText(safeName, 550, 325);

    context.fillStyle = theme.accentSoft;
    const roleSize = fitText(context, safeRole, 820, 52, 30);
    context.font = `700 ${roleSize}px Arial, sans-serif`;
    context.fillText(safeRole, 550, 395);

    context.strokeStyle = "rgba(255,255,255,0.14)";
    context.beginPath();
    context.moveTo(550, 450);
    context.lineTo(1450, 450);
    context.stroke();

    const fields = [
      ["MISSION AREA", area.name],
      ["ASSIGNMENT", area.station],
      ["HOME BASE", "Earth • Solar System"],
      ["STATUS", "Dreaming Forward"]
    ];
    fields.forEach(([label, value], index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);
      const x = 550 + column * 460;
      const y = 530 + row * 150;
      context.fillStyle = theme.accent;
      context.font = "700 20px Arial, sans-serif";
      context.fillText(label, x, y);
      context.fillStyle = "#ffffff";
      context.font = "700 31px Arial, sans-serif";
      context.fillText(value, x, y + 48);
    });

    drawRoundedRect(context, 550, 820, 900, 60, 16);
    context.fillStyle = theme.accent;
    context.globalAlpha = 0.13;
    context.fill();
    context.globalAlpha = 1;
    context.fillStyle = theme.accentSoft;
    context.font = "700 20px Arial, sans-serif";
    context.fillText("PRESERVE LIFE • EXPAND KNOWLEDGE • KEEP THE LIGHT ON", 584, 858);

    context.fillStyle = "rgba(255,255,255,0.54)";
    context.font = "700 17px Arial, sans-serif";
    context.fillText("KEEPSAKE ONLY • NOT AN OFFICIAL NASA CREDENTIAL • DOES NOT GRANT ACCESS OR EMPLOYMENT", 550, 918);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${safeName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "future-explorer"}-dream-role-badge.png`;
      link.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  }

  return (
    <section className="dream-badge-studio" aria-labelledby="dream-badge-title">
      <div className="dream-badge-form-panel">
        <span className="section__eyebrow">Badge Studio</span>
        <h2 id="dream-badge-title">Create your Dream NASA Role ID.</h2>
        <p>
          Make a personal keepsake for the role you would choose in humanity&rsquo;s
          mission to preserve life, expand knowledge, and keep the light on.
        </p>

        <form className="dream-badge-form" onSubmit={handleGenerate}>
          <label>
            <span>Display name</span>
            <input
              value={displayName}
              onChange={(event) => { setDisplayName(event.target.value); markChanged(); }}
              maxLength={32}
              placeholder="Future Explorer"
            />
          </label>
          <label>
            <span>Dream NASA role</span>
            <input
              value={dreamRole}
              onChange={(event) => { setDreamRole(event.target.value); markChanged(); }}
              maxLength={42}
              placeholder="Mission Systems Designer"
            />
          </label>
          <div className="dream-badge-form__row">
            <label>
              <span>Mission area</span>
              <select
                value={missionArea}
                onChange={(event) => { setMissionArea(event.target.value); markChanged(); }}
              >
                {missionAreas.map((item) => (
                  <option key={item.name} value={item.name}>{item.name}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Call sign</span>
              <input
                value={callSign}
                onChange={(event) => { setCallSign(event.target.value.toUpperCase()); markChanged(); }}
                maxLength={18}
                placeholder="STARLIGHT"
              />
            </label>
          </div>

          <fieldset className="dream-badge-themes">
            <legend>Badge color</legend>
            <div className="dream-badge-themes__options">
              {badgeThemes.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  className={`dream-badge-swatch${themeName === item.name ? " dream-badge-swatch--active" : ""}`}
                  aria-label={item.name}
                  aria-pressed={themeName === item.name}
                  title={item.name}
                  style={{ "--swatch-color": item.accent } as React.CSSProperties}
                  onClick={() => { setThemeName(item.name); markChanged(); }}
                />
              ))}
            </div>
          </fieldset>

          <p className="dream-badge-safety">
            Kids and students should use a first name, nickname, or classroom name.
            Do not enter an address, school, phone number, email, or age. Nothing entered here is stored.
          </p>

          <div className="dream-badge-actions">
            <button type="submit" className="button button--primary">Generate My Badge</button>
            <button
              type="button"
              className="button button--ghost"
              onClick={downloadBadge}
              disabled={!generated}
            >
              Download PNG
            </button>
          </div>
          {message ? <p className="dream-badge-message" role="status">{message}</p> : null}
        </form>
      </div>

      <div className="dream-badge-preview-panel">
        <div className="dream-role-badge" style={{ "--badge-accent": theme.accent, "--badge-soft": theme.accentSoft, "--badge-panel": theme.panel, "--badge-deep": theme.deep } as React.CSSProperties}>
          <div className="dream-role-badge__stars" aria-hidden="true" />
          <div className="dream-role-badge__identity">
            <div className="dream-role-badge__avatar">{initials}</div>
            <span>Call sign</span>
            <strong>{safeCallSign}</strong>
            <small>Honorary ID</small>
            <code>{area.code}-{badgeNumber}</code>
            <div className="dream-role-badge__barcode" aria-hidden="true" />
          </div>
          <div className="dream-role-badge__details">
            <div className="dream-role-badge__brand">
              <img src="/nasa-logo.svg" alt="NASA logo" />
              <div>
                <span>NasaEmployees.com</span>
                <strong>Honorary dream role • Imagined mission</strong>
              </div>
            </div>
            <div className="dream-role-badge__name-block">
              <h3>{safeName}</h3>
              <p>{safeRole}</p>
            </div>
            <dl className="dream-role-badge__facts">
              <div><dt>Mission area</dt><dd>{area.name}</dd></div>
              <div><dt>Assignment</dt><dd>{area.station}</dd></div>
              <div><dt>Home base</dt><dd>Earth • Solar System</dd></div>
              <div><dt>Status</dt><dd>Dreaming Forward</dd></div>
            </dl>
            <p className="dream-role-badge__motto">Preserve life • Expand knowledge • Keep the light on</p>
            <small className="dream-role-badge__disclaimer">Keepsake only • Not an official NASA credential • Does not grant access or employment</small>
          </div>
        </div>
        <p className="dream-badge-preview-note">
          Your preview updates as you type. Generate the badge to unlock the PNG download.
        </p>
      </div>
    </section>
  );
}
