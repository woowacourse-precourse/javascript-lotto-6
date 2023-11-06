import { MissionUtils } from "@woowacourse/mission-utils";


export const print = (message) => {
  MissionUtils.Console.print(message);
}

export const getRandomNumber = () => {
  const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  randomNumber.sort((a, b) => a - b); // 오름차순 정렬
  return randomNumber;
}