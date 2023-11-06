import { Random, Console } from '@woowacourse/mission-utils';
import { Outputs } from './ui/Output.js';
import CONSTANT from './constants/constant.js';

class Lotto {
  #numbers;

  // numbers는 사용자가 입력한 구입 금액이다.
  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(amount) {
    const checkStyle = /\D/;
    if (checkStyle.test(amount)) {
      Console.print(CONSTANT.error.invalidAmountType);
    }
    if (amount % CONSTANT.game.unit !== 0) {
      Console.print(CONSTANT.error.invalidAmountUnit);
    }
  }

  get amount() {
    return this.#numbers;
  }

  #makeLottoArray(quantity) {
    const lottosArr = Array.from({ length: quantity }, () => {
      const lottosNumber = Random.pickUniqueNumbersInRange(
        CONSTANT.game.lottoMin,
        CONSTANT.game.lottoMax,
        CONSTANT.game.lottoLength
      );
      Console.print(`[${lottosNumber.join(', ')}]`);
      return lottosNumber;
    });
    return lottosArr;
  }

  async makeLottos() {
    Console.print(`${this.#numbers / CONSTANT.game.unit}개를 구매했습니다.`);
    const quantity = this.#numbers / CONSTANT.game.unit;
    const myLottos = this.#makeLottoArray(quantity);
    Console.print('');
    return myLottos;
  }
}

class LottoResult extends Lotto {
  #winningNum;
  #bonusNum;
  #myLottos;

  constructor(numbers, winningNum, bonusNum, myLottos) {
    super(numbers);
    this.#validate(numbers, winningNum, bonusNum, myLottos);
    this.#winningNum = winningNum;
    this.#bonusNum = bonusNum;
    this.#myLottos = myLottos;
  }

  #validate(numbers, winningNum, bonusNum, myLottos) {
    const isDuplicated = new Set(winningNum).size !== winningNum.length;

    if (isDuplicated) {
      throw new Error(CONSTANT.error.duplicate);
    }

    if (winningNum.length !== 6) {
      throw new Error(CONSTANT.error.invalidWinningNumLength);
    }
  }

  #initializeMatchesObj() {
    return {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    };
  }

  #countMatchingNumbers(currentLotto) {
    let count = 0;
    currentLotto.forEach((number) => {
      if (this.#winningNum.includes(number)) {
        count += 1;
      }
    });
    return count;
  }

  #updateMatchesObj(matchesObj, count, currentLotto) {
    if (count === 3) {
      return (matchesObj.three += 1);
    }
    if (count === 4) {
      return (matchesObj.four += 1);
    }
    if (count === 5) {
      currentLotto.includes(this.#bonusNum)
        ? (matchesObj.bonus += 1)
        : (matchesObj.bonus += 1);
    }
    if (count === 6) {
      return (matchesObj.six += 1);
    }
  }

  async #isMatch() {
    const matchesObj = this.#initializeMatchesObj();
    for (const currentLotto of this.#myLottos) {
      const count = this.#countMatchingNumbers(currentLotto);
      this.#updateMatchesObj(matchesObj, count, currentLotto);
    }
    return matchesObj;
  }

  #calcRevenue(matchResult, matcheAmountObj) {
    let revenue = 0;
    Object.entries(matchResult).forEach(([key, value]) => {
      if (value > 0) {
        revenue += matcheAmountObj[key] * value;
      }
    });

    return revenue;
  }

  async #getRateOfReturn() {
    const matchResult = await this.#isMatch();
    const matcheAmountObj = {
      three: CONSTANT.game.threeMachesAmount,
      four: CONSTANT.game.fourMachesAmount,
      five: CONSTANT.game.fiveMachesAmount,
      bonus: CONSTANT.game.bonusMachesAmount,
      six: CONSTANT.game.sixMachesAmount,
    };
    const revenue = this.#calcRevenue(matchResult, matcheAmountObj);

    return revenue / (this.amount / 100);
  }

  async printResult() {
    Outputs.printStatistics(await this.#isMatch());
    Outputs.printRateOfReturn(await this.#getRateOfReturn());
  }
}

export { Lotto, LottoResult };
