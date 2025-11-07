import { useState } from "react";
/*For convinence, I decided to combine DriverControls-Panel into one component.
controlOptions[0-2] hold up to 3 destinations a driver would usually take. E.g. the
housing shuttle usually goes to Walb (0), and the Housing building(1).*/

/*panelOptions[0-1] hold the shuttle name and status respectively, which is changed to reflect
the changes made from driverControls and eventually to the student portal.*/


export default function DriverDashboard({ controlOptions, shuttle}) {
    const [sharingEnabled, setSharingEnabled] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState(controlOptions[0]);
    const [driverStatus, setDriverStatus] = useState("Idle");

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

    const handleRouteChange = (route) => {
        setSelectedRoute(route);
        /*handle routing updates. This is for communicating back with the driverPanel
        and sending the current route back to the database and then the students @ the
        live map.*/

    }

    const handleStatusChange = (status) => {
        setDriverStatus(status);
        /*handle status updates. This is for communicating back with the driverPanel
        and sending the current status back to the database and then the students @ the
        live map.*/
    }




    return (
        <div className="pt-3 pb-3 bg-white shadow-md rounded-md">
            {/*Driver Status Pannel*/}
            <div className="bg-white rounded-md flex flex-col gap-3 p-6">
                <h1 className="text-black font-bold">Driver Status</h1>

                <div className="pt-3 pb-3 border-t border-gray-200">
                    <p className="text-gray-600 text-sm font-semibold">Shuttle</p>
                    <p className="text-black font-bold">{shuttle}</p>

                </div>

                <div className="pt-3 pb-3">
                    <p className="text-gray-600 text-sm font-semibold">Status</p>
                    <p className={`font-bold ${driverStatus === "Active" ? "text-green-400" :
                        driverStatus === "Idle" ? "text-yellow-400" :
                            "text-red-400"}`}>{driverStatus} ●</p>
                </div>
            </div>

            {/*Driver Controls*/}
            <div className="bg-white rounded-md flex flex-col gap-3 p-6">
                <h1 className="text-black font-bold">Driver Controls</h1>

                <div className="pt-3 pb-3 border-t border-gray-200">
                    <button id="share_location_button" onClick={handleLocationSharing}
                        className={`w-full text-black font-semibold px-6 py-3 rounded-md ${sharingEnabled ? "bg-green-500 hover:bg-green-400" :
                            "bg-red-500 hover:bg-red-400"}`}>{sharingEnabled ? "Location Sharing Enabled" : "Enable Location Sharing"}</button>
                </div>

                <div className="pt-3 pb-3">
                    <p className="text-gray-600 text-sm font-semibold mb-2">Current Route</p>
                    <select
                        value={selectedRoute}
                        onChange={(e) => handleRouteChange(e.target.value)}
                        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md bg-white text-black font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        {controlOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>

                    <p className="text-gray-600 text-sm font-semibold mb-2">Driver Status</p>
                    <select
                        value={driverStatus}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-black font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        <option value="Active">Active</option>
                        <option value="Idle">Idle</option>
                        <option value="On Break">On Break</option>
                    </select>
                </div>

            </div>

        </div>

    );
}