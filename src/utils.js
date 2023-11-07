import { MissionUtils } from "@woowacourse/mission-utils";

export function readInput(input) {
  return MissionUtils.Console.readLineAsync(input);
}

export function printOutput(output) {
  return MissionUtils.Console.print(output);
}

export function pickUniqueRandomNumbers(min, max, count) {
  return MissionUtils.Random.pickUniqueNumbersInRange(min, max, count);
}
