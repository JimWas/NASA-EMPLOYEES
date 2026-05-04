"use client";

import { useEffect, useRef, useState } from "react";

const WIDTH = 420;
const HEIGHT = 640;
const STARSHIP_X = 118;
const STARSHIP_WIDTH = 46;
const STARSHIP_HEIGHT = 88;
const GRAVITY = 0.42;
const FLAP_FORCE = -7.4;
const PIPE_SPEED = 2.7;
const PIPE_WIDTH = 74;
const PIPE_GAP = 175;
const PIPE_SPACING = 250;
const GROUND_HEIGHT = 82;

type Pipe = {
  x: number;
  gapY: number;
  passed: boolean;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function createPipe(startX: number): Pipe {
  return {
    x: startX,
    gapY: 150 + Math.random() * 210,
    passed: false
  };
}

export function StarshipGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const scoreRef = useRef(0);
  const highScoreRef = useRef(0);
  const startedRef = useRef(false);
  const gameOverRef = useRef(false);
  const starshipYRef = useRef(HEIGHT / 2 - STARSHIP_HEIGHT / 2);
  const velocityRef = useRef(0);
  const pipesRef = useRef<Pipe[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [status, setStatus] = useState<"ready" | "playing" | "game-over">("ready");

  useEffect(() => {
    const savedHighScore = window.localStorage.getItem("starship-high-score");
    if (savedHighScore) {
      const parsed = Number(savedHighScore);
      highScoreRef.current = parsed;
      setHighScore(parsed);
    }
  }, []);

  useEffect(() => {
    scoreRef.current = score;
  }, [score]);

  const syncHighScore = (nextScore: number) => {
    setHighScore((current) => {
      const best = Math.max(current, nextScore);
      highScoreRef.current = best;
      window.localStorage.setItem("starship-high-score", String(best));
      return best;
    });
  };

  const resetGame = () => {
    starshipYRef.current = HEIGHT / 2 - STARSHIP_HEIGHT / 2;
    velocityRef.current = 0;
    pipesRef.current = [createPipe(WIDTH + 140), createPipe(WIDTH + 140 + PIPE_SPACING)];
    scoreRef.current = 0;
    setScore(0);
    startedRef.current = false;
    gameOverRef.current = false;
    setStatus("ready");
  };

  const flap = () => {
    if (gameOverRef.current) {
      resetGame();
      return;
    }

    if (!startedRef.current) {
      startedRef.current = true;
      setStatus("playing");
    }

    velocityRef.current = FLAP_FORCE;
  };

  useEffect(() => {
    resetGame();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "ArrowUp") {
        event.preventDefault();
        flap();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const drawBackground = () => {
      const sky = context.createLinearGradient(0, 0, 0, HEIGHT);
      sky.addColorStop(0, "#03101f");
      sky.addColorStop(0.58, "#0d2447");
      sky.addColorStop(1, "#162f57");
      context.fillStyle = sky;
      context.fillRect(0, 0, WIDTH, HEIGHT);

      context.fillStyle = "rgba(255,255,255,0.08)";
      for (let i = 0; i < 40; i += 1) {
        const x = (i * 97) % WIDTH;
        const y = (i * 53) % (HEIGHT - GROUND_HEIGHT - 40);
        const r = i % 5 === 0 ? 2 : 1;
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
      }

      context.fillStyle = "rgba(255,255,255,0.08)";
      context.fillRect(0, HEIGHT - GROUND_HEIGHT, WIDTH, GROUND_HEIGHT);
      context.fillStyle = "#203a68";
      context.fillRect(0, HEIGHT - GROUND_HEIGHT, WIDTH, 8);
    };

    const drawPipe = (pipe: Pipe) => {
      const topHeight = pipe.gapY - PIPE_GAP / 2;
      const bottomY = pipe.gapY + PIPE_GAP / 2;
      const bottomHeight = HEIGHT - GROUND_HEIGHT - bottomY;

      context.fillStyle = "#8d6f43";
      context.fillRect(pipe.x, 0, PIPE_WIDTH, topHeight);
      context.fillRect(pipe.x, bottomY, PIPE_WIDTH, bottomHeight);

      context.fillStyle = "#c8a56f";
      context.fillRect(pipe.x - 6, topHeight - 18, PIPE_WIDTH + 12, 18);
      context.fillRect(pipe.x - 6, bottomY, PIPE_WIDTH + 12, 18);

      context.fillStyle = "rgba(255, 255, 255, 0.08)";
      context.fillRect(pipe.x + 10, 0, 10, topHeight);
      context.fillRect(pipe.x + 10, bottomY, 10, bottomHeight);
    };

    const drawStarship = () => {
      const x = STARSHIP_X;
      const y = starshipYRef.current;
      const angle = clamp(velocityRef.current * 0.05, -0.5, 0.7);

      context.save();
      context.translate(x + STARSHIP_WIDTH / 2, y + STARSHIP_HEIGHT / 2);
      context.rotate(angle);
      context.translate(-(x + STARSHIP_WIDTH / 2), -(y + STARSHIP_HEIGHT / 2));

      context.fillStyle = "#d8dde6";
      context.beginPath();
      context.moveTo(x + STARSHIP_WIDTH / 2, y);
      context.lineTo(x + STARSHIP_WIDTH, y + STARSHIP_HEIGHT - 18);
      context.lineTo(x, y + STARSHIP_HEIGHT - 18);
      context.closePath();
      context.fill();

      context.fillStyle = "#9aa4b3";
      context.fillRect(x + 6, y + 14, STARSHIP_WIDTH - 12, STARSHIP_HEIGHT - 28);

      context.fillStyle = "#111827";
      context.fillRect(x + STARSHIP_WIDTH / 2 - 6, y + 20, 12, 26);

      context.fillStyle = "#7d8795";
      context.beginPath();
      context.moveTo(x + 2, y + STARSHIP_HEIGHT - 20);
      context.lineTo(x - 10, y + STARSHIP_HEIGHT + 6);
      context.lineTo(x + 7, y + STARSHIP_HEIGHT - 8);
      context.closePath();
      context.fill();

      context.beginPath();
      context.moveTo(x + STARSHIP_WIDTH - 2, y + STARSHIP_HEIGHT - 20);
      context.lineTo(x + STARSHIP_WIDTH + 10, y + STARSHIP_HEIGHT + 6);
      context.lineTo(x + STARSHIP_WIDTH - 7, y + STARSHIP_HEIGHT - 8);
      context.closePath();
      context.fill();

      context.fillStyle = "#ff8d3a";
      context.beginPath();
      context.moveTo(x + STARSHIP_WIDTH / 2, y + STARSHIP_HEIGHT - 4);
      context.lineTo(x + STARSHIP_WIDTH / 2 - 12, y + STARSHIP_HEIGHT + 28 + Math.random() * 10);
      context.lineTo(x + STARSHIP_WIDTH / 2 + 12, y + STARSHIP_HEIGHT + 28 + Math.random() * 10);
      context.closePath();
      context.fill();

      context.restore();
    };

    const drawHud = () => {
      context.fillStyle = "rgba(8, 13, 23, 0.56)";
      context.fillRect(18, 18, 132, 58);
      context.fillRect(WIDTH - 150, 18, 132, 58);

      context.fillStyle = "#f8fbff";
      context.font = "700 14px Arial";
      context.fillText("SCORE", 34, 40);
      context.fillText("BEST", WIDTH - 132, 40);

      context.font = "900 28px Arial";
      context.fillText(String(scoreRef.current), 34, 66);
      context.fillText(String(highScoreRef.current), WIDTH - 132, 66);

      if (!startedRef.current && !gameOverRef.current) {
        context.fillStyle = "rgba(7, 12, 22, 0.72)";
        context.fillRect(34, HEIGHT / 2 - 76, WIDTH - 68, 132);
        context.fillStyle = "#ffffff";
        context.font = "900 26px Arial";
        context.fillText("Tap or press Space", 84, HEIGHT / 2 - 24);
        context.font = "500 18px Arial";
        context.fillText("Guide Starship through the launch towers", 54, HEIGHT / 2 + 10);
        context.fillText("Avoid every obstacle and keep climbing", 62, HEIGHT / 2 + 38);
      }

      if (gameOverRef.current) {
        context.fillStyle = "rgba(7, 12, 22, 0.8)";
        context.fillRect(52, HEIGHT / 2 - 88, WIDTH - 104, 160);
        context.fillStyle = "#ffffff";
        context.font = "900 30px Arial";
        context.fillText("Mission Failed", 120, HEIGHT / 2 - 30);
        context.font = "500 18px Arial";
        context.fillText(`Final score: ${scoreRef.current}`, 146, HEIGHT / 2 + 6);
        context.fillText("Tap or press Space to relaunch", 104, HEIGHT / 2 + 38);
      }
    };

    const detectCollision = () => {
      const y = starshipYRef.current;
      if (y <= 0 || y + STARSHIP_HEIGHT >= HEIGHT - GROUND_HEIGHT) {
        return true;
      }

      return pipesRef.current.some((pipe) => {
        const withinX =
          STARSHIP_X + STARSHIP_WIDTH > pipe.x && STARSHIP_X < pipe.x + PIPE_WIDTH;
        if (!withinX) {
          return false;
        }

        const gapTop = pipe.gapY - PIPE_GAP / 2;
        const gapBottom = pipe.gapY + PIPE_GAP / 2;

        return y < gapTop || y + STARSHIP_HEIGHT > gapBottom;
      });
    };

    const tick = () => {
      drawBackground();

      if (startedRef.current && !gameOverRef.current) {
        velocityRef.current += GRAVITY;
        starshipYRef.current += velocityRef.current;

        pipesRef.current = pipesRef.current.map((pipe) => ({
          ...pipe,
          x: pipe.x - PIPE_SPEED
        }));

        const lastPipe = pipesRef.current[pipesRef.current.length - 1];
        if (lastPipe && lastPipe.x < WIDTH - PIPE_SPACING) {
          pipesRef.current.push(createPipe(WIDTH + PIPE_WIDTH));
        }

        pipesRef.current = pipesRef.current
          .filter((pipe) => pipe.x + PIPE_WIDTH > -30)
          .map((pipe) => {
            if (!pipe.passed && pipe.x + PIPE_WIDTH < STARSHIP_X) {
              const nextScore = scoreRef.current + 1;
              scoreRef.current = nextScore;
              setScore(nextScore);
              syncHighScore(nextScore);
              return { ...pipe, passed: true };
            }
            return pipe;
          });

        if (detectCollision()) {
          gameOverRef.current = true;
          setStatus("game-over");
          syncHighScore(scoreRef.current);
        }
      }

      pipesRef.current.forEach(drawPipe);
      drawStarship();
      drawHud();
      animationRef.current = window.requestAnimationFrame(tick);
    };

    animationRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="game-shell">
      <div className="game-panel">
        <div className="game-panel__header">
          <div>
            <span className="section__eyebrow">Mini-game</span>
            <h3>Starship Flight</h3>
          </div>
          <p>
            A Flappy Bird-inspired arcade challenge. Press <strong>Space</strong>,
            <strong> Arrow Up</strong>, or tap the game area to keep Starship in the air.
          </p>
        </div>
        <button type="button" className="game-canvas-wrap" onClick={flap}>
          <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} className="game-canvas" />
        </button>
      </div>

      <aside className="game-sidebar">
        <div className="game-stat">
          <span>Status</span>
          <strong>
            {status === "ready" ? "Ready for launch" : status === "playing" ? "In flight" : "Relaunch required"}
          </strong>
        </div>
        <div className="game-stat">
          <span>Current Score</span>
          <strong>{score}</strong>
        </div>
        <div className="game-stat">
          <span>Best Score</span>
          <strong>{highScore}</strong>
        </div>
        <div className="game-instructions">
          <h4>How it works</h4>
          <p>Keep the Starship upright and thread it through launch-tower gaps.</p>
          <p>Each cleared obstacle adds one point.</p>
          <p>If you hit the tower or the ground, the run ends instantly.</p>
        </div>
      </aside>
    </div>
  );
}
