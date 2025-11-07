/*Completed driver portals implementing the DriverDashboard.*/

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DriverDashboard from "../../components/DriverDashboard";


export default function DoermerPortal() {
    /*name will be retrieved possibly form an api call. Passed in during the
    auth/login process.*/
    const name = "John Doe"
    const controlOptions = ["Doermer", "Walb Student Union"];
    const shuttle = "Doermer School of Business";

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main 
            className="container mx-auto bg-white items-center flex flex-col flex-grow pt-40">
                <h1 className= "text-3xl font-bold text-black mb-6">Welcome, {name}</h1>
                <DriverDashboard shuttle={shuttle} controlOptions={controlOptions}></DriverDashboard>
            </main>
            <Footer></Footer>
        </div>
    );
}