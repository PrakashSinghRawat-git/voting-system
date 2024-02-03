import { AppContextProvider } from "../context";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }) {
    return (
        <ThirdwebProvider
            activeChain={Sepolia}
            clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        >
            <AppContextProvider>
                <Navbar />
                <Component {...pageProps} />
            </AppContextProvider>
        </ThirdwebProvider>
    );
}

export default MyApp;
