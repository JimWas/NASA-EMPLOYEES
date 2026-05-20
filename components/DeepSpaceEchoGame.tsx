"use client";

import { useEffect, useMemo, useState } from "react";

type Target = {
  id: string;
  name: string;
  x: number;
  y: number;
  distance: string;
  note: string;
  difficulty: number;
};

type LeaderboardEntry = {
  label: string;
  score: number;
};

const MESSAGE = "We are here. We did this. Can you hear us?";

const targets: Target[] = [
  {
    id: "proxima-b",
    name: "Proxima Centauri b",
    x: 18,
    y: 22,
    distance: "4.2 ly",
    note: "Nearest known rocky target in the habitable conversation.",
    difficulty: 1
  },
  {
    id: "trappist-1e",
    name: "TRAPPIST-1e",
    x: 33,
    y: 18,
    distance: "39 ly",
    note: "Part of a compact system full of intriguing worlds.",
    difficulty: 1.1
  },
  {
    id: "lhs-1140b",
    name: "LHS 1140 b",
    x: 52,
    y: 28,
    distance: "48 ly",
    note: "Dense super-Earth often discussed in habitability studies.",
    difficulty: 1.15
  },
  {
    id: "kepler-186f",
    name: "Kepler-186f",
    x: 84,
    y: 12,
    distance: "492 ly",
    note: "One of the early famous Earth-size habitable-zone candidates.",
    difficulty: 1.35
  },
  {
    id: "toi-700d",
    name: "TOI-700 d",
    x: 77,
    y: 74,
    distance: "101 ly",
    note: "A temperate-size exoplanet in a nearby system.",
    difficulty: 1.2
  },
  {
    id: "k2-18b",
    name: "K2-18 b",
    x: 90,
    y: 66,
    distance: "124 ly",
    note: "A headline-maker in atmospheric biosignature conversations.",
    difficulty: 1.25
  }
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function distanceToSegment(
  px: number,
  py: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSq = dx * dx + dy * dy;

  if (lengthSq === 0) return Math.hypot(px - x1, py - y1);

  let t = ((px - x1) * dx + (py - y1) * dy) / lengthSq;
  t = clamp(t, 0, 1);

  const projX = x1 + t * dx;
  const projY = y1 + t * dy;

  return Math.hypot(px - projX, py - projY);
}

function buildLeaderboard(entries: LeaderboardEntry[]) {
  return entries
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

export function DeepSpaceEchoGame() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [beamY, setBeamY] = useState(46);
  const [signalStrength, setSignalStrength] = useState(0.74);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [bestRuns, setBestRuns] = useState<LeaderboardEntry[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [lastResult, setLastResult] = useState<string>(
    "Sweep the sky, lock your aim, and transmit toward the highlighted world."
  );

  const activeTarget = targets[activeIndex];

  useEffect(() => {
    const saved = window.localStorage.getItem("deep-space-echo-leaderboard");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as LeaderboardEntry[];
        setBestRuns(buildLeaderboard(parsed));
      } catch {
        setBestRuns([]);
      }
    }
  }, []);

  useEffect(() => {
    let frame = 0;
    const interval = window.setInterval(() => {
      frame += 1;
      if (!isLocked) {
        setBeamY(50 + Math.sin(frame / 18) * 34);
      }
      setSignalStrength(0.45 + ((Math.sin(frame / 9) + 1) / 2) * 0.55);
    }, 40);

    return () => window.clearInterval(interval);
  }, [isLocked]);

  const geometry = useMemo(() => {
    const start = { x: 10, y: 84 };
    const end = { x: 92, y: beamY };
    const distance = distanceToSegment(
      activeTarget.x,
      activeTarget.y,
      start.x,
      start.y,
      end.x,
      end.y
    );
    return {
      start,
      end,
      targetDistance: distance
    };
  }, [activeTarget, beamY]);

  const nearbyTargets = useMemo(
    () => targets.filter((target) => target.id !== activeTarget.id).slice(0, 4),
    [activeTarget.id]
  );

  function toggleAim() {
    setIsLocked((current) => !current);
    setLastResult((current) =>
      isLocked
        ? "Beam sweep re-enabled. Catch the next signal window."
        : current
    );
  }

  function handleTransmit() {
    const precisionWindow = 6.8;
    const distanceScore = clamp(100 - geometry.targetDistance * 9.5, 0, 100);
    const strengthScore = Math.round(signalStrength * 100);
    const total = Math.round(
      (distanceScore * 0.65 + strengthScore * 0.35) * activeTarget.difficulty
    );
    const succeeded = geometry.targetDistance <= precisionWindow;

    setAttempts((current) => current + 1);

    if (succeeded) {
      setScore((current) => {
        const next = current + total;
        const entry = {
          label: `Run ${attempts + 1}`,
          score: next
        };
        const leaderboard = buildLeaderboard([...bestRuns, entry]);
        setBestRuns(leaderboard);
        window.localStorage.setItem(
          "deep-space-echo-leaderboard",
          JSON.stringify(leaderboard)
        );
        return next;
      });
      setLastResult(
        `Signal locked on ${activeTarget.name}. Precision ${distanceScore.toFixed(
          0
        )} and strength ${strengthScore} delivered ${total} points.`
      );
    } else {
      setLastResult(
        `Message drifted wide of ${activeTarget.name}. Tighten the beam and catch the brighter part of the signal cycle.`
      );
    }

    setIsLocked(false);
  }

  function newTarget() {
    setActiveIndex((current) => (current + 1) % targets.length);
    setIsLocked(false);
    setLastResult(
      "New target selected. Sweep again and line up the transmission path."
    );
  }

  const signalPercent = Math.round(signalStrength * 100);

  return (
    <div className="deep-echo">
      <section className="deep-echo__intro">
        <div className="deep-echo__intro-copy">
          <span className="section__eyebrow">Interactive</span>
          <h2>Project: Deep Space Echo</h2>
          <p>
            Pick a world scientists talk about as potentially life-friendly,
            sweep the transmission beam across the sky, and try to send one
            simple message from Earth into the dark.
          </p>
          <p className="deep-echo__small-note">
            These are not confirmed inhabited worlds. They are distant targets
            that show up often in real habitability conversations.
          </p>
        </div>
        <div className="deep-echo__intro-visual">
          <img
            src="/images/deep-space-echo-mockup.png"
            alt="Mockup concept for the Deep Space Echo minigame"
          />
        </div>
      </section>

      <div className="deep-echo__layout">
        <section className="deep-echo__console">
          <div className="deep-echo__console-topbar">
            <div>
              <span>Earth transmitter</span>
              <strong>Direct the message to habitable-zone targets</strong>
            </div>
            <div className="deep-echo__status-pill">
              {isLocked ? "Aim locked" : "Sweeping"}
            </div>
          </div>

          <div className="deep-echo__board">
            <div className="deep-echo__galaxy-glow deep-echo__galaxy-glow--a" />
            <div className="deep-echo__galaxy-glow deep-echo__galaxy-glow--b" />

            <div
              className="deep-echo__beam"
              style={{
                left: `${geometry.start.x}%`,
                top: `${geometry.start.y}%`,
                width: `${Math.hypot(
                  geometry.end.x - geometry.start.x,
                  geometry.end.y - geometry.start.y
                )}%`,
                transform: `rotate(${Math.atan2(
                  geometry.end.y - geometry.start.y,
                  geometry.end.x - geometry.start.x
                )}rad)`
              }}
            />

            <div className="deep-echo__earth">
              <div className="deep-echo__dish" />
              <span>Earth Transmitter</span>
            </div>

            {targets.map((target) => {
              const isActive = target.id === activeTarget.id;
              return (
                <div
                  key={target.id}
                  className={`deep-echo__target${isActive ? " is-active" : ""}`}
                  style={{ left: `${target.x}%`, top: `${target.y}%` }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(targets.findIndex((item) => item.id === target.id))
                    }
                    aria-label={`Select ${target.name}`}
                  />
                  <strong>{target.name}</strong>
                </div>
              );
            })}

            <div className="deep-echo__message-box">
              <p>{MESSAGE}</p>
            </div>

            <div className="deep-echo__status-row">
              <div>
                <span>Current score</span>
                <strong>{score}</strong>
              </div>
              <div>
                <span>Signal strength</span>
                <strong>{signalPercent}%</strong>
              </div>
            </div>

            <div className="deep-echo__meter">
              <span style={{ width: `${signalPercent}%` }} />
            </div>
          </div>

          <div className="deep-echo__controls">
            <button
              type="button"
              className="button button--ghost"
              onClick={toggleAim}
            >
              {isLocked ? "Reacquire" : "Aim"}
            </button>
            <button
              type="button"
              className="button button--primary"
              onClick={handleTransmit}
            >
              Transmit
            </button>
            <button
              type="button"
              className="button button--ghost"
              onClick={newTarget}
            >
              New Target
            </button>
          </div>

          <div className="deep-echo__result">
            <span>Operator note</span>
            <p>{lastResult}</p>
          </div>
        </section>

        <aside className="deep-echo__sidebar">
          <section className="deep-echo__panel">
            <span>Target in focus</span>
            <h3>{activeTarget.name}</h3>
            <p>{activeTarget.note}</p>
            <div className="deep-echo__meta">
              <div>
                <small>Distance</small>
                <strong>{activeTarget.distance}</strong>
              </div>
              <div>
                <small>Alignment error</small>
                <strong>{geometry.targetDistance.toFixed(1)}</strong>
              </div>
            </div>
          </section>

          <section className="deep-echo__panel">
            <span>Top communicators</span>
            <div className="deep-echo__leaderboard">
              {(bestRuns.length > 0 ? bestRuns : [
                { label: "Run 1", score: 3025 },
                { label: "Run 2", score: 2200 },
                { label: "Run 3", score: 1820 }
              ]).map((entry, index) => (
                <div key={`${entry.label}-${index}`}>
                  <strong>{index + 1}</strong>
                  <span>{entry.label}</span>
                  <small>{entry.score}</small>
                </div>
              ))}
            </div>
          </section>

          <section className="deep-echo__panel">
            <span>Recent discoveries</span>
            <div className="deep-echo__discovery-grid">
              {nearbyTargets.map((target) => (
                <article key={target.id}>
                  <strong>{target.name}</strong>
                  <span>{target.distance}</span>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
