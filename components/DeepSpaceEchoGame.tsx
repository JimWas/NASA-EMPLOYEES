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
    note: "One of the nearest rocky worlds in the habitability conversation.",
    difficulty: 1
  },
  {
    id: "trappist-1e",
    name: "TRAPPIST-1e",
    x: 33,
    y: 18,
    distance: "39 ly",
    note: "Part of a system packed with worlds people love to study.",
    difficulty: 1.08
  },
  {
    id: "lhs-1140b",
    name: "LHS 1140 b",
    x: 52,
    y: 28,
    distance: "48 ly",
    note: "A dense super-Earth that often comes up in future-life discussions.",
    difficulty: 1.12
  },
  {
    id: "kepler-186f",
    name: "Kepler-186f",
    x: 84,
    y: 12,
    distance: "492 ly",
    note: "A famous early Earth-size habitable-zone candidate.",
    difficulty: 1.25
  },
  {
    id: "toi-700d",
    name: "TOI-700 d",
    x: 77,
    y: 74,
    distance: "101 ly",
    note: "A temperate-size exoplanet in a nearby system.",
    difficulty: 1.16
  },
  {
    id: "k2-18b",
    name: "K2-18 b",
    x: 90,
    y: 66,
    distance: "124 ly",
    note: "A world that often appears in biosignature headlines.",
    difficulty: 1.18
  }
];

function buildLeaderboard(entries: LeaderboardEntry[]) {
  return entries.sort((a, b) => b.score - a.score).slice(0, 3);
}

export function DeepSpaceEchoGame() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [signalStrength, setSignalStrength] = useState(0.74);
  const [score, setScore] = useState(0);
  const [bestRuns, setBestRuns] = useState<LeaderboardEntry[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [lastResult, setLastResult] = useState<string>(
    "Pick a world, wait for a strong signal, then press Transmit."
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
      setSignalStrength(0.45 + ((Math.sin(frame / 9) + 1) / 2) * 0.55);
    }, 40);

    return () => window.clearInterval(interval);
  }, []);

  const beamGeometry = useMemo(() => {
    const start = { x: 10, y: 84 };
    const end = { x: activeTarget.x, y: activeTarget.y };
    return {
      start,
      end,
      width: Math.hypot(end.x - start.x, end.y - start.y),
      angle: Math.atan2(end.y - start.y, end.x - start.x)
    };
  }, [activeTarget]);

  const nearbyTargets = useMemo(
    () => targets.filter((target) => target.id !== activeTarget.id).slice(0, 4),
    [activeTarget.id]
  );

  function handleTargetSelect(index: number) {
    setActiveIndex(index);
    setLastResult(`Target set to ${targets[index].name}. Wait for a bright signal and send.`);
  }

  function handleTransmit() {
    if (isTransmitting) return;

    const strengthScore = Math.round(signalStrength * 100);
    const total = Math.round((70 + strengthScore * 0.9) * activeTarget.difficulty);

    setAttempts((current) => current + 1);
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

    setIsTransmitting(true);
    setLastResult(
      `Transmission sent toward ${activeTarget.name}. Signal strength ${strengthScore}% earned ${total} points.`
    );

    window.setTimeout(() => {
      setIsTransmitting(false);
    }, 1800);
  }

  function newTarget() {
    const nextIndex = (activeIndex + 1) % targets.length;
    setActiveIndex(nextIndex);
    setLastResult(`New target selected: ${targets[nextIndex].name}.`);
  }

  const signalPercent = Math.round(signalStrength * 100);

  return (
    <div className="deep-echo">
      <section className="deep-echo__intro">
        <div className="deep-echo__intro-copy">
          <span className="section__eyebrow">Interactive</span>
          <h2>Project: Deep Space Echo</h2>
          <p>
            Choose a faraway world that scientists think is interesting, wait
            for a strong signal, and send one message from Earth into the
            universe.
          </p>
          <p className="deep-echo__small-note">
            Kid version: pick a planet, watch the signal bar, then press
            transmit when it looks bright and strong.
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
              <strong>Choose a world and send the message</strong>
            </div>
            <div className="deep-echo__status-pill">
              {isTransmitting ? "Transmitting" : "Target selected"}
            </div>
          </div>

          <div className="deep-echo__board">
            <div className="deep-echo__galaxy-glow deep-echo__galaxy-glow--a" />
            <div className="deep-echo__galaxy-glow deep-echo__galaxy-glow--b" />

            <div
              className={`deep-echo__beam${isTransmitting ? " is-transmitting" : ""}`}
              style={{
                left: `${beamGeometry.start.x}%`,
                top: `${beamGeometry.start.y}%`,
                width: `${beamGeometry.width}%`,
                transform: `rotate(${beamGeometry.angle}rad)`
              }}
            />

            <div className="deep-echo__earth">
              <div className="deep-echo__dish" />
              <span>Earth Transmitter</span>
            </div>

            {targets.map((target, index) => {
              const isActive = target.id === activeTarget.id;
              return (
                <div
                  key={target.id}
                  className={`deep-echo__target${isActive ? " is-active" : ""}`}
                  style={{ left: `${target.x}%`, top: `${target.y}%` }}
                >
                  <button
                    type="button"
                    onClick={() => handleTargetSelect(index)}
                    aria-label={`Select ${target.name}`}
                  />
                  <strong>{target.name}</strong>
                </div>
              );
            })}

            {isTransmitting ? (
              <div className="deep-echo__message-box">
                <p>{MESSAGE}</p>
              </div>
            ) : null}

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
            <span>How it works</span>
            <p>
              Click a target world, watch the signal bar, then press Transmit.
              Stronger signal means more points. The beam now always goes
              directly to the selected target.
            </p>
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
                <small>Signal bonus</small>
                <strong>{signalPercent}%</strong>
              </div>
            </div>
          </section>

          <section className="deep-echo__panel">
            <span>Top communicators</span>
            <div className="deep-echo__leaderboard">
              {(bestRuns.length > 0
                ? bestRuns
                : [
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
            <span>Other interesting worlds</span>
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
