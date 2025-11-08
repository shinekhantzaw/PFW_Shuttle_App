/*Completed driver portals implementing the DriverDashboard.*/

import DriverDashboard from "../../components/DriverDashboard";


export default function CanterburyPortal() {
    const controlOptions = ["Canterbury Green", "Walb Student Union"];
    const shuttle = "Canterbury Green";

    return (
        <div className="flex flex-col min-h-screen">
            <main 
            className="w-full mx-auto bg-[url('/canterbury.png')] bg-cover bg-center items-center flex flex-col flex-grow pt-40">
                <div className="bg-white rounded-md flex flex-col gap-3 p-6"></div>
                <DriverDashboard shuttle={shuttle} controlOptions={controlOptions}></DriverDashboard>
            </main>
        </div>
    );
}