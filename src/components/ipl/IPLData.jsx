import React from 'react'

export const IPLData = (props) => {
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">IPL Data</h2>

            <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-center text-blue-700">
                    Sponsor: {props?.sponcer || "N/A"}
                </h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
                <h1 className="text-2xl font-bold mb-2">Organisation</h1>
                <p className="text-lg"><strong>Name:</strong> {props?.org?.name || "N/A"}</p>
                <p className="text-lg"><strong>Year:</strong> {props?.org?.year || "N/A"}</p>
                <p className="text-lg"><strong>Host:</strong> {props?.org?.host || "N/A"}</p>
            </div>

            <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-2">Teams</h1>
                {props?.teams?.length > 0 ? (
                    props.teams.map((t, index) => (
                        <p key={index} className="text-center text-lg text-green-800">{t}</p>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No teams available</p>
                )}
            </div>
        </div>
    );

}
