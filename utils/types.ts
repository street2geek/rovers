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

export interface ICoords {
  x: number;
  y: number;
}

export interface IPosition extends ICoords {
  direction: Direction;
}

export interface IRover {
  position: IPosition;
  instructions: string;
}

export interface IMissionSettings {
  plateauBounds: ICoords;
  rovers: Array<IRover>;
}
