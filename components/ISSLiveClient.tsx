"use client";

const telemetry = {
  crew: 7,
  altitude: "408 km",
  speed: "27,600 km/h",
  orbits: 16,
  fact: "The ISS is currently near the Japan Trench, a deep oceanic trench renowned for its seismic activity and as the site where the Pacific Plate subducts beneath the North American Plate, creating dramatic underwater topography."
};

const crew = [
  { name: "Christopher Williams", country: "USA", time: "200 days", bio: "Christopher Williams is a physicist who earned his Ph.D. from MIT in 2012, focusing on astrophysics and radio cosmology research. This is his first spaceflight." },
  { name: "Sergey Kud-Sverchkov", country: "Russia", time: "200 days", bio: "Sergey Kud-Sverchkov is on his second spaceflight. He previously flew on Soyuz MS-17 in 2020, spending 184 days in space. He graduated in rocket engineering from Moscow State Technical University." },
  { name: "Sergey Mikayev", country: "Russia", time: "200 days", bio: "Sergey Mikayev is a former military pilot and Major in the Russian Air Force. This is his first spaceflight. He graduated from the Krasnodar Higher Military Aviation School." },
  { name: "Andrey Fedyaev", country: "Russia", time: "121 days", bio: "Andrey Fedyaev is a Roscosmos cosmonaut. He previously flew on SpaceX Crew-6 in 2023, spending 187 days in space. He was the second Russian cosmonaut to fly on Crew Dragon." },
  { name: "Jack Hathaway", country: "USA", time: "121 days", bio: "Jack Hathaway is a U.S. Navy Commander and NASA astronaut. He has over 2,500 flight hours in 30+ aircraft types, more than 500 carrier landings, and flew 39 combat missions. This is his first spaceflight." },
  { name: "Jessica Meir", country: "USA", time: "121 days", bio: "Jessica Meir is a marine biologist and NASA astronaut. On October 18, 2019, she and Christina Koch conducted the first all-female spacewalk. She was selected for the Artemis program and could be among the first humans to return to the Moon." },
  { name: "Sophie Adenot", country: "France", time: "121 days", bio: "Sophie Adenot is France's first female helicopter test pilot and an ESA astronaut. She holds the rank of Colonel in the French Air and Space Force. This is her first spaceflight. She speaks French, English, German, and Russian." },
];

export function ISSLiveClient() {
  return (
    <div className="section">
      <div className="game-shell">
        <div className="game-panel" style={{ padding: "20px" }}>
          <div className="video-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/FuuC4dpSQ1M" title="ISS Live 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/uwXgcTc8oY8" title="ISS Live 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/fO9e9jnhYK8" title="SEN 4K Camera" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
        <aside className="game-sidebar">
            <div className="game-stat"><span>Crew</span><strong>{telemetry.crew}</strong></div>
            <div className="game-stat"><span>Altitude</span><strong>{telemetry.altitude}</strong></div>
            <div className="game-stat"><span>Speed</span><strong>{telemetry.speed}</strong></div>
            <div className="game-stat"><span>Orbits per Day</span><strong>{telemetry.orbits}</strong></div>
        </aside>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>About the Camera Systems</h3>
        <p>
          The ISS High Definition Earth Viewing (HDEV) experiment experienced a total system failure on August 22, 2019. It was subsequently removed for a destructive re-entry on May 7, 2020, onboard the NG-13 Cygnus. HDEV has since been replaced by two operational External High Definition Cameras (EHDCs) and the SEN 4K Camera system, providing enhanced views of Earth.
        </p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>ISS Location Fact</h3>
        <p>{telemetry.fact}</p>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Who is on the ISS</h3>
        <div className="callout-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {crew.map(member => (
                <div key={member.name} className="callout-card">
                    <h4>{member.name} ({member.country})</h4>
                    <p>{member.time} in space</p>
                    <p>{member.bio}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
