import { findPriority, items } from "./shared.ts";

const splitItems = (input: string): [string, string] => {
  const halfLength = input.length / 2;
  const firstHalf = input.slice(0, halfLength);
  const secondHalf = input.slice(halfLength);

  return [firstHalf, secondHalf];
};

const findPairedLetter = ([collectionOne, collectionTwo]: [string, string]):
  | string
  | null => {
  return collectionOne.split("").reduce<string | null>((prev, curr) => {
    if (!prev && collectionTwo.includes(curr)) return curr;
    return prev;
  }, null);
};

const finalValue = items
  .map((item) => splitItems(item))
  .map((item) => findPairedLetter(item))
  .map((item) => findPriority(item))
  .reduce((prev, curr) => curr + prev, 0);

console.log("Final Value:", finalValue);
