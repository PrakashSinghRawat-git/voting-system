import React, { useEffect } from "react";
import { useAppContext } from "../context";

const CandidatesInfo = () => {
    const {
        getAllVotesOfCandidates,
        contract,
        address,
        allCandidatesData,
        setAllCandidatesData,
        addVoteToCandidate,
    } = useAppContext();

    useEffect(() => {
        getAllVotesOfCandidates();
    }, [contract, address]);

    const handleAddVote = (index) => {
        console.log("adding vote to ", index, " candidate");
        addVoteToCandidate(index);
    };
    return (
        <div className="flex flex-col justify-start items-center bg-gray-800 w-full border-b-[1px] p-5 text-gray-200">
            <h1 className="font-bold text-3xl">All Candidates</h1>
            <div className="border-[1px] border-gray-400 w-[400px] p-2 w-">
                {allCandidatesData.map((candidate, index) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-3 gap-2 items-cente rounded-sm"
                        >
                            <p className="">
                                {" "}
                                {candidate.index + 1} : {candidate.name}{" "}
                            </p>
                            <p> {candidate.voteCount}</p>
                            <button
                                className="bg-blue-500 rounded-sm mb-1 font-bold"
                                onClick={() => {
                                    handleAddVote(candidate.index);
                                }}
                            >
                                Vote
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CandidatesInfo;
