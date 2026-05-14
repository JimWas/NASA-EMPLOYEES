"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Sender = "Mars" | "Earth";
type DistanceKey = "MOON" | "MARS" | "DEEP_SPACE";

type Message = {
  id: string;
  sender: Sender;
  text: string;
  timestamp: number;
  size: number;
};

type QueuedMessage = Message & {
  transmissionStart: number;
  transmissionDuration: number;
  totalDeliveryTime: number;
};

type Suggestion = {
  type: "compression" | "shortened" | "warning";
  text: string;
};

const distances: Record<DistanceKey, { label: string; delay: number; rate: number }> = {
  MOON: { label: "Moon", delay: 1.3, rate: 50000 },
  MARS: { label: "Mars", delay: 1140, rate: 1900 },
  DEEP_SPACE: { label: "Deep Space", delay: 1980, rate: 800 }
};

function formatTime(seconds: number) {
  if (seconds < 60) return `${Math.floor(seconds)}s`;
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}m ${remainder.toString().padStart(2, "0")}s`;
}

function calculateSize(text: string) {
  return new Blob([text]).size;
}

function SignalPath({
  queue,
  distance,
  currentTime
}: {
  queue: QueuedMessage[];
  distance: DistanceKey;
  currentTime: number;
}) {
  return (
    <div className="mars-relay__signal-path">
      <div className="mars-relay__endpoint">
        <span className="mars-relay__planet mars-relay__planet--earth" />
        <strong>Earth</strong>
      </div>

      <div className="mars-relay__track" aria-label="Signal path">
        <span className="mars-relay__track-line" />
        {queue.map((message) => {
          const totalTime = message.transmissionDuration + message.totalDeliveryTime;
          const elapsed = (currentTime - message.transmissionStart) / 1000;

          if (elapsed < 0) {
            return (
              <span
                key={message.id}
                className={`mars-relay__packet mars-relay__packet--pending mars-relay__packet--${message.sender.toLowerCase()}`}
                style={{ left: message.sender === "Earth" ? "0%" : "100%" }}
              >
                <span>Pending</span>
              </span>
            );
          }

          if (elapsed > totalTime) return null;

          const progress = (elapsed / totalTime) * 100;
          const position = message.sender === "Earth" ? progress : 100 - progress;

          return (
            <span
              key={message.id}
              className={`mars-relay__packet mars-relay__packet--${message.sender.toLowerCase()}`}
              style={{ left: `${position}%` }}
            >
              <span>ETA {formatTime(Math.max(0, totalTime - elapsed))}</span>
            </span>
          );
        })}
      </div>

      <div className="mars-relay__endpoint">
        <span className={`mars-relay__planet mars-relay__planet--${distance.toLowerCase()}`} />
        <strong>{distances[distance].label}</strong>
      </div>
    </div>
  );
}

export function MarsRelayClient() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [queue, setQueue] = useState<QueuedMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [distance, setDistance] = useState<DistanceKey>("MARS");
  const [isSignalLost, setIsSignalLost] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [currentTime, setCurrentTime] = useState(() => Date.now());
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, queue]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const delivered: Message[] = [];
      const remaining: QueuedMessage[] = [];

      queue.forEach((message) => {
        const elapsed = (now - message.transmissionStart) / 1000;
        const wait = message.transmissionDuration + message.totalDeliveryTime;

        if (elapsed >= wait) {
          delivered.push({
            id: message.id,
            sender: message.sender,
            text: message.text,
            timestamp: now,
            size: message.size
          });
        } else {
          remaining.push(message);
        }
      });

      if (delivered.length > 0) {
        setMessages((current) => [...current, ...delivered]);
        setQueue(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [queue]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        setIsSignalLost(true);
        setTimeout(() => setIsSignalLost(false), 3000 + Math.random() * 5000);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isRecording) return;
    const interval = setInterval(() => setRecordingTime((time) => time + 1), 1000);
    return () => clearInterval(interval);
  }, [isRecording]);

  function handleTextChange(value: string) {
    setInputText(value);
    const size = calculateSize(value);
    const nextSuggestions: Suggestion[] = [];

    if (size > 1000) {
      nextSuggestions.push({
        type: "warning",
        text: "Large payload detected. High risk of packet loss."
      });
      nextSuggestions.push({
        type: "compression",
        text: "Suggest delta-encoding or compression to reduce bandwidth."
      });
    }

    if (value.length > 200) {
      nextSuggestions.push({
        type: "shortened",
        text: "Summarize for critical telemetry priority?"
      });
    }

    setSuggestions(nextSuggestions);
  }

  function toggleRecording() {
    if (!isRecording) {
      setRecordingTime(0);
      setIsRecording(true);
      return;
    }

    setIsRecording(false);
    setInputText(`[VOICE_UPLINK_${Math.random().toString(36).slice(2, 6).toUpperCase()}] Duration: ${recordingTime}s`);
  }

  function sendMessage(sender: Sender = "Mars") {
    if (!inputText.trim() || isSignalLost || isRecording) return;

    const size = calculateSize(inputText);
    const config = distances[distance];
    const transmissionDuration = size / config.rate;
    const now = Date.now();

    const newMessage: QueuedMessage = {
      id: Math.random().toString(36).slice(2, 11),
      sender,
      text: inputText,
      timestamp: now,
      size,
      transmissionStart: now,
      transmissionDuration,
      totalDeliveryTime: config.delay
    };

    setQueue((current) => [...current, newMessage]);
    setInputText("");
    setSuggestions([]);

    if (sender === "Mars") {
      setTimeout(() => {
        const responses = [
          "Loud and clear, Mars Base Alpha. We are processing your data.",
          "Telemetry received. Orbital path looks nominal.",
          "Understood. We are relaying this to Houston.",
          "Signal weak, but message decoded. Please stand by for instructions."
        ];
        const responseText = responses[Math.floor(Math.random() * responses.length)];
        const responseSize = calculateSize(responseText);

        setQueue((current) => [
          ...current,
          {
            id: Math.random().toString(36).slice(2, 11),
            sender: "Earth",
            text: responseText,
            timestamp: Date.now(),
            size: responseSize,
            transmissionStart: Date.now() + config.delay * 1000 + transmissionDuration * 1000,
            transmissionDuration: responseSize / config.rate,
            totalDeliveryTime: config.delay
          }
        ]);
      }, 2000);
    }
  }

  function getStatus(message: QueuedMessage) {
    const elapsed = (currentTime - message.transmissionStart) / 1000;
    if (elapsed < 0) return "queued";
    if (elapsed < message.transmissionDuration) return "transmitting";
    return "in transit";
  }

  function getRemainingTime(message: QueuedMessage) {
    const elapsed = (currentTime - message.transmissionStart) / 1000;
    return Math.max(0, Math.round(message.transmissionDuration + message.totalDeliveryTime - elapsed));
  }

  return (
    <main className="mars-relay">
      <header className="mars-relay__header">
        <div className="mars-relay__brand">
          <span className="mars-relay__pulse" />
          <div>
            <p>Mars Relay AI</p>
            <h1>Deep Space Communications Simulator</h1>
          </div>
        </div>
        <div className="mars-relay__status-strip">
          <span>Target: {distances[distance].label}</span>
          <span>Latency: {formatTime(distances[distance].delay)}</span>
          <span>Bandwidth: {distances[distance].rate} B/s</span>
        </div>
        <div className="mars-relay__header-actions">
          <span className={`mars-relay__link-status ${isSignalLost ? "is-lost" : ""}`}>
            {isSignalLost ? "Signal Lost" : "Link Stable"}
          </span>
          <Link href="/" className="mars-relay__back">
            Back
          </Link>
        </div>
      </header>

      <section className="mars-relay__workspace">
        <aside className="mars-relay__sidebar">
          <section className="mars-relay__panel">
            <h2>Navigation Presets</h2>
            <div className="mars-relay__preset-list">
              {(Object.keys(distances) as DistanceKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  className={distance === key ? "is-active" : ""}
                  onClick={() => setDistance(key)}
                >
                  <strong>{distances[key].label}</strong>
                  <span>{formatTime(distances[key].delay)} one-way delay</span>
                </button>
              ))}
            </div>
          </section>

          <section className="mars-relay__panel mars-relay__log">
            <h2>Signal Log</h2>
            {queue.length === 0 ? (
              <div className="mars-relay__empty-log">No active transmissions</div>
            ) : (
              queue.map((message) => {
                const pending = currentTime < message.transmissionStart;
                const progress = pending
                  ? 0
                  : Math.min(
                      100,
                      ((currentTime - message.transmissionStart) / 1000 /
                        (message.transmissionDuration + message.totalDeliveryTime)) *
                        100
                    );

                return (
                  <article key={message.id} className="mars-relay__log-item">
                    <div>
                      <strong>{message.sender === "Mars" ? "Outgoing" : "Incoming"}</strong>
                      <span>{message.size}B</span>
                    </div>
                    <p>{pending ? "Pending relay..." : message.text}</p>
                    <div className="mars-relay__progress">
                      <span style={{ width: `${progress}%` }} />
                    </div>
                    <small>
                      {getStatus(message)} · {formatTime(getRemainingTime(message))}
                    </small>
                  </article>
                );
              })
            )}
          </section>

          <section className="mars-relay__operator">
            <strong>AI Operator Active</strong>
            <p>Message optimization and priority routing are online for long-delay communications.</p>
          </section>
        </aside>

        <section className="mars-relay__console">
          <SignalPath queue={queue} distance={distance} currentTime={currentTime} />

          <div ref={scrollRef} className="mars-relay__messages">
            {messages.length === 0 && queue.length === 0 ? (
              <div className="mars-relay__empty-state">
                <span>◇</span>
                <strong>Establishing Deep Space Link</strong>
                <p>Maximum throughput: {distances[distance].rate} B/s</p>
              </div>
            ) : (
              messages.map((message) => (
                <article
                  key={message.id}
                  className={`mars-relay__message mars-relay__message--${message.sender.toLowerCase()}`}
                >
                  <span>{message.sender.toUpperCase()} MISSION CONTROL</span>
                  <p>{message.text}</p>
                  <small>
                    {new Date(message.timestamp).toLocaleTimeString()} · {message.size} bytes
                  </small>
                </article>
              ))
            )}
          </div>

          {suggestions.length > 0 && (
            <div className="mars-relay__suggestions">
              <div>
                <strong>AI Optimization Suggestions</strong>
                <button type="button" onClick={() => setSuggestions([])}>
                  Clear
                </button>
              </div>
              {suggestions.map((suggestion, index) => (
                <p key={`${suggestion.type}-${index}`}>
                  <span>[0{index + 1}]</span> {suggestion.text}
                </p>
              ))}
            </div>
          )}

          <form
            className="mars-relay__composer"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <textarea
              value={inputText}
              onChange={(event) => handleTextChange(event.target.value)}
              placeholder="Enter transmission for Mars Alpha..."
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  sendMessage();
                }
              }}
            />
            <div className="mars-relay__composer-actions">
              <span>{calculateSize(inputText)} bytes</span>
              <button
                type="button"
                className={isRecording ? "is-recording" : ""}
                onClick={toggleRecording}
              >
                {isRecording ? `Stop ${recordingTime}s` : "Voice"}
              </button>
              <button type="submit" disabled={!inputText.trim() || isSignalLost || isRecording}>
                Send
              </button>
            </div>
            <div className="mars-relay__composer-meta">
              <span>Earth Relay: Online</span>
              <span>Buffer: 100%</span>
              <span>{isSignalLost ? "Link error" : "Ready for uplink"}</span>
            </div>
          </form>
        </section>
      </section>

      <footer className="mars-relay__footer">
        <span>Encryption: AES-4096-Quantum</span>
        <span>Protocol: DS-NET-8.2</span>
        <span>System uplink active</span>
        <span>{new Date(currentTime).toISOString()}</span>
      </footer>
    </main>
  );
}
