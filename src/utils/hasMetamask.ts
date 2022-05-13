
export function hasMetamask() {
  return !!(window as { ethereum?: any })?.ethereum;
}

