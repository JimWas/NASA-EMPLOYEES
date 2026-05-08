"use client";

import { FormEvent, useEffect, useState } from "react";

type HonoraryEmployee = {
  id: string;
  name: string;
  dreamRole: string;
  missionArea: string;
  promise: string;
};

const storageKey = "honorary-nasa-employees";

const starterEmployees: HonoraryEmployee[] = [
  {
    id: "starter-1",
    name: "Future Explorer",
    dreamRole: "Mars Habitat Designer",
    missionArea: "Human Exploration",
    promise: "I want to help build safe homes for people exploring other worlds."
  },
  {
    id: "starter-2",
    name: "Sky Watcher",
    dreamRole: "Earth Science Data Analyst",
    missionArea: "Earth & Climate",
    promise: "I want to study Earth so we can protect the life already here."
  },
  {
    id: "starter-3",
    name: "Signal Keeper",
    dreamRole: "Deep Space Communications Engineer",
    missionArea: "Technology",
    promise: "I want to keep missions connected, even when they travel far from home."
  }
];

const missionAreas = [
  "Human Exploration",
  "Earth & Climate",
  "Robotics",
  "Space Science",
  "Technology",
  "Mission Operations",
  "Public Service",
  "Education"
];

export function HonoraryEmployeesClient() {
  const [entries, setEntries] = useState<HonoraryEmployee[]>([]);
  const [name, setName] = useState("");
  const [dreamRole, setDreamRole] = useState("");
  const [missionArea, setMissionArea] = useState(missionAreas[0]);
  const [promise, setPromise] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await fetch("/api/honorary-employees");
        if (response.ok) {
          const data = await response.json();
          setEntries(data);
        }
      } catch (error) {
        console.error("Failed to fetch entries:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEntries();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !dreamRole.trim() || !promise.trim()) {
      setMessage("Add a display name, dream role, and mission promise.");
      return;
    }

    const nextEntry = {
      name: name.trim().slice(0, 40),
      dreamRole: dreamRole.trim().slice(0, 60),
      missionArea,
      promise: promise.trim().slice(0, 180)
    };

    try {
      const response = await fetch("/api/honorary-employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nextEntry)
      });

      if (response.ok) {
        const savedEntry = await response.json();
        setEntries((current) => [savedEntry, ...current]);
        setName("");
        setDreamRole("");
        setMissionArea(missionAreas[0]);
        setPromise("");
        setMessage("Welcome to the honorary crew.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }
  }

  const allEmployees = entries;

  return (
    <section className="honorary-builder" id="join-honorary-crew">
      <div className="honorary-form-card">
        <span className="section__eyebrow">Add Yourself</span>
        <h3>Become an honorary NASA employee.</h3>
        <p>
          Add a first name, nickname, or classroom name and imagine the role you
          would want in NASA's mission to preserve life and keep the light on.
        </p>
        <p className="honorary-safety-note">
          For kids and students: do not add your full name, address, school,
          phone number, email, or age.
        </p>

        <form className="honorary-form" onSubmit={handleSubmit}>
          <label>
            <span>Display name</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Future Explorer"
              maxLength={40}
            />
          </label>
          <label>
            <span>Dream NASA role</span>
            <input
              value={dreamRole}
              onChange={(event) => setDreamRole(event.target.value)}
              placeholder="Moon rover engineer"
              maxLength={60}
            />
          </label>
          <label>
            <span>Mission area</span>
            <select value={missionArea} onChange={(event) => setMissionArea(event.target.value)}>
              {missionAreas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Mission promise</span>
            <textarea
              value={promise}
              onChange={(event) => setPromise(event.target.value)}
              placeholder="I want to help..."
              rows={4}
              maxLength={180}
            />
          </label>
          <div className="honorary-actions">
            <button type="submit" className="button button--primary">
              Add My Dream Role
            </button>
          </div>
          {message ? <p className="honorary-message">{message}</p> : null}
        </form>
      </div>

      <div className="honorary-roster">
        {isLoading ? (
          <p className="honorary-loading">Loading the crew...</p>
        ) : allEmployees.length === 0 ? (
          <p className="honorary-empty">Be the first to join the crew.</p>
        ) : (
          allEmployees.map((employee) => (
            <article key={employee.id} className="honorary-card">
              <span>{employee.missionArea}</span>
              <h4>{employee.name}</h4>
              <strong>{employee.dreamRole}</strong>
              <p>{employee.promise}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
