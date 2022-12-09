const file = await Deno.readTextFile("day-3/input.txt");

const items = file.split("\n");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const alphaMappings = alphabet.split("").reduce((prev, curr, index) => {
  prev.set(curr, index + 1);
  return prev;
}, new Map<string, number>());

export const findPriority = (character: string | null): number => {
  if (!character) return 0;
  const result = alphaMappings.get(character);
  if (!result) return 0;
  return result;
};

export { items };
