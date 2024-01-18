import {
  TCoords,
  TPosition,
  IMissionSettings,
  IRover,
  Direction,
  Instruction,
} from "./types.ts";
import { directionMap } from "./maps.ts";

export function getPlateauBounds(line: string): TCoords {
  const [x, y] = line.split(" ");
  return { x: parseInt(x), y: parseInt(y) };
}

/** Takes an array of strings and returns an array of rovers */
export function buildRovers(input: string[]): IRover[] {
  const rovers: Array<IRover> = [];
  for (let i = 0; i < input.length; i += 2) {
    const [x, y, direction] = input[i].trim().split(" ");
    const rover: IRover = {
      position: {
        x: parseInt(x),
        y: parseInt(y),
        direction: direction as Direction,
      },
      instructions: input[i + 1].trim(),
    };
    rovers.push(rover);
  }

  return rovers;
}

/** Takes current position object and returns new position object with updated coordinates */
export function move(position: TPosition): TPosition {
  const { x, y, direction } = position;
  switch (direction) {
    case Direction.N:
      return { x, y: y + 1, direction };
    case Direction.E:
      return { x: x + 1, y, direction };
    case Direction.S:
      return { x, y: y - 1, direction };
    case Direction.W:
      return { x: x - 1, y, direction };
    default:
      throw new Error("Invalid direction");
  }
}

/** Takes an array of rovers and returns an array of positions after navigation */
export function navigateRovers(rovers: IRover[]): TPosition[] {
  return rovers.map(({ position, instructions }) => {
    const instructionsArray = instructions.split("");
    let newPosition = { ...position };

    for (const instruction of instructionsArray) {
      if (instruction === Instruction.M) {
        newPosition = move(newPosition);
      } else if (
        instruction === Instruction.L ||
        instruction === Instruction.R
      ) {
        newPosition.direction =
          directionMap[newPosition.direction][instruction];
      } else {
        throw new Error("Invalid instruction");
      }
    }

    return newPosition;
  });
}

/** Takes input string and returns an object with plateau bounds and an array of rovers */
export function getInitialSettings(input: string): IMissionSettings {
  const inputArray = input.split("\n");
  const initialSettings: IMissionSettings = {
    plateauBounds: getPlateauBounds(inputArray[0]),
    rovers: buildRovers(inputArray.slice(1)),
  };

  return initialSettings;
}

/** Takes an array of positions and returns a string of final positions */
export function processResult(
  roverPositions: TPosition[],
  plateauBounds: TCoords
): string {
  const stringifiedPositions = roverPositions.map((position) => {
    const { x, y, direction } = position;
    if (x < 0 || x > plateauBounds.x || y < 0 || y > plateauBounds.y) {
      throw new Error("Rover out of bounds");
    }
    return `${x} ${y} ${direction}`;
  });

  return stringifiedPositions.join("\n");
}
