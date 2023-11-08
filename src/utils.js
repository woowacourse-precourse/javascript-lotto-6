import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export function generateLottos(count) {
  const lottos = [];
  for (let i = 0; i < count; i++) {
    const randomNumbers = generateRandomNumbers(6);
    lottos.push(new Lotto(randomNumbers));
  }
  return lottos;
}

function generateRandomNumbers(len) {
  const randomList = new Set();
  while (randomList.size < len) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 45);
    randomList.push(randomNumber);
  }
  return randomList.sort();
}

export function checkAllLottos(lottos, winNumbers, bonusNumber) {
  const winList = [0, 0, 0, 0, 0];
  lottos.foreach((l) => {
    const idx = checkWinning(l.getNumbers(), winNumbers, bonusNumber);
    winList[idx] = winList[idx] + 1;
  });
  return winList;
}

function mappingCount(len, bonus) {
  switch (len) {
    case 3:
      return 0;
    case 4:
      return 1;
    case 5:
      if (bonus) return 3;
      else return 2;
    case 6:
      return 4;
  }
}

export function checkWinning(userNumber, winNumber, bonusNumber) {
  const matching = userNumber.filter((e) => {
    winNumber.includes(e);
  });
  bonus = winNumber.includes(bonusNumber);
  return mappingCount(matching.length, bonus);
}
