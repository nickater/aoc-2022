import { formatNumbers, items, Pair } from "./shared.ts";

const findIfSectionOverlaps = (pair: Pair): boolean => {
  const { elfOneArea, elfTwoArea } = pair;
  return elfOneArea.high >= elfTwoArea.low && elfOneArea.low <= elfTwoArea.high;
};

const result = items
  .map((item) => formatNumbers(item))
  .map((pair) => findIfSectionOverlaps(pair))
  .reduce((prev, curr) => {
    if (curr) return prev + 1;
    return prev;
  }, 0);

console.log(result);
