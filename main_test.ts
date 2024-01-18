import { assertEquals } from "./dev_deps.ts";
import { main } from "./main.ts";

const mockCommandInput = "5 5\n1 2 N\nLMLMLMLMM\n3 3 E\nMMRMMRMRRM";
const mockExpectedOutput = "1 3 N\n5 1 E";

Deno.test("main() mission output", () => {
  assertEquals(main(mockCommandInput), mockExpectedOutput);
});
