"use client";

import { useMemo, useState } from "react";

type Destination = "mars" | "europa";

const profiles = {
  mars: {
    label: "Mars",
    distance: "225 million km average",
    chemicalTime: "6–9 months",
    ionTime: "3–4 months (concept)",
    chemicalFuel: 6.5,
    ionFuel: 0.7,
  },
  europa: {
    label: "Europa",
    distance: "~600 million km at favorable geometry",
    chemicalTime: "2–6 years",
    ionTime: "Continuous-thrust mission dependent",
    chemicalFuel: 11,
    ionFuel: 1.2,
  },
} as const;

function formatMass(value: number) {
  return `${Math.round(value).toLocaleString()} t`;
}

export function MissionComparison() {
  const [payload, setPayload] = useState(100);
  const [destination, setDestination] = useState<Destination>("mars");
  const profile = profiles[destination];
  const estimates = useMemo(
    () => ({
      chemical: payload * profile.chemicalFuel,
      ion: payload * profile.ionFuel,
    }),
    [payload, profile],
  );

  return (
    <div className="ion-calculator">
      <div className="ion-calculator__controls">
        <div>
          <span className="ion-label">Destination</span>
          <div className="ion-segmented" aria-label="Select a destination">
            {(Object.keys(profiles) as Destination[]).map((key) => (
              <button
                key={key}
                type="button"
                className={destination === key ? "is-active" : ""}
                aria-pressed={destination === key}
                onClick={() => setDestination(key)}
              >
                {profiles[key].label}
              </button>
            ))}
          </div>
        </div>
        <label className="ion-range">
          <span>
            <span className="ion-label">Dry spacecraft + payload</span>
            <strong>{payload} metric tons</strong>
          </span>
          <input
            type="range"
            min="50"
            max="250"
            step="10"
            value={payload}
            onChange={(event) => setPayload(Number(event.target.value))}
          />
          <small><span>50 t</span><span>250 t</span></small>
        </label>
      </div>

      <div className="ion-calculator__destination">
        <span>{profile.label} mission model</span>
        <strong>{profile.distance}</strong>
      </div>

      <div className="ion-compare-grid">
        <article className="ion-compare-card ion-compare-card--chemical">
          <div className="ion-compare-card__top"><span>Chemical</span><b>Short, forceful burn</b></div>
          <div className="ion-compare-card__metric">
            <span>Illustrative propellant load</span>
            <strong>{formatMass(estimates.chemical)}</strong>
          </div>
          <div className="ion-bar"><i style={{ width: "100%" }} /></div>
          <dl>
            <div><dt>Transit</dt><dd>{profile.chemicalTime}</dd></div>
            <div><dt>Exhaust speed</dt><dd>~4.5 km/s</dd></div>
            <div><dt>Trajectory</dt><dd>Burn, then coast</dd></div>
          </dl>
        </article>

        <article className="ion-compare-card ion-compare-card--electric">
          <div className="ion-compare-card__top"><span>Nuclear-electric</span><b>Low thrust, sustained</b></div>
          <div className="ion-compare-card__metric">
            <span>Illustrative propellant load</span>
            <strong>{formatMass(estimates.ion)}</strong>
          </div>
          <div className="ion-bar"><i style={{ width: `${Math.max(8, (estimates.ion / estimates.chemical) * 100)}%` }} /></div>
          <dl>
            <div><dt>Transit</dt><dd>{profile.ionTime}</dd></div>
            <div><dt>Exhaust speed</dt><dd>Up to ~50 km/s</dd></div>
            <div><dt>Trajectory</dt><dd>Accelerate, turn, brake</dd></div>
          </dl>
        </article>
      </div>
      <p className="ion-calculator__note">
        Illustrative scaling based on the efficiency relationship in this concept, not a flight-ready mission design. Real mass ratios and travel times depend on reactor power, thrust, shielding, trajectory, and arrival strategy.
      </p>
    </div>
  );
}

export function TrajectoryMap() {
  const [destination, setDestination] = useState<Destination>("mars");

  return (
    <div className="trajectory-panel">
      <div className="trajectory-panel__header">
        <div>
          <span className="ion-label">Trajectory lab</span>
          <h4>Two very different ways to cross space</h4>
        </div>
        <div className="ion-segmented ion-segmented--small" aria-label="Choose trajectory destination">
          <button type="button" className={destination === "mars" ? "is-active" : ""} aria-pressed={destination === "mars"} onClick={() => setDestination("mars")}>Mars</button>
          <button type="button" className={destination === "europa" ? "is-active" : ""} aria-pressed={destination === "europa"} onClick={() => setDestination("europa")}>Europa</button>
        </div>
      </div>

      <div className={`trajectory-map trajectory-map--${destination}`} role="img" aria-label={`Animated comparison of coasting and continuous-thrust trajectories from Earth to ${profiles[destination].label}`}>
        <div className="trajectory-orbit trajectory-orbit--earth" />
        <div className="trajectory-orbit trajectory-orbit--mars" />
        <div className="trajectory-orbit trajectory-orbit--jupiter" />
        <div className="trajectory-sun" aria-hidden="true" />
        <div className="trajectory-planet trajectory-planet--earth"><i /><span>Earth</span></div>
        <div className="trajectory-planet trajectory-planet--mars"><i /><span>Mars</span></div>
        <div className="trajectory-planet trajectory-planet--jupiter"><i /><span>Jupiter / Europa</span></div>
        <svg viewBox="0 0 1000 440" aria-hidden="true" preserveAspectRatio="none">
          <path className="trajectory-path trajectory-path--chemical" d={destination === "mars" ? "M250,225 C365,54 585,42 675,197" : "M250,225 C390,0 790,5 905,198"} />
          <path className="trajectory-path trajectory-path--ion" d={destination === "mars" ? "M250,225 C355,128 518,120 675,197" : "M250,225 C440,120 690,110 905,198"} />
          <circle className="trajectory-craft trajectory-craft--chemical" r="6"><animateMotion dur={destination === "mars" ? "8s" : "12s"} repeatCount="indefinite" path={destination === "mars" ? "M250,225 C365,54 585,42 675,197" : "M250,225 C390,0 790,5 905,198"} /></circle>
          <circle className="trajectory-craft trajectory-craft--ion" r="6"><animateMotion dur={destination === "mars" ? "5s" : "8s"} repeatCount="indefinite" path={destination === "mars" ? "M250,225 C355,128 518,120 675,197" : "M250,225 C440,120 690,110 905,198"} /></circle>
        </svg>
      </div>
      <div className="trajectory-legend">
        <span><i className="trajectory-legend__chemical" />Chemical: coast arc</span>
        <span><i className="trajectory-legend__ion" />Ion: continuous thrust</span>
        <p>{destination === "mars" ? "A powered trajectory can keep changing its shape after Earth departure." : "Near Jupiter, the same propulsion system can transition from cruise to gradual orbital capture."}</p>
      </div>
    </div>
  );
}
