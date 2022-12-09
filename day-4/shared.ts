const file = await Deno.readTextFile("day-4/input.txt");

const items = file.split("\n");

export { items };

export type Area = {
  low: number;
  high: number;
};
export type Pair = {
  elfOneArea: Area;
  elfTwoArea: Area;
};

export const formatNumbers = (input: string): Pair => {
  const firstArea = input
    .split(",")
    .at(0)
    ?.split("-")
    .map(Number)
    .reduce<Area>(
      (prev, curr, index) => {
        if (index === 0) {
          prev.low = curr;
          return prev;
        }
        prev.high = curr;
        return prev;
      },
      { low: 0, high: 0 }
    );
  const secondArea = input
    .split(",")
    .at(1)
    ?.split("-")
    .map(Number)
    .reduce<Area>(
      (prev, curr, index) => {
        if (index === 0) {
          prev.low = curr;
          return prev;
        }
        prev.high = curr;
        return prev;
      },
      { low: 0, high: 0 }
    );
  return {
    elfOneArea: firstArea!,
    elfTwoArea: secondArea!,
  };
};
