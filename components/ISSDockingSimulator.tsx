"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 760;
const HEIGHT = 500;
const DOCK_X = WIDTH - 126;
const DOCK_Y = HEIGHT / 2;
const CAPSULE_RADIUS = 18;
const TARGET_RADIUS = 34;
const THRUST = 0.032;
const DRAG = 0.992;
const MAX_SAFE_SPEED = 1.18;
const MAX_SAFE_OFFSET = 24;

type GameStatus = "ready" | "approach" | "docked" | "missed";
type Thruster = "up" | "down" | "left" | "right";

type Capsule = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const initialCapsule: Capsule = {
  x: 104,
  y: HEIGHT / 2 + 24,
  vx: 0.22,
  vy: -0.04
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function formatTime(seconds: number) {
  return `${seconds.toFixed(1)}s`;
}

export function ISSDockingSimulator() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const capsuleRef = useRef<Capsule>({ ...initialCapsule });
  const keysRef = useRef<Set<Thruster>>(new Set());
  const statusRef = useRef<GameStatus>("ready");
  const startTimeRef = useRef<number | null>(null);
  const [status, setStatus] = useState<GameStatus>("ready");
  const [missionTime, setMissionTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [offset, setOffset] = useState(Math.abs(initialCapsule.y - DOCK_Y));
  const [bestTime, setBestTime] = useState<number | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("iss-docking-best-time");
    if (saved) setBestTime(Number(saved));
  }, []);

  const setGameStatus = (nextStatus: GameStatus) => {
    statusRef.current = nextStatus;
    setStatus(nextStatus);
  };

  const reset = () => {
    capsuleRef.current = { ...initialCapsule };
    keysRef.current.clear();
    startTimeRef.current = null;
    setMissionTime(0);
    setSpeed(0);
    setOffset(Math.abs(initialCapsule.y - DOCK_Y));
    setGameStatus("ready");
  };

  const start = () => {
    if (statusRef.current === "docked" || statusRef.current === "missed") {
      reset();
    }
    if (statusRef.current === "ready") {
      startTimeRef.current = performance.now();
      setGameStatus("approach");
    }
  };

  const fireThruster = (thruster: Thruster) => {
    start();
    keysRef.current.add(thruster);
    window.setTimeout(() => keysRef.current.delete(thruster), 140);
  };

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      const map: Record<string, Thruster | undefined> = {
        ArrowUp: "up",
        KeyW: "up",
        ArrowDown: "down",
        KeyS: "down",
        ArrowLeft: "left",
        KeyA: "left",
        ArrowRight: "right",
        KeyD: "right"
      };
      const thruster = map[event.code];
      if (!thruster) return;
      event.preventDefault();
      start();
      keysRef.current.add(thruster);
    };

    const up = (event: KeyboardEvent) => {
      const map: Record<string, Thruster | undefined> = {
        ArrowUp: "up",
        KeyW: "up",
        ArrowDown: "down",
        KeyS: "down",
        ArrowLeft: "left",
        KeyA: "left",
        ArrowRight: "right",
        KeyD: "right"
      };
      const thruster = map[event.code];
      if (thruster) keysRef.current.delete(thruster);
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const drawStars = () => {
      context.fillStyle = "#030712";
      context.fillRect(0, 0, WIDTH, HEIGHT);

      for (let i = 0; i < 95; i += 1) {
        const x = (i * 83) % WIDTH;
        const y = (i * 47) % HEIGHT;
        const radius = i % 11 === 0 ? 1.8 : 1;
        context.fillStyle = i % 7 === 0 ? "rgba(124, 184, 255, 0.7)" : "rgba(255,255,255,0.42)";
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
      }

      const earth = context.createRadialGradient(WIDTH * 0.45, HEIGHT + 140, 40, WIDTH * 0.45, HEIGHT + 170, 420);
      earth.addColorStop(0, "rgba(125, 190, 255, 0.55)");
      earth.addColorStop(0.38, "rgba(40, 91, 151, 0.22)");
      earth.addColorStop(1, "rgba(4, 9, 18, 0)");
      context.fillStyle = earth;
      context.beginPath();
      context.arc(WIDTH * 0.45, HEIGHT + 185, 430, Math.PI, Math.PI * 2);
      context.fill();
    };

    const drawStation = () => {
      context.save();
      context.translate(DOCK_X, DOCK_Y);

      context.strokeStyle = "rgba(220, 231, 246, 0.85)";
      context.lineWidth = 4;
      context.beginPath();
      context.moveTo(-86, 0);
      context.lineTo(90, 0);
      context.stroke();

      context.fillStyle = "#dce6f3";
      context.fillRect(-28, -16, 56, 32);
      context.fillStyle = "#9aa8ba";
      context.fillRect(-14, -25, 28, 50);

      context.fillStyle = "#204a83";
      for (const side of [-1, 1]) {
        context.fillRect(side * 36, -82, side * 116, 28);
        context.fillRect(side * 36, 54, side * 116, 28);
        context.strokeStyle = "rgba(255,255,255,0.24)";
        context.lineWidth = 1;
        for (let i = 0; i < 4; i += 1) {
          context.strokeRect(side * (36 + i * 29), -82, side * 29, 28);
          context.strokeRect(side * (36 + i * 29), 54, side * 29, 28);
        }
      }

      context.strokeStyle = "rgba(255, 122, 89, 0.85)";
      context.lineWidth = 2;
      context.beginPath();
      context.arc(0, 0, TARGET_RADIUS, 0, Math.PI * 2);
      context.stroke();
      context.fillStyle = "rgba(255, 122, 89, 0.1)";
      context.beginPath();
      context.arc(0, 0, TARGET_RADIUS, 0, Math.PI * 2);
      context.fill();

      context.restore();
    };

    const drawCapsule = () => {
      const capsule = capsuleRef.current;
      const angle = Math.atan2(capsule.vy, Math.max(0.1, capsule.vx));

      context.save();
      context.translate(capsule.x, capsule.y);
      context.rotate(angle * 0.18);

      context.fillStyle = "#f4f7fb";
      context.beginPath();
      context.moveTo(CAPSULE_RADIUS + 14, 0);
      context.lineTo(-CAPSULE_RADIUS, -CAPSULE_RADIUS);
      context.lineTo(-CAPSULE_RADIUS - 10, CAPSULE_RADIUS);
      context.closePath();
      context.fill();

      context.fillStyle = "#aab6c6";
      context.fillRect(-CAPSULE_RADIUS - 8, -CAPSULE_RADIUS, 9, CAPSULE_RADIUS * 2);
      context.fillStyle = "#121a28";
      context.beginPath();
      context.arc(4, -3, 6, 0, Math.PI * 2);
      context.fill();

      const thrusters = keysRef.current;
      if (thrusters.size > 0 && statusRef.current === "approach") {
        context.fillStyle = "rgba(255, 122, 89, 0.85)";
        if (thrusters.has("right")) {
          context.beginPath();
          context.moveTo(-CAPSULE_RADIUS - 10, 0);
          context.lineTo(-CAPSULE_RADIUS - 34, -8);
          context.lineTo(-CAPSULE_RADIUS - 34, 8);
          context.closePath();
          context.fill();
        }
        if (thrusters.has("left")) {
          context.beginPath();
          context.moveTo(CAPSULE_RADIUS + 12, 0);
          context.lineTo(CAPSULE_RADIUS + 30, -7);
          context.lineTo(CAPSULE_RADIUS + 30, 7);
          context.closePath();
          context.fill();
        }
        if (thrusters.has("up")) {
          context.fillRect(-8, CAPSULE_RADIUS + 6, 16, 20);
        }
        if (thrusters.has("down")) {
          context.fillRect(-8, -CAPSULE_RADIUS - 26, 16, 20);
        }
      }

      context.restore();
    };

    const drawHud = () => {
      const capsule = capsuleRef.current;
      const distance = Math.hypot(DOCK_X - capsule.x, DOCK_Y - capsule.y);
      const currentSpeed = Math.hypot(capsule.vx, capsule.vy);
      const currentOffset = Math.abs(capsule.y - DOCK_Y);

      context.fillStyle = "rgba(5, 8, 13, 0.72)";
      context.fillRect(18, 18, 220, 98);
      context.fillRect(WIDTH - 236, 18, 218, 98);

      context.fillStyle = "#9aa8ba";
      context.font = "700 12px Arial";
      context.fillText("DISTANCE", 34, 40);
      context.fillText("CLOSING SPEED", 34, 78);
      context.fillText("ALIGNMENT", WIDTH - 216, 40);
      context.fillText("MISSION TIME", WIDTH - 216, 78);

      context.fillStyle = "#f8fbff";
      context.font = "900 22px Arial";
      context.fillText(`${Math.max(0, distance - TARGET_RADIUS).toFixed(0)} m`, 34, 64);
      context.fillStyle = currentSpeed <= MAX_SAFE_SPEED ? "#7ee787" : "#ff7a59";
      context.fillText(`${currentSpeed.toFixed(2)} m/s`, 34, 102);
      context.fillStyle = currentOffset <= MAX_SAFE_OFFSET ? "#7ee787" : "#ff7a59";
      context.fillText(`${currentOffset.toFixed(0)} m`, WIDTH - 216, 64);
      context.fillStyle = "#f8fbff";
      context.fillText(formatTime(missionTime), WIDTH - 216, 102);

      if (statusRef.current === "ready") {
        context.fillStyle = "rgba(7, 12, 22, 0.78)";
        context.fillRect(WIDTH / 2 - 200, HEIGHT / 2 - 66, 400, 132);
        context.fillStyle = "#ffffff";
        context.font = "900 26px Arial";
        context.fillText("Begin Final Approach", WIDTH / 2 - 139, HEIGHT / 2 - 20);
        context.font = "500 17px Arial";
        context.fillText("Use tiny thruster inputs to dock safely", WIDTH / 2 - 142, HEIGHT / 2 + 14);
        context.fillText("Arrow keys, WASD, or control buttons", WIDTH / 2 - 134, HEIGHT / 2 + 42);
      }

      if (statusRef.current === "docked" || statusRef.current === "missed") {
        context.fillStyle = "rgba(7, 12, 22, 0.82)";
        context.fillRect(WIDTH / 2 - 190, HEIGHT / 2 - 72, 380, 144);
        context.fillStyle = statusRef.current === "docked" ? "#7ee787" : "#ff7a59";
        context.font = "900 30px Arial";
        context.fillText(statusRef.current === "docked" ? "Soft Capture" : "Docking Miss", WIDTH / 2 - 96, HEIGHT / 2 - 22);
        context.fillStyle = "#ffffff";
        context.font = "500 17px Arial";
        context.fillText(
          statusRef.current === "docked" ? `Docked in ${formatTime(missionTime)}` : "Slow down and align with the port",
          WIDTH / 2 - 122,
          HEIGHT / 2 + 14
        );
        context.fillText("Press Reset to try again", WIDTH / 2 - 88, HEIGHT / 2 + 42);
      }
    };

    const tick = (now: number) => {
      drawStars();

      if (statusRef.current === "approach") {
        if (startTimeRef.current) {
          setMissionTime((now - startTimeRef.current) / 1000);
        }

        const capsule = capsuleRef.current;
        const thrusters = keysRef.current;
        if (thrusters.has("up")) capsule.vy -= THRUST;
        if (thrusters.has("down")) capsule.vy += THRUST;
        if (thrusters.has("left")) capsule.vx -= THRUST;
        if (thrusters.has("right")) capsule.vx += THRUST;

        capsule.vx *= DRAG;
        capsule.vy *= DRAG;
        capsule.x += capsule.vx;
        capsule.y += capsule.vy;
        capsule.y = clamp(capsule.y, CAPSULE_RADIUS + 8, HEIGHT - CAPSULE_RADIUS - 8);

        const currentSpeed = Math.hypot(capsule.vx, capsule.vy);
        const currentOffset = Math.abs(capsule.y - DOCK_Y);
        const distance = Math.hypot(DOCK_X - capsule.x, DOCK_Y - capsule.y);
        setSpeed(currentSpeed);
        setOffset(currentOffset);

        if (distance < TARGET_RADIUS) {
          if (currentSpeed <= MAX_SAFE_SPEED && currentOffset <= MAX_SAFE_OFFSET && capsule.vx > 0) {
            setGameStatus("docked");
            setBestTime((current) => {
              const next = missionTime > 0 ? missionTime : (now - (startTimeRef.current ?? now)) / 1000;
              const best = current === null ? next : Math.min(current, next);
              window.localStorage.setItem("iss-docking-best-time", String(best));
              return best;
            });
          } else {
            setGameStatus("missed");
          }
        }

        if (capsule.x > WIDTH + 50 || capsule.x < -50) {
          setGameStatus("missed");
        }
      }

      drawStation();
      drawCapsule();
      drawHud();
      animationRef.current = window.requestAnimationFrame(tick);
    };

    animationRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
    };
  }, [missionTime]);

  return (
    <div className="docking-shell">
      <div className="docking-panel">
        <div className="game-panel__header">
          <div>
            <span className="section__eyebrow">Simulator</span>
            <h3>ISS Docking Final Approach</h3>
          </div>
          <p>
            Use tiny thruster inputs to guide the capsule into the docking port.
            Dock gently: slow speed and clean alignment matter more than rushing.
          </p>
        </div>
        <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="docking-canvas" />
      </div>

      <aside className="docking-sidebar">
        <div className="game-stat">
          <span>Status</span>
          <strong>
            {status === "ready"
              ? "Ready"
              : status === "approach"
                ? "Final approach"
                : status === "docked"
                  ? "Docked"
                  : "Try again"}
          </strong>
        </div>
        <div className="game-stat">
          <span>Closing Speed</span>
          <strong>{speed.toFixed(2)} m/s</strong>
        </div>
        <div className="game-stat">
          <span>Alignment Offset</span>
          <strong>{offset.toFixed(0)} m</strong>
        </div>
        <div className="game-stat">
          <span>Best Docking Time</span>
          <strong>{bestTime === null ? "None yet" : formatTime(bestTime)}</strong>
        </div>

        <div className="docking-controls" aria-label="Thruster controls">
          <button type="button" onClick={() => fireThruster("up")} className="docking-controls__up">
            Up
          </button>
          <button type="button" onClick={() => fireThruster("left")}>
            Back
          </button>
          <button type="button" onClick={start}>
            Start
          </button>
          <button type="button" onClick={() => fireThruster("right")}>
            Forward
          </button>
          <button type="button" onClick={() => fireThruster("down")} className="docking-controls__down">
            Down
          </button>
        </div>

        <div className="game-instructions">
          <h4>Docking rules</h4>
          <p>Use Arrow keys or WASD for fine control.</p>
          <p>Green speed and alignment numbers mean you are inside the safe docking envelope.</p>
          <p>Hit the port too fast or too far off-center and the attempt fails.</p>
          <button type="button" className="button button--primary docking-reset" onClick={reset}>
            Reset Approach
          </button>
        </div>
      </aside>
    </div>
  );
}
