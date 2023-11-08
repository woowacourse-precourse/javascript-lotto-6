import {
  NUMBER,
  LOTTO_PRICE,
  WIN_COUNT,
  WIN_ARRAY,
} from "../constant/number.js";
import { Random } from "@woowacourse/mission-utils";
class lottoPlay {
  buyLotto(amount) {
    const lotto = amount / LOTTO_PRICE;
    return lotto;
  }

  lottoNumberGenerator(amount) {
    const lottoNumber = [];
    while (lottoNumber.length < amount) {
      const generatedNumber = Random.pickUniqueNumbersInRange(
        NUMBER.MIN,
        NUMBER.MAX,
        NUMBER.NUMBER
      );
      const sortedNumber = generatedNumber.sort((a, b) => {
        return a - b;
      });
      lottoNumber.push(sortedNumber);
    }
    return lottoNumber;
  }

  countWinNumber(numbers, winNum) {
    const winResult = [];
    numbers.forEach((e) => {
      let winCount = winNum.filter((x) => e.includes(x));

      winResult.push(winCount.length);
    });

    return winResult;
  }

  countBonusNumber(numbers, bonusNum) {
    const bonusResult = Array.from({ length: numbers.length }, () => 0);
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].includes(bonusNum) === true) bonusResult[i] += 1;
    }
    return bonusResult;
  }

  winResult(winResult, bonusResult) {
    const resultCount = Array.from({ length: 5 }, () => 0);
    for (let i = 0; i < winResult.length; i++) {
      if (winResult[i] === WIN_COUNT.FIFTH) resultCount[WIN_ARRAY.FIFTH] += 1;
      else if (winResult[i] === WIN_COUNT.FOURTH)
        resultCount[WIN_ARRAY.FOURTH] += 1;
      else if (winResult[i] === WIN_COUNT.THIRD && bonusResult[i] === 0)
        resultCount[WIN_ARRAY.THIRD] += 1;
      else if (winResult[i] === WIN_COUNT.SECOND && bonusResult[i] === 1)
        resultCount[WIN_ARRAY.SECOND] += 1;
      else if (winResult[i] === WIN_COUNT.FIRST)
        resultCount[WIN_ARRAY.FIRST] += 1;
    }
    return resultCount;
  }

  prizeMoney(result) {
    let winMoney = 0;
    const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
    for (let i = 0; i < result.length; i++) {
      winMoney += result[i] * prizeMoney[i];
    }
    return winMoney;
  }

  returnRatio(prizeMoney, amount) {
    const ratio = Math.round(((prizeMoney * 100) / amount) * 10) / 10;
    return ratio;
  }
}
export default lottoPlay;
