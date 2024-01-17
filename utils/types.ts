export enum Direction {
  N = "N",
  S = "S",
  E = "E",
  W = "W",
}

export enum Instruction {
  L = "L",
  R = "R",
  M = "M",
}

export type TPosition = { x: number; y: number; direction: Direction };

export type TCoords = {
  x: number;
  y: number;
};

export interface IRover {
  position: TPosition;
  instructions: string;
}

export interface IMissionSettings {
  plateauBounds: TCoords;
  rovers: Array<IRover>;
}
