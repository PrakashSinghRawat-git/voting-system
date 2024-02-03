import React, { useContext, createContext, useState } from "react";
import {
    useContract,
    useContractRead,
    useContractWrite,
    useAddress,
    useMetamask,
} from "@thirdweb-dev/react";

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const [allCandidatesData, setAllCandidatesData] = useState([]);
    const { contract } = useContract(
        "0x839172f8c3562B84B4d5C59AB9ca395F1a5050c9"
    );
    const address = useAddress();
    const connect = useMetamask();

    const { mutateAsync: addCandidate, isLoading } = useContractWrite(
        contract,
        "addCandidate"
    );

    const AddCandidate = async (name) => {
        if (!contract) return;

        try {
            const data = await addCandidate({
                args: [name],
            });
            // update the state with new candidate
            const updatedCandidates = [
                ...allCandidatesData,
                {
                    index: allCandidatesData.length,
                    name: name,
                    voteCount: 0,
                },
            ];
            setAllCandidatesData(updatedCandidates);
            console.log("candidate added", data);
        } catch (err) {
            console.log("error occured while adding candidate", err);
        }
    };

    const getAllVotesOfCandidates = async () => {
        if (!contract) return;
        const data = await contract.call("getAllVotesOfCandiates");

        const formattedCandidates = data.map((candidate, index) => {
            return {
                index: index,
                name: candidate.name,
                voteCount: candidate.voteCount.toNumber(),
            };
        });

        setAllCandidatesData(formattedCandidates);
        console.log("getAllVotesOfCandidates", formattedCandidates);
        return formattedCandidates;
    };

    const addVoteToCandidate = async (index) => {
        if (!contract) return;

        try {
            const data = await contract.call("vote", [index]);
            // update the state
            const updatedCandidates = allCandidatesData.map((candidate, i) => {
                if (i === index) {
                    candidate.voteCount += 1;
                }
                return candidate;
            });
            setAllCandidatesData(updatedCandidates);
            console.log("vote added", data);
        } catch (err) {
            console.log("error occured while adding vote", err);
        }
    };
    return (
        <AppContext.Provider
            value={{
                getAllVotesOfCandidates,
                contract,
                AddCandidate,
                address,
                connect,
                allCandidatesData,
                setAllCandidatesData,
                addVoteToCandidate,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
