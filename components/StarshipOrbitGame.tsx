"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

const WIDTH = 760;
const HEIGHT = 500;
const STARSHIP_LENGTH = 54;
const STARSHIP_WIDTH = 20;
const GRAVITY = 0.18;
const BOOST_STRENGTH = -4.5;
const HORIZONTAL_SPEED = 2.2;
const MAX_FUEL = 100;

type FlightState = "ready" | "flying" | "success" | "failed";

type Ship = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  fuel: number;
};

type Waypoint = {
  x: number;
  y: number;
  radius: number;
  label: string;
};

const waypoints: Waypoint[] = [
  { x: 170, y: 390, radius: 45, label: "Tower Clear" },
  { x: 300, y: 320, radius: 45, label: "Max-Q" },
  { x: 450, y: 240, radius: 45, label: "Stage Burn" },
  { x: 600, y: 160, radius: 45, label: "Near Orbit" },
  { x: 720, y: 100, radius: 50, label: "Parking Orbit" }
];

const initialShip = (): Ship => ({
  x: 50,
  y: HEIGHT / 2,
  vx: HORIZONTAL_SPEED,
  vy: 0,
  angle: 0,
  fuel: MAX_FUEL
});

function formatFuel(value: number) {
  return `${Math.max(0, Math.round(value))}%`;
}

export function StarshipOrbitGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const shipRef = useRef<Ship>(initialShip());
  const stateRef = useRef<FlightState>("ready");
  const waypointIndexRef = useRef(0);
  const completedRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const [flightState, setFlightState] = useState<FlightState>("ready");
  const [completed, setCompleted] = useState(0);
  const [fuel, setFuel] = useState(MAX_FUEL);
  const [missionTime, setMissionTime] = useState(0);
  const [bestFuel, setBestFuel] = useState<number | null>(null);
  const [targetLabel, setTargetLabel] = useState(waypoints[0].label);
  const lastBoostTimeRef = useRef(0);

  useEffect(() => {
    const savedBestFuel = window.localStorage.getItem("starship-orbit-best-fuel");
    if (savedBestFuel) {
      setBestFuel(Number(savedBestFuel));
    }
  }, []);

  const setState = (next: FlightState) => {
    stateRef.current = next;
    setFlightState(next);
  };

  const reset = () => {
    shipRef.current = initialShip();
    waypointIndexRef.current = 0;
    completedRef.current = 0;
    setCompleted(0);
    setFuel(MAX_FUEL);
    setMissionTime(0);
    startTimeRef.current = null;
    lastBoostTimeRef.current = 0;
    setTargetLabel(waypoints[0].label);
    setState("ready");
  };

  const start = () => {
    if (stateRef.current === "success" || stateRef.current === "failed") {
      reset();
    }
    if (stateRef.current === "ready") {
      startTimeRef.current = performance.now();
      setState("flying");
      boost();
    }
  };

  const boost = () => {
    if (stateRef.current === "flying" && shipRef.current.fuel > 0) {
      shipRef.current.vy = BOOST_STRENGTH;
      shipRef.current.fuel = Math.max(0, shipRef.current.fuel - 2.5);
      lastBoostTimeRef.current = performance.now();
    } else if (stateRef.current !== "flying") {
      start();
    }
  };

  const handleCanvasPress = (event: ReactPointerEvent | React.MouseEvent) => {
    event.preventDefault();
    boost();
  };

  const handleResetPress = (event: ReactPointerEvent | React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    reset();
  };

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        boost();
      }
    };

    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const drawBackground = () => {
      const sky = context.createLinearGradient(0, 0, 0, HEIGHT);
      sky.addColorStop(0, "#07111f");
      sky.addColorStop(0.36, "#14335e");
      sky.addColorStop(0.66, "#225287");
      sky.addColorStop(1, "#f08d58");
      context.fillStyle = sky;
      context.fillRect(0, 0, WIDTH, HEIGHT);

      context.fillStyle = "rgba(255,255,255,0.75)";
      for (let i = 0; i < 42; i += 1) {
        const x = (i * 71) % WIDTH;
        const y = (i * 47) % 220;
        const r = i % 6 === 0 ? 2 : 1;
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
      }

      context.strokeStyle = "rgba(141, 224, 255, 0.28)";
      context.lineWidth = 3;
      context.setLineDash([10, 10]);
      context.beginPath();
      context.moveTo(0, HEIGHT - 50);
      waypoints.forEach((point) => context.lineTo(point.x, point.y));
      context.stroke();
      context.setLineDash([]);

      context.fillStyle = "#203247";
      context.fillRect(0, HEIGHT - 42, WIDTH, 42);
    };

    const drawWaypoints = () => {
      const activeIndex = waypointIndexRef.current;
      waypoints.forEach((point, index) => {
        const reached = index < activeIndex;
        const active = index === activeIndex;
        context.beginPath();
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fillStyle = reached
          ? "rgba(126, 231, 135, 0.32)"
          : active
            ? "rgba(255, 214, 92, 0.34)"
            : "rgba(147, 197, 253, 0.16)";
        context.fill();
        context.lineWidth = active ? 5 : 3;
        context.strokeStyle = reached ? "#7ee787" : active ? "#ffd65c" : "#93c5fd";
        context.stroke();
        context.fillStyle = "#f8fbff";
        context.font = "700 16px Arial";
        context.fillText(point.label, point.x - point.radius - 6, point.y - point.radius - 12);
      });
    };

    const drawStarship = () => {
      const ship = shipRef.current;
      context.save();
      context.translate(ship.x, ship.y);
      
      // Tilt based on vertical velocity
      const tilt = Math.atan2(ship.vy, HORIZONTAL_SPEED);
      context.rotate(tilt + Math.PI / 2);

      context.fillStyle = "#e5e7eb";
      context.beginPath();
      context.moveTo(0, -STARSHIP_LENGTH / 2);
      context.lineTo(STARSHIP_WIDTH / 2, STARSHIP_LENGTH / 2 - 12);
      context.lineTo(-STARSHIP_WIDTH / 2, STARSHIP_LENGTH / 2 - 12);
      context.closePath();
      context.fill();

      context.fillStyle = "#9ca3af";
      context.fillRect(-STARSHIP_WIDTH / 2 + 3, -STARSHIP_LENGTH / 4, STARSHIP_WIDTH - 6, STARSHIP_LENGTH / 2);
      context.fillStyle = "#111827";
      context.fillRect(-5, -STARSHIP_LENGTH / 4 + 6, 10, 18);

      const isBoosting = performance.now() - lastBoostTimeRef.current < 160;
      if (isBoosting && ship.fuel > 0) {
        context.fillStyle = "#ff9d4d";
        context.beginPath();
        context.moveTo(0, STARSHIP_LENGTH / 2 - 2);
        context.lineTo(-12, STARSHIP_LENGTH / 2 + 34 + Math.random() * 8);
        context.lineTo(12, STARSHIP_LENGTH / 2 + 34 + Math.random() * 8);
        context.closePath();
        context.fill();
      }

      context.restore();
    };

    const drawHud = () => {
      context.fillStyle = "rgba(5, 8, 13, 0.72)";
      context.fillRect(18, 18, 196, 112);
      context.fillRect(WIDTH - 222, 18, 204, 112);

      context.fillStyle = "#9aa8ba";
      context.font = "700 12px Arial";
      context.fillText("WAYPOINTS", 34, 40);
      context.fillText("FUEL", 34, 82);
      context.fillText("TARGET", WIDTH - 204, 40);
      context.fillText("MISSION TIME", WIDTH - 204, 82);

      context.fillStyle = "#f8fbff";
      context.font = "900 24px Arial";
      context.fillText(`${completedRef.current}/${waypoints.length}`, 34, 66);
      context.fillText(formatFuel(shipRef.current.fuel), 34, 108);
      context.font = "900 18px Arial";
      context.fillText(targetLabel, WIDTH - 204, 66);
      context.fillText(`${missionTime.toFixed(1)}s`, WIDTH - 204, 108);

      if (stateRef.current === "ready") {
        context.fillStyle = "rgba(7, 12, 22, 0.8)";
        context.fillRect(WIDTH / 2 - 220, HEIGHT / 2 - 72, 440, 148);
        context.fillStyle = "#ffffff";
        context.font = "900 28px Arial";
        context.fillText("Starship Ascent Sim", WIDTH / 2 - 146, HEIGHT / 2 - 20);
        context.font = "500 18px Arial";
        context.fillText("Tap to boost and stay on course.", WIDTH / 2 - 138, HEIGHT / 2 + 14);
        context.fillText("Hit every waypoint to reach orbit.", WIDTH / 2 - 134, HEIGHT / 2 + 44);
      }

      if (stateRef.current === "success" || stateRef.current === "failed") {
        context.fillStyle = "rgba(7, 12, 22, 0.84)";
        context.fillRect(WIDTH / 2 - 220, HEIGHT / 2 - 76, 440, 156);
        context.fillStyle = stateRef.current === "success" ? "#7ee787" : "#ff7a59";
        context.font = "900 28px Arial";
        context.fillText(
          stateRef.current === "success" ? "Orbit Reached!" : "Mission Failed",
          WIDTH / 2 - 110,
          HEIGHT / 2 - 18
        );
        context.fillStyle = "#ffffff";
        context.font = "500 18px Arial";
        context.fillText(
          stateRef.current === "success"
            ? `Successful insertion with ${formatFuel(shipRef.current.fuel)} fuel.`
            : "Lost trajectory or ran out of fuel.",
          WIDTH / 2 - 160,
          HEIGHT / 2 + 18
        );
        context.fillText("Tap anywhere to try again.", WIDTH / 2 - 110, HEIGHT / 2 + 50);
      }
    };

    const finishSuccess = () => {
      setState("success");
      setBestFuel((current) => {
        const next = Math.round(shipRef.current.fuel);
        const best = current === null ? next : Math.max(current, next);
        window.localStorage.setItem("starship-orbit-best-fuel", String(best));
        return best;
      });
    };

    const fail = () => {
      if (stateRef.current === "flying") {
        setState("failed");
      }
    };

    const tick = (now: number) => {
      drawBackground();

      if (stateRef.current === "flying") {
        if (startTimeRef.current) {
          setMissionTime((now - startTimeRef.current) / 1000);
        }

        const ship = shipRef.current;
        ship.vy += GRAVITY;
        ship.x += ship.vx;
        ship.y += ship.vy;

        const waypoint = waypoints[waypointIndexRef.current];
        if (waypoint) {
          const distance = Math.hypot(ship.x - waypoint.x, ship.y - waypoint.y);
          if (distance <= waypoint.radius) {
            waypointIndexRef.current += 1;
            completedRef.current += 1;
            setCompleted(completedRef.current);
            const nextWaypoint = waypoints[waypointIndexRef.current];
            if (nextWaypoint) {
              setTargetLabel(nextWaypoint.label);
            } else {
              setTargetLabel("Orbit locked");
              finishSuccess();
            }
          }
        }

        setFuel(ship.fuel);

        if (
          ship.y > HEIGHT - 40 ||
          ship.y < 20 ||
          ship.x < -40 ||
          ship.x > WIDTH + 40 ||
          ship.fuel <= 0
        ) {
          // If they pass the last waypoint, it's already a success, so don't fail immediately
          if (waypointIndexRef.current < waypoints.length) {
             fail();
          }
        }
      }

      drawWaypoints();
      drawStarship();
      drawHud();
      animationRef.current = window.requestAnimationFrame(tick);
    };

    animationRef.current = window.requestAnimationFrame(tick);
    return () => {
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
    };
  }, [missionTime, targetLabel, isBoosting]);

  return (
    <div className="docking-shell">
      <div className="docking-panel">
        <div className="game-panel__header">
          <div>
            <span className="section__eyebrow">Flappy Orbit</span>
            <h3>Starship Ascent Guidance</h3>
          </div>
          <p>
            Tap or press Space to boost. Gravity pulls you down, but momentum
            carries you forward. Thread through the rings to reach parking orbit.
          </p>
        </div>
        <div 
          className="docking-canvas-container"
          style={{ position: "relative", cursor: "pointer", touchAction: "none" }}
          onPointerDown={handleCanvasPress}
        >
          <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="docking-canvas" />
        </div>
        <div className="docking-controls orbit-controls orbit-controls--inline">
          <button type="button" onPointerDown={boost} style={{ gridColumn: "span 2", fontSize: "1.2rem", fontWeight: "bold" }}>
            BOOST!
          </button>
        </div>
      </div>

      <aside className="docking-sidebar">
        <div className="game-stat">
          <span>Status</span>
          <strong>
            {flightState === "ready"
              ? "Ready for launch"
              : flightState === "flying"
                ? "Ascent in progress"
                : flightState === "success"
                  ? "Parking orbit reached"
                  : "Mission failed"}
          </strong>
        </div>
        <div className="game-stat">
          <span>Waypoints hit</span>
          <strong>
            {completed}/{waypoints.length}
          </strong>
        </div>
        <div className="game-stat">
          <span>Fuel remaining</span>
          <strong>{formatFuel(fuel)}</strong>
        </div>
        <div className="game-stat">
          <span>Best fuel at orbit</span>
          <strong>{bestFuel === null ? "None yet" : formatFuel(bestFuel)}</strong>
        </div>

        <div className="docking-controls orbit-controls orbit-controls--sidebar">
          <button type="button" onPointerDown={boost} style={{ gridColumn: "span 2", fontSize: "1.2rem", fontWeight: "bold" }}>
            BOOST!
          </button>
        </div>

        <div className="game-instructions">
          <h4>How to Fly</h4>
          <p>Tap anywhere on the screen (or press Space) to fire the engines.</p>
          <p>Each boost consumes fuel. Don't run out before reaching the final waypoint!</p>
          <button type="button" className="button button--primary docking-reset" onPointerDown={(e) => { e.stopPropagation(); reset(); }}>
            Reset Mission
          </button>
        </div>
      </aside>
    </div>
  );
}
