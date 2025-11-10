export function shortenAddress(
  fullAddress: string,
  reduction: number,
  startLength: number,
  endLength: number,
  hiddenChar: string = '*'
): string {
  const minLength = startLength + endLength + 1;
  if (reduction < minLength) {
    throw new Error(`Reduction must be at least ${minLength}`);
  }

  if (fullAddress.length <= reduction) {
    return fullAddress;
  }

  const hiddenLength = reduction - startLength - endLength;
  const start = fullAddress.slice(0, startLength);
  const end = fullAddress.slice(fullAddress.length - endLength);
  const hidden = hiddenChar.repeat(hiddenLength);

  return `${start}${hidden}${end}`;
}

export function shortenAddressAuto(fullAddress: string, reduction: number, hiddenChar = '*'): string {
  if (fullAddress.length <= reduction) return fullAddress;
  const startLength = Math.ceil((reduction - 1) / 2);
  const endLength = Math.floor((reduction - 1) / 2);
  const hiddenLength = reduction - startLength - endLength;
  const start = fullAddress.slice(0, startLength);
  const end = fullAddress.slice(-endLength);
  return `${start}${hiddenChar.repeat(hiddenLength)}${end}`;
}
