import React, { useContext, useEffect } from "react";
import { AppContextProvider, useAppContext } from "../context";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import AddCandidate from "../components/AddCandidate";
import CandidatesInfo from "../components/CandidatesInfo";

const index = () => {
    return (
        <section>
            <CandidatesInfo />
            <AddCandidate />
        </section>
    );
};

export default index;
