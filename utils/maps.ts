import { Direction, Instruction } from "./types.ts";

export const directionMap = {
  [Direction.N]: {
    [Instruction.L]: Direction.W,
    [Instruction.R]: Direction.E,
  },
  [Direction.S]: {
    [Instruction.L]: Direction.E,
    [Instruction.R]: Direction.W,
  },
  [Direction.E]: {
    [Instruction.L]: Direction.N,
    [Instruction.R]: Direction.S,
  },
  [Direction.W]: {
    [Instruction.L]: Direction.S,
    [Instruction.R]: Direction.N,
  },
};
