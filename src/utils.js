import { MissionUtils } from "@woowacourse/mission-utils";


export const print = (message) => {
  MissionUtils.Console.print(message);
}

// 랜덤 번호 저장할 2차원 배열 생성
export const getRandomNumbersArray = (attempt) => {
  const array = Array(attempt);
  const randomNumbersArray = array.fill();
  randomNumbersArray.forEach((e, index) => {
    randomNumbersArray[index] = getRandomNumbers();
  })
  return randomNumbersArray;
}

const getRandomNumbers = () => {
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