import { MissionUtils } from "@woowacourse/mission-utils";


export const print = (message) => {
  MissionUtils.Console.print(message);
}

export const getRandomNumbers = () => {
  const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  randomNumbers.sort((a, b) => a - b); // 오름차순 정렬
  return randomNumbers;
}

export const changeArrayStringIntoNumber = (array) => {
  array.forEach((str, index) => {
    array[index] = Number(str);
  })
  return array;
}