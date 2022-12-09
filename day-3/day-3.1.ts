import { findPriority, items } from "./shared.ts";

type ElfGrouping = {
  elfOne: string;
  elfTwo: string;
  elfThree: string;
};

const groupElvesByThree = (elves: string[]): ElfGrouping[] => {
  const elfGroupList: ElfGrouping[] = [];
  const elfGroup: ElfGrouping = {
    elfOne: "",
    elfTwo: "",
    elfThree: "",
  };
  elves.forEach((elf, index) => {
    if ((index + 1) % 3 === 0) {
      elfGroup.elfThree = elf;
      elfGroupList.push({ ...elfGroup });
      return;
    }
    if ((index + 1) % 3 === 2) {
      elfGroup.elfTwo = elf;
      return;
    }
    elfGroup.elfOne = elf;
  });
  return elfGroupList;
};

const findPairedLetter = ({
  elfOne,
  elfTwo,
  elfThree,
}: ElfGrouping): string | null => {
  return elfOne.split("").reduce<string | null>((prev, curr) => {
    if (!prev && elfTwo.includes(curr) && elfThree.includes(curr)) return curr;
    return prev;
  }, null);
};

const result = groupElvesByThree(items)
  .map((group) => findPairedLetter(group))
  .map((letter) => findPriority(letter))
  .reduce((prev, curr) => curr + prev, 0);

console.log(result);
