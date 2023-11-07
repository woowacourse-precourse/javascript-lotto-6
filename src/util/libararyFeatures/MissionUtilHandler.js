import { MissionUtils } from '@woowacourse/mission-utils';

export function consolePrint(text) {
  return MissionUtils.Console.print(text);
}

export async function consoleInput(text) {
  return MissionUtils.Console.readLineAsync(text);
}

export function pickSixNumber() {
  return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
}
