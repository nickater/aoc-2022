const calories = await Deno.readTextFile("day-1/input.txt");

const mappedByAll = calories.split("\n\n");

const mappedByElf = mappedByAll.map((allCals) =>
  allCals
    .split("\n")
    .map((individualCal) => Number(individualCal))
    .reduce((prev, curr) => curr + prev, 0)
);

const sorted = mappedByElf.sort((a, b) => b - a);

console.log(sorted);
