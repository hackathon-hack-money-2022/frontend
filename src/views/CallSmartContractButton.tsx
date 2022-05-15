import React from "react";
import { useHistory } from "react-router";
import { AuthenticateWithMetamaskButton } from "../components/AuthenticateWithMetamaskButton";
import { SimpleButton } from "../components/SimpleButton";

export function CallSmartContractButton() {
  const router = useHistory();

  return (
    <AuthenticateWithMetamaskButton>
      <SimpleButton
        onClick={async () => {
          const ethereum = (window as any).ethereum;

          const transactionParameters = {
            from: ethereum.selectedAddress,
            to: "0xDF9422F267156cC715bC749d3bea7C90D173eace",
            value: "0x01",
            data: "0x19ff1d21",
          };

          const txHash = await ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
          });
        }}
      >
        Test Uniswap
      </SimpleButton>
    </AuthenticateWithMetamaskButton>
  );
}
