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

export const LOTTO_CONSTANT = Object.freeze({
  LOTTO_PRICE: 1000,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_LENGTH: 6,
  RANK_NUMBER: 5,
});
