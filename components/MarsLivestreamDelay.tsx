"use client";

import { useState } from "react";

const MIN_DELAY = 3;
const MAX_DELAY = 22.4;

function formatMinutes(value: number) {
  const minutes = Math.floor(value);
  const seconds = Math.round((value - minutes) * 60);
  return seconds ? `${minutes} min ${seconds} sec` : `${minutes} min`;
}

export function MarsLivestreamDelay() {
  const [delay, setDelay] = useState(12.7);

  return (
    <div className="mars-live-delay">
      <div className="mars-live-delay__control">
        <label htmlFor="mars-delay">Move Mars closer to or farther from Earth</label>
        <input
          id="mars-delay"
          type="range"
          min={MIN_DELAY}
          max={MAX_DELAY}
          step="0.1"
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
        <div className="mars-live-delay__range" aria-hidden="true">
          <span>Closest</span>
          <span>Farthest</span>
        </div>
      </div>

      <div className="mars-live-delay__readout" aria-live="polite">
        <div>
          <span>Video reaches Earth after</span>
          <strong>{formatMinutes(delay)}</strong>
        </div>
        <div>
          <span>Fastest question and reply</span>
          <strong>{formatMinutes(delay * 2)}</strong>
        </div>
      </div>

      <p>
        The broadcast can keep playing continuously, but Earth is always
        watching the past. A reply has to cross the distance twice.
      </p>
    </div>
  );
}
