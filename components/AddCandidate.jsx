import React, { useState } from "react";
import { useAppContext } from "../context";

const AddCandidate = () => {
    const { AddCandidate, contract } = useAppContext();

    const [name, setName] = useState("");
    const handleAddCandidate = async (name) => {
        console.log("candidate name", name);
        if (!contract || !name) return;
        await AddCandidate(name);
    };
    return (
        <div className="w-full bg-gray-800 flex flex-col justify-start items-center p-5">
            <h1 className="font-bold text-gray-200 text-3xl">Add Candidate</h1>
            <div className="flex justify-between gap-5 p-5">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="bg-gray-200 rounded-sm text-white text-gray-900"
                />
                <button
                    className="bg-green-500 hover:bg-green-700 px-3 py-1 rounded-md"
                    onClick={() => {
                        handleAddCandidate(name);
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddCandidate;
