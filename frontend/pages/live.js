import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import InfoPanel from "../components/InfoPanel";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });
import RoutePicker from "../components/RoutePicker";

export default function Live() {
  const [selectedRoute, setSelectedRoute] = useState("all");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => setIsFullScreen((v) => !v);

  return (
    <>
      <Head>
        <title>Live Map • PFW Shuttle</title>
      </Head>

      <main
        className={`min-h-screen transition-all duration-300 ${
          isFullScreen
            ? "bg-white text-white fixed inset-0 z-[9999]"
            : "bg-white text-white"
        }`}
      >
        {/* Header (hidden in full screen) */}
        {!isFullScreen && (
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl md:text-3xl font-extrabold text-yellow-400">
              Live Map
            </h1>
            <div className="flex items-center gap-3">
              <RoutePicker value={selectedRoute} onChange={setSelectedRoute} />
              <button
                id="recenter-btn"
                className="rounded-md border border-gray-600 px-3 py-2 text-sm hover:bg-gray-800 transition bg-black text-white"
              >
                Recenter
              </button>
            </div>
          </div>
        )}

        {/* Map and InfoPanel Section */}
        <div
          className={`max-w-6xl mx-auto grid md:grid-cols-[1fr_350px] gap-4 ${
            isFullScreen ? "px-0 pb-0" : "px-0 md:px-4 pb-6"
          }`}
        >
          {/*Map*/}
          <div
            className={`relative ${
              isFullScreen ? "h-screen" : "h-[70vh] md:h-[78vh]"
            } rounded-xl overflow-hidden border border-gray-700 shadow-lg`}
          >
            <MapView
              selectedRoute={selectedRoute}
              recenterButtonId="recenter-btn"
            />

            {/* Full Screen toggle overlay button */}
            <button
              onClick={toggleFullScreen}
              style={{ zIndex: 10000 }}
              className="absolute top-3 right-3 pointer-events-auto bg-yellow-500 text-black p-2 rounded-full shadow-lg hover:bg-yellow-400 transition flex items-center justify-center"
              title={isFullScreen ? "Exit Full Screen" : "Full Screen"}
              aria-label={isFullScreen ? "Exit Full Screen" : "Full Screen"}
            >
              {isFullScreen ? (
                // Minimize icon (exit full screen)
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10h6V4M20 14h-6v6M10 10L3 3M14 14l7 7"/>
                </svg>
              ) : (
                // Maximize icon (enter full screen)
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 3h7v7M10 21H3v-7M21 3l-7 7M3 21l7-7"/>
                </svg>
              )}
            </button>
          </div>

          {/* Info Panel (hidden during fullscreen)*/}
          {!isFullScreen && (
            <div className="md:block mt-0 md:mt-0">
              <InfoPanel selectedRoute={selectedRoute} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
