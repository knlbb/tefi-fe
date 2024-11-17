import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  createConfig,
  WagmiProvider,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { mainnet } from 'viem/chains';

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



import SubmitStrategy from './pages/SubmitStrategy';
import AllStrategies from './pages/AllStrategies';
import Home from './pages/Home';

const config = createConfig({
  chains: [mainnet],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
  },
});
  
const queryClient = new QueryClient();
  
export default function App() {
  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: "34e8551e-6464-4858-a574-0f49e1bee853",
        
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <DynamicWidget />
            <Router>
              <div>
                <Routes>
                  {/* <Route path="/" element={<Home />} /> */}
                  <Route path="/" element={<AllStrategies />} />
                  <Route path="/submit" element={<SubmitStrategy />} />
                </Routes>
              </div>
            </Router>
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider> 
     </DynamicContextProvider>
  );
};




