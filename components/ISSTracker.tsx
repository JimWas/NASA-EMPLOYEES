"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import all Leaflet-related components and logic
const Map = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false, loading: () => <div className="section" style={{ height: "600px" }}>Loading Map...</div> }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export function ISSTracker() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [L, setLeaflet] = useState<any>(null);

  useEffect(() => {
    // Import Leaflet dynamically on the client side only
    import("leaflet").then((leaflet) => {
      setLeaflet(leaflet);
    });

    const fetchPosition = async () => {
      try {
        const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
        const data = await response.json();
        setPosition([data.latitude, data.longitude]);
      } catch (error) {
        console.error("Error fetching ISS position:", error);
      }
    };

    fetchPosition();
    const interval = setInterval(fetchPosition, 5000);
    return () => clearInterval(interval);
  }, []);

  const icon = useMemo(() => {
    if (!L) return null;
    return L.icon({
      iconUrl: "/iss-marker.svg",
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -20],
    });
  }, [L]);

  if (!position || !L) return <div className="section">Loading ISS location...</div>;

  return (
    <div className="section" style={{ height: "600px" }}>
      <Map center={position} zoom={3} style={{ height: "100%", borderRadius: "20px" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>ISS Location</Popup>
        </Marker>
      </Map>
    </div>
  );
}
