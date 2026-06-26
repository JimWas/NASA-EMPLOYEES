"use client";

import { useState, useEffect, useCallback } from "react";

type Article = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
};

type ApiResponse = {
  count: number;
  next: string | null;
  results: Article[];
};

type Category = "All" | "Missions" | "Science" | "Launches" | "Technology";

const CATEGORY_KEYWORDS: Record<Exclude<Category, "All">, string[]> = {
  Missions: ["mission", "artemis", "iss", "perseverance", "crew", "astronaut", "probe", "spacecraft", "clipper", "voyager", "hubble", "curiosity", "ingenuity"],
  Science: ["discover", "study", "research", "telescope", "webb", "black hole", "exoplanet", "galaxy", "atmosphere", "planet", "star", "asteroid", "comet", "solar", "observation"],
  Launches: ["launch", "rocket", "liftoff", "falcon", "atlas", "vulcan", "starship", "sls", "soyuz", "ariane", "new glenn", "antares"],
  Technology: ["technology", "tech", "engine", "test", "prototype", "develop", "satellite", "sensor", "nuclear", "thruster", "hardware", "system"],
};

const CATEGORY_COLORS: Record<Category, { badge: string; text: string }> = {
  All:        { badge: "rgba(228,63,47,0.15)",   text: "#ff7a59" },
  Missions:   { badge: "rgba(245,166,35,0.15)",  text: "#ffb347" },
  Science:    { badge: "rgba(68,136,255,0.15)",  text: "#6fa8dc" },
  Launches:   { badge: "rgba(34,211,160,0.15)",  text: "#22d3a0" },
  Technology: { badge: "rgba(0,188,212,0.15)",   text: "#4dd0e1" },
};

const CATEGORIES: Category[] = ["All", "Missions", "Science", "Launches", "Technology"];

const PAGE_SIZE = 20;

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function guessCategory(article: Article): Exclude<Category, "All"> {
  const text = (article.title + " " + article.summary).toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS) as [Exclude<Category, "All">, string[]][]) {
    if (keywords.some((kw) => text.includes(kw))) return cat;
  }
  return "Missions";
}

function CategoryBadge({ category }: { category: Exclude<Category, "All"> }) {
  const { badge, text } = CATEGORY_COLORS[category];
  return (
    <span style={{
      background: badge,
      color: text,
      fontSize: "10px",
      fontFamily: "Arial, sans-serif",
      fontWeight: 700,
      padding: "2px 8px",
      borderRadius: "4px",
      textTransform: "uppercase",
      letterSpacing: "0.8px",
    }}>
      {category}
    </span>
  );
}

function ArticleSkeleton() {
  return (
    <div style={{
      background: "#101726",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "12px",
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    }}>
      {[60, 100, 75, 85, 40].map((w, i) => (
        <div key={i} style={{
          height: i === 1 ? "13px" : "11px",
          width: `${w}%`,
          background: "rgba(255,255,255,0.06)",
          borderRadius: "4px",
          animation: "pulse 1.5s ease-in-out infinite",
        }} />
      ))}
    </div>
  );
}

export function SpaceNewsFeed() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchArticles = useCallback(async (newOffset: number, replace: boolean) => {
    try {
      const res = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=${PAGE_SIZE}&offset=${newOffset}&ordering=-published_at`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data: ApiResponse = await res.json();
      setArticles((prev) => replace ? data.results : [...prev, ...data.results]);
      setHasMore(data.next !== null);
      setOffset(newOffset + PAGE_SIZE);
      setLastUpdated(new Date());
    } catch {
      setError("Could not load news. Please try again.");
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchArticles(0, true).finally(() => setLoading(false));
  }, [fetchArticles]);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    await fetchArticles(offset, false);
    setLoadingMore(false);
  };

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => guessCategory(a) === activeCategory);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  return (
    <div className="section" style={{ marginTop: "20px" }}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .news-card {
          background: #101726;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-decoration: none;
          transition: border-color 200ms ease, background 200ms ease;
        }
        .news-card:hover {
          border-color: rgba(228,63,47,0.4);
          background: #141f31;
        }
        .news-card__thumb {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 8px;
          background: #0d1f3c;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
          margin-top: 14px;
        }
        .filter-pill {
          background: rgba(10,18,32,0.06);
          border: 1px solid rgba(10,18,32,0.15);
          color: #2e3a4e;
          font-size: 12px;
          font-family: Arial, sans-serif;
          padding: 6px 14px;
          border-radius: 20px;
          cursor: pointer;
          transition: background 160ms ease, color 160ms ease, border-color 160ms ease;
        }
        .filter-pill:hover {
          background: rgba(10,18,32,0.12);
          color: #0a1220;
        }
        .filter-pill--active {
          background: #e43f2f;
          border-color: #e43f2f;
          color: #fff;
          font-weight: 700;
        }
        .featured-card {
          background: #101726;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
          transition: border-color 200ms ease;
        }
        .featured-card:hover {
          border-color: rgba(228,63,47,0.4);
        }
        .featured-card__image {
          flex: 1 1 260px;
          min-height: 180px;
          background: #0d1f3c;
          position: relative;
          overflow: hidden;
        }
        .featured-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }
        .featured-card__image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.1);
          font-size: 56px;
          position: absolute;
          inset: 0;
        }
        .featured-badge {
          position: absolute;
          top: 12px;
          left: 14px;
          background: #e43f2f;
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          font-family: Arial, sans-serif;
          padding: 3px 10px;
          border-radius: 4px;
          letter-spacing: 1px;
          text-transform: uppercase;
          z-index: 1;
        }
        .featured-card__copy {
          flex: 2 1 280px;
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          justify-content: center;
        }
      `}</style>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "18px", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <span className="section__eyebrow">Live Feed</span>
          <h3 style={{ marginTop: "4px" }}>Space News</h3>
        </div>
        <div style={{ fontSize: "12px", color: "#4a5870", fontFamily: "Arial, sans-serif", display: "flex", alignItems: "center", gap: "6px", opacity: 0.7 }}>
          {lastUpdated && (
            <>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4caf50", display: "inline-block", flexShrink: 0 }} />
              Updated {timeAgo(lastUpdated.toISOString())}
            </>
          )}
        </div>
      </div>

      {/* Filter pills */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "22px" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-pill${activeCategory === cat ? " filter-pill--active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {error && (
        <div style={{ background: "rgba(228,63,47,0.1)", border: "1px solid rgba(228,63,47,0.3)", borderRadius: "12px", padding: "16px 20px", color: "#ff7a59", fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
          {error}
        </div>
      )}

      {loading && (
        <>
          <div style={{ background: "#101726", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden", display: "flex", flexWrap: "wrap", marginBottom: "14px", minHeight: "180px" }}>
            <div style={{ flex: "1 1 260px", background: "rgba(255,255,255,0.04)", animation: "pulse 1.5s ease-in-out infinite" }} />
            <div style={{ flex: "2 1 280px", padding: "22px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[50, 90, 70, 80].map((w, i) => (
                <div key={i} style={{ height: i === 1 ? "17px" : "12px", width: `${w}%`, background: "rgba(255,255,255,0.06)", borderRadius: "4px", animation: "pulse 1.5s ease-in-out infinite" }} />
              ))}
            </div>
          </div>
          <div className="news-grid">
            {Array.from({ length: 6 }).map((_, i) => <ArticleSkeleton key={i} />)}
          </div>
        </>
      )}

      {!loading && !error && featured && (
        <>
          {/* Featured article */}
          <a href={featured.url} target="_blank" rel="noreferrer" className="featured-card" style={{ marginBottom: "14px", display: "flex", textDecoration: "none", color: "inherit" }}>
            <div className="featured-card__image">
              {featured.image_url ? (
                <img src={featured.image_url} alt="" loading="lazy" />
              ) : (
                <div className="featured-card__image-placeholder">🚀</div>
              )}
              <span className="featured-badge">Featured</span>
            </div>
            <div className="featured-card__copy">
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CategoryBadge category={guessCategory(featured)} />
                <span style={{ color: "#4a5870", fontSize: "11px", fontFamily: "Arial, sans-serif" }}>{featured.news_site} · {timeAgo(featured.published_at)}</span>
              </div>
              <div style={{ fontSize: "17px", fontWeight: 700, fontFamily: "'Arial Black', sans-serif", color: "#f5f7fb", lineHeight: 1.3 }}>
                {featured.title}
              </div>
              <div style={{ fontSize: "13px", color: "#b9c2d3", lineHeight: 1.6, fontFamily: "Arial, sans-serif" }}>
                {featured.summary.slice(0, 200)}{featured.summary.length > 200 ? "…" : ""}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#e43f2f", fontFamily: "Arial, sans-serif", fontWeight: 700, marginTop: "4px" }}>
                Read full story
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </a>

          {/* Article grid */}
          {rest.length > 0 && (
            <div className="news-grid">
              {rest.map((article) => {
                const cat = guessCategory(article);
                return (
                  <a key={article.id} href={article.url} target="_blank" rel="noreferrer" className="news-card">
                    {article.image_url && (
                      <img src={article.image_url} alt="" className="news-card__thumb" loading="lazy" />
                    )}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
                      <CategoryBadge category={cat} />
                      <span style={{ color: "#4a5870", fontSize: "11px", fontFamily: "Arial, sans-serif", flexShrink: 0 }}>{timeAgo(article.published_at)}</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 700, fontFamily: "'Arial Black', sans-serif", color: "#f5f7fb", lineHeight: 1.35 }}>
                      {article.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#b9c2d3", fontFamily: "Arial, sans-serif", lineHeight: 1.5, flex: 1 }}>
                      {article.summary.slice(0, 120)}{article.summary.length > 120 ? "…" : ""}
                    </div>
                    <div style={{ fontSize: "11px", color: "#4a5870", fontFamily: "Arial, sans-serif" }}>{article.news_site}</div>
                  </a>
                );
              })}
            </div>
          )}

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "48px 0", color: "#4a5870", fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
              No {activeCategory} articles in the current batch — try loading more or switching category.
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div style={{ textAlign: "center", marginTop: "28px" }}>
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(228,63,47,0.5)",
                  color: loadingMore ? "#4a5870" : "#e43f2f",
                  fontSize: "13px",
                  fontWeight: 700,
                  fontFamily: "Arial, sans-serif",
                  padding: "10px 28px",
                  borderRadius: "8px",
                  cursor: loadingMore ? "default" : "pointer",
                  letterSpacing: "0.5px",
                  transition: "border-color 160ms, color 160ms",
                }}
              >
                {loadingMore ? "Loading…" : "Load more stories"}
              </button>
            </div>
          )}
        </>
      )}

      <div style={{ marginTop: "32px", fontSize: "12px", color: "#4a5870", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        News sourced from{" "}
        <a href="https://www.spaceflightnewsapi.net" target="_blank" rel="noreferrer" style={{ color: "#b9c2d3", textDecoration: "underline" }}>
          Spaceflight News API
        </a>
        {" "}— covering NASA, SpaceX, ESA, and more.
      </div>
    </div>
  );
}
