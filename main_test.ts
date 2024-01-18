import { assertEquals } from "./deps.ts";
import { init } from "./main.ts";

const mockCommandInput = "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM";
const mockExpectedOutput = "1 3 N\n5 1 E";

Deno.test("init() mission output", () => {
  assertEquals(init(mockCommandInput), mockExpectedOutput);
});
