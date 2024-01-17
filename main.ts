import { IMissionSettings } from "./utils/types.ts";
import { getInitialSettings, processResult } from "./utils/index.ts";
import { navigateRovers } from "./utils/index.ts";

export function init(input: string): string {
  const { plateauBounds, rovers }: IMissionSettings = getInitialSettings(input);
  const roverPositions = navigateRovers(rovers);
  const result = processResult(roverPositions, plateauBounds);

  return result;
}