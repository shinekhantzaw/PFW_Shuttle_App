/*Transition page between sign in screen and 
driver portal. After being authenticated, the
driver will select one of three routes (more
can be implemented as needed), which will then transfer
them to the appropiate websites. For the demo, a driver
dummy acount will need to be made to access the driver
portals.*/

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DriverRouteSelect() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
            <main 
            className="container mx-auto bg-white items-center flex flex-col flex-grow pt-40">

                <div id="selectRoute" 
                className="items-center bg-white shadow-md rounded-md flex flex-col gap-3 p-6">
                    <h1>Select Your Shuttle</h1>bg-[#cfb991] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400
                    <a id="doermerButton" className="">Doermer</a>
                    <a id="canterburyButton" className="bg-[#cfb991] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400">Canterbury Green</a>
                    <a id="housingButton" className="bg-[#cfb991] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400">Housing</a>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}