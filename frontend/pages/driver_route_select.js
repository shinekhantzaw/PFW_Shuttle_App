/*Transition page between sign in screen and 
driver portal. After being authenticated, the
driver will select one of three routes (more
can be implemented as needed), which will then transfer
them to the appropiate websites. For the demo, a driver
dummy acount will need to be made to access the driver
portals.*/

export default function DriverRouteSelect() {
    return (
        <div className="flex flex-col min-h-screen">
            
            <main 
            className=" w-full mx-auto bg-white items-center flex flex-col flex-grow pt-100 ">

                <div id="selectRoute" 
                className="items-center bg-white shadow-md rounded-md flex flex-col gap-3 p-6">
                    <h1 className="text-black text-xl font-semibold">Select Your Shuttle</h1>
                    <a href="/driver_portals/canterbury_portal" id="canterburyButton" className="bg-[#3b82f6] text-black font-semibold px-6 py-3 rounded-md hover:bg-blue-100">Canterbury Green</a>
                    <a href="/driver_portals/doermer_portal" id="doermerButton" className="bg-[#3b82f6] text-black font-semibold px-6 py-3 rounded-md hover:bg-blue-100">Doermer</a>
                    <a href="/driver_portals/housing_portal" id="housingButton" className="bg-[#3b82f6] text-black font-semibold px-6 py-3 rounded-md hover:bg-blue-100">Housing</a>
                </div>
            </main>
        </div>
    );
}