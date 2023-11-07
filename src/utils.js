import { MissionUtils } from "@woowacourse/mission-utils";

export function readInput(input) {
  return MissionUtils.Console.readLineAsync(input);
}

export function printOutput(output) {
  return MissionUtils.Console.print(output);
}
