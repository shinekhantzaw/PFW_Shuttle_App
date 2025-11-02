import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const CENTER = [41.118472, -85.1096774];
const ZOOM = 15;

export default function MapView({ selectedRoute, recenterButtonId }) {
  return (
    <div className="h-full w-full overflow-hidden rounded-none md:rounded-xl border-0 md:border border-gray-200">
      <MapContainer center={CENTER} zoom={ZOOM} scrollWheelZoom className="h-full w-full">
        {/* We have different map tiles we can use */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri"
        />

        {/* No stops/routes yet, just the base map */}
        <BindRecenter buttonId={recenterButtonId} />
      </MapContainer>
    </div>
  );
}

function BindRecenter({ buttonId }) {
  const map = useMap();

  useEffect(() => {
    const el = document.getElementById(buttonId);
    if (!el) return;
    const handler = () => map.setView(CENTER, ZOOM);
    el.addEventListener("click", handler);
    return () => el.removeEventListener("click", handler);
  }, [buttonId, map]);

  return null;
}
