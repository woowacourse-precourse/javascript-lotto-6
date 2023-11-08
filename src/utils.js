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

// 입력받은 당청금 정수배열로 변환
export const changeArrayStringIntoNumber = (array) => {
  array.forEach((str, index) => {
    array[index] = Number(str);
  })
  return array;
}

// 수익률 계산
export const calculateRevenue = (result, attempt) => {
  const totalWinnings = getTotalWinnings(result); // 총 당청금
  const amount = attempt * 1000;  // 구입금
  return (totalWinnings / amount * 100).toFixed(1);
}

const getTotalWinnings = (result) => {
  let totalWinnings = 0;
  const winnings = [5000, 50000, 1500000, 30000000, 2000000000];
  result.forEach((count, index) => {
    totalWinnings += count * winnings[index];
  })
  return totalWinnings;
}