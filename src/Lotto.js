import { Random, Console } from '@woowacourse/mission-utils';
import { Outputs } from './ui/Output.js';
import CONSTANT from './constants/constant.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  #validate(numbers) {
    const isDuplicated = new Set(numbers).size !== numbers.length;

    if (numbers.length !== 6) {
      throw new Error(CONSTANT.error.invalidWinningNumLength);
    }

    if (isDuplicated) {
      throw new Error(CONSTANT.error.duplicate);
    }
  }

  get winningNum() {
    return this.#numbers;
  }
}

class MakeLotto extends Lotto {
  #amount;
  constructor(number, amount) {
    super(number);
    this.#validate(amount);
    this.#amount = amount;
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
    Console.print(`${this.#amount / CONSTANT.game.unit}개를 구매했습니다.`);
    const quantity = this.#amount / CONSTANT.game.unit;
    const myLottos = this.#makeLottoArray(quantity);
    Console.print('');
    return myLottos;
  }
}

class LottoResult extends Lotto {
  #bonusNum;
  #amount;
  #myLottos;

  constructor(numbers, bonusNum, amount, myLottos) {
    super(numbers);
    this.#validate(numbers, bonusNum, amount, myLottos);
    this.#bonusNum = bonusNum;
    this.#amount = amount;
    this.#myLottos = myLottos;
  }

  #validate(numbers, bonusNum, amount, myLottos) {}

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
      if (this.winningNum.includes(number)) {
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
    this.#myLottos.forEach((currentLotto) => {
      const count = this.#countMatchingNumbers(currentLotto);
      this.#updateMatchesObj(matchesObj, count, currentLotto);
    });
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

    return revenue / (this.#amount / 100);
  }

  async printResult() {
    Outputs.printStatistics(await this.#isMatch());
    Outputs.printRateOfReturn(await this.#getRateOfReturn());
  }
}

export { Lotto, LottoResult, MakeLotto };
