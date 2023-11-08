import { MissionUtils } from "@woowacourse/mission-utils";

export const readLineAsync = (input) => {
  return MissionUtils.Console.readLineAsync(input);
};

export const print = (message) => {
  return MissionUtils.Console.print(message);
};

export const lottoRandomNumber = (min, max, length) => {
  return MissionUtils.Random.pickUniqueNumbersInRange(min, max, length);
};

export const lottoSort = (arr) => {
  return arr.sort((a, b) => a - b);
};
