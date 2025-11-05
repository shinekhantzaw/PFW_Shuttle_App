/*Works in addition with DriverPanel, on click for any of the elements, DriverStatus will be updated to reflect
the change in route/status/etc.*/

import { useState } from "react"

export default function DriverControls() {
    const [sharingEnabled, setSharingEnabled] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState("doermer");
    const [driverStatus, setDriverStatus] = useState("idle");

    const handleLocationSharing = () => {
        if (!sharingEnabled) {
            setSharingEnabled(true);
            alert("Location sharing enabled.");
            /*additional code below for handling location sharing*/
        } else {
            setSharingEnabled(false);
            alert("Location sharing disabled.");
            /*additional code below for handling the stopping of location sharing*/
        }
    }

    return (
        <div className="bg-white shadow-md rounded-md flex flex-col gap-3 p-6">
            <h1 className="text-black font-bold">Driver Controls</h1>

            <div className="pt-3 pb-3 border-t border-gray-200">
                <button id="share_location_button" onClick={handleLocationSharing} 
                className={`w-full text-black font-semibold px-6 py-3 rounded-md ${sharingEnabled === true ? "bg-green-500 hover:bg-green-400" : 
                "bg-red-500 hover:bg-red-400"}`}>Share your location</button>
            </div>

            <div className="pt-3 pb-3">
        <p className="text-gray-600 text-sm font-semibold mb-2">Current Route</p>
        <select
          value={selectedRoute}
          onChange={(e) => setSelectedRoute(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-white text-black font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="doermer">Doermer Route</option>
          <option value="canterbury">Canterbury Green Route</option>
          <option value="housing">Housing Route</option>
        </select>

        <p className="text-gray-600 text-sm font-semibold mb-2">Driver Status</p>
        <select
          value={driverStatus}
          onChange={(e) => setDriverStatus(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="active">Active</option>
          <option value="idle">Idle</option>
          <option value="on-break">On Break</option>
        </select>
        </div>

        </div>

    );
}