export type ABC = "A" | "B" | "C";
export type XYZ = "X" | "Y" | "Z";
export type IsRockPaperOrScissorsProps = ABC | XYZ;
export type IsRockPaperOrScissorsResult = "rock" | "paper" | "scissors";

export const isRockPaperOrScissors = (
  input: IsRockPaperOrScissorsProps
): IsRockPaperOrScissorsResult => {
  if (input === "A" || input === "X") return "rock";
  if (input === "B" || input === "Y") return "paper";
  return "scissors";
};

const file = await Deno.readTextFile("day-2/input.txt");

const rounds = file.split("\n");

export { rounds };
