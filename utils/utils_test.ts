import { assertEquals, assertThrows } from "../dev_deps.ts";
import {
  buildRovers,
  getInitialSettings,
  move,
  navigateRovers,
  processResult,
} from "./index.ts";
import { Direction } from "./types.ts";

const mockInitialSettings = {
  plateauBounds: { x: 5, y: 5 },
  rovers: [
    {
      position: { x: 1, y: 2, direction: Direction.N },
      instructions: "LMLMLMLMM",
    },
    {
      position: { x: 3, y: 3, direction: Direction.E },
      instructions: "MMRMMRMRRM",
    },
  ],
};

Deno.test("buildRovers() utils function", () => {
  assertEquals(
    buildRovers(["1 2 N", "LMLMLMLMM", "3 3 E", "MMRMMRMRRM"]),
    mockInitialSettings.rovers
  );
});

Deno.test("navigateRovers() utils function", () => {
  assertEquals(navigateRovers(mockInitialSettings.rovers), [
    { x: 1, y: 3, direction: Direction.N },
    { x: 5, y: 1, direction: Direction.E },
  ]);
});

Deno.test("navigateRovers() utils function error handling", () => {
  assertThrows(
    () =>
      navigateRovers([
        {
          position: { x: 1, y: 2, direction: Direction.N },
          instructions: "LMLMLMLMM",
        },
        {
          position: { x: 3, y: 3, direction: Direction.E },
          instructions: "MMRMMRMRRX",
        },
      ]),
    Error,
    "Invalid instruction"
  );
});

Deno.test("move() utils function logic", () => {
  assertEquals(move({ x: 1, y: 3, direction: Direction.N }), {
    x: 1,
    y: 4,
    direction: Direction.N,
  });
  assertEquals(move({ x: 1, y: 3, direction: Direction.S }), {
    x: 1,
    y: 2,
    direction: Direction.S,
  });
  assertEquals(move({ x: 1, y: 3, direction: Direction.E }), {
    x: 2,
    y: 3,
    direction: Direction.E,
  });
  assertEquals(move({ x: 1, y: 3, direction: Direction.W }), {
    x: 0,
    y: 3,
    direction: Direction.W,
  });
});

Deno.test("move() utils function error handling", () => {
  assertThrows(
    () => move({ x: 1, y: 3, direction: "X" as Direction }),
    Error,
    "Invalid direction"
  );
});

Deno.test("getInstialSettings() utils function", () => {
  assertEquals(
    getInitialSettings("5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM"),
    mockInitialSettings
  );
});

Deno.test("processRes§ult() utils function", () => {
  assertEquals(
    processResult(
      [
        { x: 1, y: 3, direction: Direction.N },
        { x: 5, y: 1, direction: Direction.E },
      ],
      { x: 5, y: 5 }
    ),
    "1 3 N\n5 1 E"
  );
});

Deno.test("processResult() utils function error handling", () => {
  assertThrows(
    () =>
      processResult(
        [
          { x: 1, y: 3, direction: Direction.N },
          { x: 5, y: 1, direction: Direction.E },
        ],
        { x: 3, y: 3 }
      ),
    Error,
    "Rover out of bounds"
  );
});
