export async function getMetamaskAccounts(): Promise<string[]> {
  const ethereum = (window as { ethereum?: any }).ethereum;
  const accounts: string[] = await ethereum.request({
    method: "eth_requestAccounts",
  });

  return accounts;
}
