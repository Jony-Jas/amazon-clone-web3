import "@/styles/globals.css";
import Header from "@/components/Header";
import { AppProvider } from "@/context/context";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import 'react-toastify/dist/ReactToastify.css';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `HTTP://127.0.0.1:7545`,
      }),
    }),
  ]
);

const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [new MetaMaskConnector({ chains })],
});

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <WagmiConfig client={wagmiClient}>
        <Header />
        <Component {...pageProps} />
      </WagmiConfig>
    </AppProvider>
  );
}
