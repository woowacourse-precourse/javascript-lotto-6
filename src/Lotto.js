import { Console } from '@woowacourse/mission-utils';
import LottoError from './error/LottoError.js';

class Lotto {
  #numbers;

  get numbers() {
    return this.#numbers;
  }

  set numbers(numbers) {
    this.#numbers = numbers;
  }

  constructor(numbers) {
    this.#numbers = this.#validate(numbers);
    this.winCheck = {
      3: 0,
      4: 0,
      5: 0,
      '5+': 0,
      6: 0,
      total: 0,
    };

    this.PRIZE = Object.freeze({
      first: 2000000000,
      second: 30000000,
      third: 1500000,
      fourth: 50000,
      fifth: 5000,
    });
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new LottoError(LottoError.ERROR_MSG.length);
    }

    this.validateNumberCheck(numbers);

    const checkNumberSet = new Set(this.#numbers);
    if (numbers.length !== checkNumberSet.size)
      throw new LottoError(LottoError.ERROR_MSG.duplicate);

    return this.#numbers;
  }

  validateNumberCheck(numbers) {
    this.#numbers = numbers.map(num => {
      if (!Number.isInteger(Number(num))) {
        throw new LottoError(LottoError.ERROR_MSG.noNumber);
      }
      const intNum = parseInt(num, 10);
      if (Number.isNaN(intNum)) {
        throw new LottoError(LottoError.ERROR_MSG.noNumber);
      }
      if (intNum < 1 || intNum > 45) {
        throw new LottoError(LottoError.ERROR_MSG.range);
      }
      return intNum;
    });
  }

  checkWin(bonusNumber, guessNumber) {
    guessNumber.forEach(eachNumber => {
      this.processEachNumber(bonusNumber, eachNumber);
    });
    this.#printResult(guessNumber);
  }

  processEachNumber(bonusNumber, eachNumber) {
    const matchNumber = eachNumber.filter(num => {
      const intNum = parseInt(num, 10);
      return this.#numbers.includes(intNum);
    });

    if (matchNumber.length === 5) {
      this.#checkBonusMatch(bonusNumber, eachNumber);
      return;
    }
    this.checkMatch(matchNumber);
  }

  checkMatch(matchNumber) {
    switch (matchNumber.length) {
      case 3:
        this.#increaseWinCount(3, this.PRIZE.fifth);
        break;
      case 4:
        this.#increaseWinCount(4, this.PRIZE.fourth);
        break;
      case 6:
        this.#increaseWinCount(6, this.PRIZE.first);
        break;
      default:
        break;
    }
  }

  #increaseWinCount(count, prize) {
    this.winCheck[count] += 1;
    this.winCheck.total += prize;
  }

  #checkBonusMatch(bonusNumber, eachNumber) {
    if (eachNumber.includes(+bonusNumber)) {
      this.#increaseWinCount('5+', this.PRIZE.second);
      return;
    }
    this.#increaseWinCount(5, this.PRIZE.third);
  }

  #printResult(guessNumber) {
    Console.print(`\n당첨 통계\n---\n3개 일치 (5,000원) - ${
      this.winCheck[3]
    }개\n4개 일치 (50,000원) - ${
      this.winCheck[4]
    }개\n5개 일치 (1,500,000원) - ${
      this.winCheck[5]
    }개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${
      this.winCheck['5+']
    }개\n6개 일치 (2,000,000,000원) - ${this.winCheck[6]}개\n총 수익률은 ${(
      (this.winCheck.total / (guessNumber.length * 1000)) *
      100
    ).toFixed(1)}%입니다.
    `);
  }
}

export default Lotto;
