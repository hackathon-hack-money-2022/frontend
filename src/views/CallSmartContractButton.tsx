import React from "react";
import { useHistory } from "react-router";
import { AuthenticateWithMetamaskButton } from "../components/AuthenticateWithMetamaskButton";
import { SimpleButton } from "../components/SimpleButton";
import { Abi, Uint8, AbiStruct } from "tinyeth";

export function CallSmartContractButton() {
  const router = useHistory();

  return (
    <React.Fragment>
      <AuthenticateWithMetamaskButton>
        <SimpleButton
          onClick={async () => {
            const ethereum = (window as any).ethereum;

            const transactionParameters = {
              from: ethereum.selectedAddress,
              //   to: "0x9c02b5c7e233f22195425d458e959b36419c0144",
              //        to: '0xcb697b1a1bc024d77c2714e667d1b3191c6453b1',
              to: "0xcb697b1a1bc024d77c2714e667d1b3191c6453b1",
              gasPrice: "29081",
              gas: "550398",
              value: "2000",
              data: "19ff1d21",
              // https://abi.hashex.org/
              //    data: '0x04e45aaf0000000000000000000000004200000000000000000000000000000000000006000000000000000000000000da10009cbd5d07dd0cecc66161fc93d7c9000da10000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000048db0a2e700c3a80d9b183fff942d7c20f5d5632000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
              //            data: "0x19ff1d21",
            };

            const txHash = await ethereum.request({
              method: "eth_sendTransaction",
              params: [transactionParameters],
            });
            console.log(`https://kovan-optimistic.etherscan.io/tx/${txHash}`);
          }}
        >
          Test Uniswap
        </SimpleButton>
      </AuthenticateWithMetamaskButton>

      <AuthenticateWithMetamaskButton>
        <SimpleButton
          onClick={async () => {
            const ethereum = (window as any).ethereum;

            const transactionParameters = {
              from: ethereum.selectedAddress,
              //   to: "0x9c02b5c7e233f22195425d458e959b36419c0144",
              //        to: '0xcb697b1a1bc024d77c2714e667d1b3191c6453b1',
              to: "0xcb697b1a1bc024d77c2714e667d1b3191c6453b1",
              gasPrice: "29081",
              gas: "350398",
              value: "20000000000000",
              data: "d0e30db0",
              // https://abi.hashex.org/
              //    data: '0x04e45aaf0000000000000000000000004200000000000000000000000000000000000006000000000000000000000000da10009cbd5d07dd0cecc66161fc93d7c9000da10000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000048db0a2e700c3a80d9b183fff942d7c20f5d5632000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
              //            data: "0x19ff1d21",
            };

            const txHash = await ethereum.request({
              method: "eth_sendTransaction",
              params: [transactionParameters],
            });
            console.log(`https://kovan-optimistic.etherscan.io/tx/${txHash}`);
          }}
        >
          deposit eth
        </SimpleButton>
      </AuthenticateWithMetamaskButton>

      <AuthenticateWithMetamaskButton>
        <SimpleButton
          onClick={async () => {
            const ethereum = (window as any).ethereum;

            const transactionParameters = {
              from: ethereum.selectedAddress,
              to: "0xcb697b1a1bc024d77c2714e667d1b3191c6453b1",
              gasPrice: "29081",
              gas: "350398",
              value: "20000000000000",
              data: "12424e3f",
              //    data: "0x04e45aaf0000000000000000000000004200000000000000000000000000000000000006000000000000000000000000da10009cbd5d07dd0cecc66161fc93d7c9000da10000000000000000000000000000000000000000000000000000000000000bb800000000000000000000000048db0a2e700c3a80d9b183fff942d7c20f5d5632000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            };

            const txHash = await ethereum.request({
              method: "eth_sendTransaction",
              params: [transactionParameters],
            });
            console.log(`https://kovan-optimistic.etherscan.io/tx/${txHash}`);
          }}
        >
          test approve
        </SimpleButton>
      </AuthenticateWithMetamaskButton>

      <AuthenticateWithMetamaskButton>
        <SimpleButton
          onClick={async () => {
            const ethereum = (window as any).ethereum;

            const transactionParameters = {
              from: ethereum.selectedAddress,
              to: "0xcb697b1a1bc024d77c2714e667d1b3191c6453b1",
              gasPrice: "29081",
              gas: "550398",
              value: "20000000000000",
              //             value: "0",
              //data: "8119c065",

              // chainLinkPrice ->              data: '8c56fa0e0000000000000000000000000000000000000000000000000000000000000003',
              //              data: "1c3667e500000000000000000000000000000000000000000000000000000000000000320000000000000000000000000000000000000000000000000000000000000032"
              data: new Abi().simpleFunctionEncoding({
                functionName: "deposit",
                arguments: new AbiStruct([new Uint8(50), new Uint8(50)]),
              }),
            };

            const txHash = await ethereum.request({
              method: "eth_sendTransaction",
              params: [transactionParameters],
            });
            console.log(`https://kovan-optimistic.etherscan.io/tx/${txHash}`);
          }}
        >
          test swap contract
        </SimpleButton>
      </AuthenticateWithMetamaskButton>
    </React.Fragment>
  );
}
