import { AbiStruct } from "tinyeth";

export async function sendMetamaskTransaction(options:{
    data: string;
    value: string;
}) {
  const ethereum = (window as any).ethereum;

  const transactionParameters = {
    from: ethereum.selectedAddress,
    to: "0xcb697b1a1bc024d77c2714e667d1b3191c6453b1",
    gasPrice: "29081",
    gas: "550398",
    value: options.value,
    data: options.data,
  };

  const txHash = await ethereum.request({
    method: "eth_sendTransaction",
    params: [transactionParameters],
  });

  return txHash;
}


/*

new Abi().simpleFunctionEncoding({
      functionName: "deposit",
      arguments: new AbiStruct([new Uint8(50), new Uint8(50)]),
    })
*/