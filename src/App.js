import { MissionUtils, Console } from '@woowacourse/mission-utils';
import * as C from './constants.js';
import Lotto from './Lotto.js';

class App {
  #purchaseAmount;
  #lottoCount;
  #lottoList = [];
  #winningNumbers = [];
  #bonusNumber;

  async play() {
    try {
      await this.#inputPurchaseAmount();
      Console.print('');
      this.#purchaseLottos();
      this.#printAllLottos();
      Console.print('');
      await this.#inputWinningNumbers();
      Console.print('');
      await this.#inputBonusNumber();
      Console.print('');
      this.#calculateWinningStatistics();
    } catch (err) {
      Console.print(err.message);
      await this.play();
    }
  }

  async #inputPurchaseAmount() {
    Console.print(C.PURCHASE_AMOUNT_INPUT);
    const purchaseAmount = await Console.readLineAsync('');
    this.#validatePurchaseAmount(purchaseAmount);
  }

  #validatePurchaseAmount(purchaseAmount) {
    const convertNumber = Number(purchaseAmount);
    if (isNaN(convertNumber)) {
      throw new Error('[ERROR] 구매 금액이 숫자가 아닙니다.');
    }
    if (convertNumber % 1000 !== 0) {
      throw new Error('[ERROR] 1000단위로 나누어 떨어지는 금액이 아닙니다.');
    }
    this.#purchaseAmount = convertNumber;
    this.#lottoCount = convertNumber / 1000;
  }

  #purchaseLottos() {
    for (let i = 0; i < this.#lottoCount; i++) {
      const randomNumbers = this.#getRandomNumbers();
      this.#lottoList.push(new Lotto(randomNumbers));
    }
  }

  #getRandomNumbers() {
    const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumbers.sort((a, b) => a - b);
  }

  #printAllLottos() {
    Console.print(`${this.#lottoList.length}${C.PURCHASE_SOME_LOTTO}`);
    this.#lottoList.forEach((el) => {
      el.print();
    });
  }

  async #inputWinningNumbers() {
    Console.print(C.LOTTO_NUMBERS_INPUT);
    const winningNumbers = await Console.readLineAsync('');
    await this.#validateWinningNumbers(winningNumbers);
  }

  async #validateWinningNumbers(winningNumbers) {
    const splitWinningNumbers = winningNumbers.split(',');
    if (splitWinningNumbers.length != 6) {
      throw new Error('[ERROR] 입력된 당첨 번호가 6자리가 아닙니다.');
    }

    splitWinningNumbers.forEach((number) => {
      const convertNumber = Number(number);
      if (isNaN(convertNumber)) {
        throw new Error('[ERROR] 입력된 당첨 번호가 숫자가 아닙니다.');
      }
      if (convertNumber > 45) {
        throw new Error('[ERROR] 입력된 당첨 번호가 로또번호의 최대값을 초가하였습니다.');
      }
      if (this.#winningNumbers.includes(convertNumber)) {
        throw new Error('[ERROR] 입력된 당첨 번호에 중복된 숫자가 있습니다.');
      }
      this.#winningNumbers.push(convertNumber);
    });
  }

  async #inputBonusNumber() {
    Console.print(C.BONUS_NUMBER_INPUT);
    const bonusNumber = await Console.readLineAsync('');
    this.#validateBonusNumber(bonusNumber);
  }

  #validateBonusNumber(bonusNumber) {
    const convertNumber = Number(bonusNumber);
    if (isNaN(convertNumber)) {
      throw new Error('[ERROR] 입력된 보너스 번호가 숫자가 아닙니다.');
    }
    if (convertNumber > 45) {
      throw new Error('[ERROR] 입력된 당첨 번호가 로또번호의 최대값을 초가하였습니다.');
    }
    if (this.#winningNumbers.includes(convertNumber)) {
      throw new Error('[ERROR] 입력된 보너스 번호가 담청 번호에 이미 존재합니다.');
    }

    this.#bonusNumber = bonusNumber;
  }

  #calculateWinningStatistics() {
    Console.print(C.WINNING_STATISTICS);
    Console.print('---');
    this.#calculateMatchedNumber();
  }

  #calculateMatchedNumber() {
    let threeMatch = 0;
    let fourMatch = 0;
    let fiveMatch = 0;
    let fiveMatchAndBonusMatch = 0;
    let sixMatch = 0;

    this.#lottoList.forEach((lottoNumbers) => {
      const matchedCount = lottoNumbers.returnMatchedCount(this.#winningNumbers, this.#bonusNumber);

      switch (matchedCount) {
        case 3:
          threeMatch++;
          break;
        case 4:
          fourMatch++;
          break;
        case 5:
          fiveMatch++;
          break;
        case 6:
          fiveMatchAndBonusMatch++;
          break;
        case 7:
          sixMatch++;
          break;
      }
    });

    Console.print(`${C.THREE_MATCHES} - ${threeMatch}개`);
    Console.print(`${C.FOUR_MATCHES} - ${fourMatch}개`);
    Console.print(`${C.FIVE_MATCHES} - ${fiveMatch}개`);
    Console.print(`${C.FIVE_MATCHES_AND_BONUS_MARCH} - ${fiveMatchAndBonusMatch}개`);
    Console.print(`${C.SIX_MATCHES} - ${sixMatch}개`);

    this.#calculateRevenueRate({ threeMatch, fourMatch, fiveMatch, sixMatch });
  }

  #calculateRevenueRate({ threeMatch, fourMatch, fiveMatch, sixMatch }) {
    const totalRevenue = threeMatch * 5000 + fourMatch * 50000 + fiveMatch * 1500000 + sixMatch * 2000000000;
    const revenueRate = Number((totalRevenue / this.#purchaseAmount) * 100);

    Console.print(`총 수익률은 ${revenueRate}%입니다.`);
  }
}

export default App;
