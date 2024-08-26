import "./App.css";
import Homepage from "./pages/Homepage";
import { Web3Auth } from "@web3auth/modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { useEffect, useState } from "react";

// import RPC from "./clients/viemRPC";
// import RPC from "./ethersRPC";
// import RPC from "./web3RPC";
import HEDERA from "./clients/viemHedera";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const clientId =
  "BFBDKROkBydyikVmnzoCq_eiin-Rwj-LUUdYtF1wIChjeHi5zHpyVQvNjMH-3FmQEeapcfOLn3k9WHtcTmdowu0";

const chainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  chainId: "0x128",
  rpcTarget: "https://testnet.hashio.io/api",
  displayName: "Hedera Testnet",
  blockExplorerUrl: "https://hashscan.io/testnet/",
  ticker: "HBAR",
  tickerName: "HBAR",
  logo: "https://cryptologos.cc/logos/hedera-hbar-logo.png?v=033",
};

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig: chainConfig },
});

const web3auth = new Web3Auth({
  // Get it from Web3Auth Dashboard
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
});

function App() {
  const [provider, setProvider] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const getUserInfo = async () => {
      if (loggedIn) {
        const user = await web3auth.getUserInfo();
        setUser(user.name);
      }
    };

    getUserInfo();
  }, [loggedIn]);

  useEffect(() => {
    const getBalance = async () => {
      if (!loggedIn) {
        console.log("Login first");
        return;
      }
      const balance = await HEDERA.getBalance(provider);
      setBalance(parseInt(balance));
    };
    getBalance();
  }, [loggedIn, provider]);

  const login = async () => {
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    if (web3auth.connected) {
      setLoggedIn(true);
    }
  };

  const logout = async () => {
    await web3auth.logout();
    setProvider(null);
    setLoggedIn(false);
    console.log("logged out");
  };

  // const signMessage = async () => {
  //   if (!provider) {
  //     console.log("Provider not initializes");
  //     return;
  //   }
  //   const hash = await HEDERA.signMessage(provider, "Hello from Eth-global");
  //   console.log(hash);
  // };

  // const sendTransaction = async () => {
  //   if (!provider) {
  //     console.log("Provider not initializes");
  //     return;
  //   }
  //   const receipt = await HEDERA.sendTransaction(provider, "", 0.0001);
  //   return receipt;
  // };

  return (
    <>
      <Navbar
        login={login}
        isLoggedIn={loggedIn}
        balance={balance}
        logout={logout}
        user={user}
      />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
