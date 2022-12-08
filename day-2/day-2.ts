import {
  isRockPaperOrScissors,
  IsRockPaperOrScissorsProps,
  IsRockPaperOrScissorsResult,
  rounds,
} from "./shared.ts";

const roundCalculator = (
  playerA: IsRockPaperOrScissorsResult,
  playerB: IsRockPaperOrScissorsResult
): number => {
  if (playerA === "rock") {
    if (playerB === "rock") return 4;
    if (playerB === "paper") return 8;
    return 3;
  }
  if (playerA === "paper") {
    if (playerB === "rock") return 1;
    if (playerB === "paper") return 5;
    return 9;
  }
  // Player A chose scissors
  if (playerB === "rock") return 7;
  if (playerB === "paper") return 2;
  return 6;
};

const finalScores = rounds.map((results) => {
  const opponentDirty = results.split(" ")[0] as IsRockPaperOrScissorsProps;
  const opponent = isRockPaperOrScissors(opponentDirty);
  const meDirty = results.split(" ")[1] as IsRockPaperOrScissorsProps;
  const me = isRockPaperOrScissors(meDirty);

  const score = roundCalculator(opponent, me);
  return score;
});

console.log(
  "Total Score:",
  finalScores.reduce((prev, curr) => prev + curr, 0)
);
