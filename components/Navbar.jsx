import React from "react";
import { useAppContext } from "../context";

const Navbar = () => {
    const { connect, address } = useAppContext();

    return (
        <div>
            <button
                className={`px-4 py-2 bg-green-600 ${
                    address
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-green-700"
                }`}
                onClick={connect}
            >
                {address ? "Connected" : "Connect"}
            </button>
        </div>
    );
};

export default Navbar;
