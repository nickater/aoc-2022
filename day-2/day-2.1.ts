import {
  isRockPaperOrScissors,
  IsRockPaperOrScissorsProps,
  rounds,
  XYZ,
} from "./shared.ts";

type ShouldWinDrawOrLoseResult = "win" | "draw" | "lose";
const shouldWinDrawOrLose = (input: XYZ): ShouldWinDrawOrLoseResult => {
  if (input === "X") return "lose";
  if (input === "Y") return "draw";
  return "win";
};

const finalScores = rounds.map((results) => {
  const dirtyOpponent = results.split(" ").at(0) as IsRockPaperOrScissorsProps;
  const opponent = isRockPaperOrScissors(dirtyOpponent);
  const dirtyMe = results.split(" ").at(1) as XYZ;
  const meShouldWinDrawLose = shouldWinDrawOrLose(dirtyMe);

  if (meShouldWinDrawLose === "win") {
    if (opponent === "rock") return 8;
    if (opponent === "paper") return 9;
    return 7;
  }
  if (meShouldWinDrawLose === "draw") {
    if (opponent === "rock") return 4;
    if (opponent === "paper") return 5;
    return 6;
  }
  if (opponent === "rock") return 3;
  if (opponent === "paper") return 1;
  return 2;
});

console.log(
  "Final Score:",
  finalScores.reduce((prev, curr) => prev + curr, 0)
);
