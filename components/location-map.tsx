"use client";

import React, { useEffect, useRef, useState } from "react";
import Map, { Marker, MapRef } from "react-map-gl/mapbox";
import { format, toZonedTime } from "date-fns-tz";
import { useTheme } from "next-themes";
import PulsatingDot from "./pulsating-dot";
import { Clock } from "lucide-react";

import "mapbox-gl/dist/mapbox-gl.css";

export const LocationMap = () => {
  const { theme } = useTheme();
  const mapRef = useRef<MapRef>(null);

  const [currentTime, setCurrentTime] = useState<string | null>(null);

  useEffect(() => {
    const timeZone = "America/Los_Angeles"; // PST timezone

    // Set initial time after mount to avoid SSR mismatch
    const updateTime = () => {
      const now = new Date();
      const zonedTime = toZonedTime(now, timeZone);
      setCurrentTime(format(zonedTime, "hh:mm:ss a"));
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mapRef && mapRef.current) {
        mapRef.current.flyTo({
          center: [-117.3873015907678, 33.20330913063883],
          zoom: 12.5,
          speed: 0.8,
          curve: 1.5,
          essential: true,
        });
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [mapRef]);

  return (
    <div className="relative overflow-hidden rounded-lg border border-border mt-4 p-2">
      <div className="rounded-lg overflow-hidden">
        <Map
          initialViewState={{
            latitude: 33.20330913063883,
            longitude: -117.3873015907678,
            zoom: 5,
          }}
          ref={mapRef as React.LegacyRef<MapRef> | undefined}
          mapStyle={
            theme === "dark"
              ? "mapbox://styles/mapbox/dark-v11"
              : "mapbox://styles/mapbox/light-v11"
          }
          style={{ width: "100%", height: 300 }}
          doubleClickZoom={false}
          mapboxAccessToken="pk.eyJ1IjoiamFlZG9uMDEiLCJhIjoiY20zdXY4em95MG12bTJtb2VuNDE2NnE3YiJ9.INFgoseS-jxCVH6BjEM8Mw"
        >
          <Marker
            latitude={33.20330913063883}
            longitude={-117.3873015907678}
            anchor="center"
          >
            <PulsatingDot
              coreDotClassName="bg-blue-300"
              outerDotClassName="bg-blue-300"
            />
          </Marker>
        </Map>
      </div>

      <div className="font-mono bg-background border border-border py-1 px-3 rounded-sm absolute top-4 right-4 flex items-center gap-2 text-muted-foreground text-xs">
        <Clock size={16} /> {currentTime}
      </div>
    </div>
  );
};
