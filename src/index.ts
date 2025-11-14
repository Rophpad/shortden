export function shortden(
  fullChars: string,
  reductedCharsLength: number,
  startCharsLength: number,
  endCharsLength: number,
  hiddenChar: string = '*'
): string {
  const minLength = startCharsLength + endCharsLength + 1;
  if (reductedCharsLength < minLength) {
    throw new Error(`Reduction must be at least ${minLength}`);
  }

  if (fullChars.length < reductedCharsLength) {
    return fullChars;
  }

  const hiddenLength = reductedCharsLength - startCharsLength - endCharsLength;
  const start = fullChars.slice(0, startCharsLength);
  const end = fullChars.slice(fullChars.length - endCharsLength);
  const hidden = hiddenChar.repeat(hiddenLength);

  return `${start}${hidden}${end}`;
}
