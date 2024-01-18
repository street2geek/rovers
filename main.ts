import { IMissionSettings } from "./utils/types.ts";
import {
  getInitialSettings,
  processResult,
  navigateRovers,
  feedInput,
} from "./utils/index.ts";

export function init(input: string): string {
  const { plateauBounds, rovers }: IMissionSettings = getInitialSettings(input);
  const roverPositions = navigateRovers(rovers);
  const result = processResult(roverPositions, plateauBounds);
  console.log(result);

  return result;
}

init(await feedInput());
