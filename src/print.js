import { MissionUtils } from "@woowacourse/mission-utils";

export function printCnt(count, change) {
  MissionUtils.Console.print(`${count}개 구매했습니다.`);
  if (change > 0) {
    MissionUtils.Console.print(`거스름돈은 ${change}원입니다.`);
  }
}

export function printLottoNumber(count) {
  const lotto = [];
  for (let i = 0; i < count; i++) {
    const random = generateRandomNumber(6);
    MissionUtils.Console.print(`[${random.join(",")}]`);
    lotto.add();
  }
  return lotto;
}

function generateRandomNumber(len) {
  const randomList = new Set();
  while (randomList.size < len) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 45);
    randomList.push(randomNumber);
  }
  return randomList.sort();
}
