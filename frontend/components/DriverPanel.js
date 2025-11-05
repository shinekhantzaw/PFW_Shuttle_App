/*Works in addition to the DriverControls. Shows the current status as well as the current operator of the
shuttle. (Maybe this could be pulled during authentication from the account signing in)? The status should also
update whenever a value from DriverControls selected.*/

export default function DriverPanel({shuttle, status}) {
    return (
        <div className="bg-white shadow-md rounded-md flex flex-col gap-3 p-6">
            <h1 className="text-black font-bold">Driver Status</h1>

            <div className="pt-3 pb-3 border-t border-gray-200">
                <p className="text-gray-600 text-sm font-semibold">Shuttle</p>
                <p className="text-black font-bold">{shuttle}</p>

            </div>

            <div className="pt-3 pb-3">
                <p className="text-gray-600 text-sm font-semibold">Status</p>
                <p className={`font-bold ${status === "Active" ? "text-green-400" : 
                status === "Idle" ? "text-yellow-400" : 
                "text-gray-600"}`}>{status} ●</p>
            </div>

        </div>

    );
}