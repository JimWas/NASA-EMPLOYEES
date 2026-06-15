"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import the map to avoid SSR issues with Leaflet
const Map = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
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
import L from "leaflet";

// Fix Leaflet icon issue
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export function ISSTracker() {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
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

  if (!position) return <div className="section">Loading ISS location...</div>;

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
