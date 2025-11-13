/*Completed driver portals implementing the DriverDashboard.*/

import DriverDashboard from "../../components/DriverDashboard";


export default function DoermerPortal() {
    const controlOptions = ["Doermer", "Walb Student Union"];
    const shuttle = "Doermer School of Business";

    return (
        <div className="flex flex-col min-h-screen">
            <main 
            className="w-full mx-auto bg-[url('/doermer.png')] bg-cover bg-center items-center flex flex-col flex-grow pt-40">
                <DriverDashboard shuttle={shuttle} controlOptions={controlOptions}></DriverDashboard>
            </main>
        </div>
    );
}