import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "./connector";
import contractJson from "./abi/Decfundme.json";

export default function useWeb3Auth() {
  const { activate, deactivate, library } = useWeb3React();
  const login = React.useCallback(() => {
    activate(injected)
      .then(() => {
        console.log("Activated metamask");
      })
      .catch(() => {
        console.log("Eror connecting to metamask");
      });
  }, [activate]);

  const logout = React.useCallback(() => {
    deactivate();
  }, [deactivate]);

  const connect = async () => {
    let contract = await new library.eth.Contract(contractJson.abi, "0xB8D916aC0993925eded45f04C2984620Bb445E4c");
    return contract;
  };
  return {
    login,
    logout,
    connect,
  };
}
