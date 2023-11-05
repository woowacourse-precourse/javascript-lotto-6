import { Random, Console } from '@woowacourse/mission-utils';
import { Outputs } from '../ui/Output.js';

class PlayLotto {
  #amount;

  // amount는 사용자가 입력한 구입 금액이다.
  constructor(amount) {
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    const checkStyle = /\D/;
    if (checkStyle.test(amount)) {
      Console.print('[ERROR] 정수만 입력되어야 합니다.');
    }
    if (amount % 1000 !== 0) {
      Console.print('[ERROR] 구매 단위가 1000원으로 떨어져야 합니다.');
    }
  }

  get amount() {
    return this.#amount;
  }

  #makeLottoArray(quantity) {
    const lottosArr = Array.from({ length: quantity }, () => {
      const lottosNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
      Console.print(`[${lottosNumber.join(', ')}]`);
      return lottosNumber;
    });
    return lottosArr;
  }

  async makeLottos() {
    Console.print(`${this.#amount / 1000}개를 구매했습니다.`);
    const quantity = this.#amount / 1000;
    const myLottos = this.#makeLottoArray(quantity);
    Console.print('');
    return myLottos;
  }
}

class LottoResult extends PlayLotto {
  #winningNum;
  #bonusNum;
  #myLottos;

  constructor(numbers, winningNum, bonusNum, myLottos) {
    super(numbers);
    this.#validate(numbers);
    this.#winningNum = winningNum;
    this.#bonusNum = bonusNum;
    this.#myLottos = myLottos;
  }

  #validate(numbers) {}

  #initializeResultObj() {
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
    for (const number of currentLotto) {
      if (this.#winningNum.includes(number)) {
        count += 1;
      }
    }
    return count;
  }

  #updateResultObj(resultObj, count, currentLotto) {
    if (count === 3) {
      return (resultObj.three += 1);
    }
    if (count === 4) {
      return (resultObj.four += 1);
    }
    if (count === 5) {
      currentLotto.includes(this.#bonusNum)
        ? (resultObj.bonus += 1)
        : (resultObj.bonus += 1);
    }
    if (count === 6) {
      return (resultObj.six += 6);
    }
  }

  async isFit() {
    const resultObj = this.#initializeResultObj();
    for (const currentLotto of this.#myLottos) {
      const count = this.#countMatchingNumbers(currentLotto);
      this.#updateResultObj(resultObj, count, currentLotto);
    }
    return resultObj;
  }

  calcRevenue(fitResult, multipliers) {
    let revenue = 0;
    for (const [key, value] of Object.entries(fitResult)) {
      if (value > 0 && multipliers[key]) {
        revenue += multipliers[key] * value;
      }
    }
    return revenue;
  }

  async getRateOfReturn() {
    const fitResult = await this.isFit();
    const multipliers = {
      three: 5000,
      four: 50000,
      five: 1500000,
      bonus: 30000000,
      six: 2000000000,
    };
    const revenue = this.calcRevenue(fitResult, multipliers);

    return revenue / (this.amount / 100);
  }

  async printResult() {
    Outputs.printStatistics(await this.isFit());
    Outputs.printRateOfReturn(await this.getRateOfReturn());
  }
}

export { PlayLotto, LottoResult };
