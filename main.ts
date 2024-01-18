import { IMissionSettings } from "./utils/types.ts";
import { feedInput } from "./utils/io.ts";
import {
  getInitialSettings,
  processResult,
  navigateRovers,
} from "./utils/index.ts";

export function main(input: string): string {
  const { plateauBounds, rovers }: IMissionSettings = getInitialSettings(input);
  const roverPositions = navigateRovers(rovers);
  const result = processResult(roverPositions, plateauBounds);
  console.log(result);

  return result;
}

main(await feedInput());
