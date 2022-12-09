import { formatNumbers, items, Pair } from "./shared.ts";

const findDominantSection = (pair: Pair): boolean => {
  const { elfOneArea, elfTwoArea } = pair;
  let elfOneHighestANDLowest = false;
  let elfTwoHighestANDLowest = false;
  if (elfOneArea.low <= elfTwoArea.low) {
    if (elfOneArea.high >= elfTwoArea.high) {
      elfOneHighestANDLowest = true;
    }
  }

  if (elfTwoArea.low <= elfOneArea.low) {
    if (elfTwoArea.high >= elfOneArea.high) {
      elfTwoHighestANDLowest = true;
    }
  }

  return elfOneHighestANDLowest || elfTwoHighestANDLowest;
};

const result = items
  .map((item) => formatNumbers(item))
  .map((pair) => findDominantSection(pair))
  .reduce((prev, curr) => {
    if (curr) return prev + 1;
    return prev;
  }, 0);

console.log(result);
