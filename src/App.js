import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import LottoStatistics from './LottoStatistics';
import genLottoNumber from './genLottoNumber';
import InputHandler from './utils/InputHandler';
import {
  MAX_NUMBER,
  MIN_NUMBER,
  PERCHASE_AMOUNT,
} from './constant/lottoNumber';
import WINNING_MONEY from './constant/winningMoney';
import USER_INPUT_TEXT from './constant/inputText';
import {
  paymentAmountValidater,
  winningNumbersValidater,
  bonusNumberValidater,
} from './utils/validater';

class App {
  #paymentAmount;

  #perchaseAmount;

  #lottos;

  #statistics;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#paymentAmount = 0;
    this.#perchaseAmount = 0;
    this.#lottos = [];
    this.#statistics = null;
    this.#winningNumbers = [];
    this.#bonusNumber = 0;
  }

  async play() {
    await this.#inputPaymentAmount();
    this.#buyLottos();
    await this.#inputWinningNumbers();
    await this.#inputBonusNumber();
    this.setStatistics();
    this.outputStatistics();
  }

  async #inputPaymentAmount() {
    const paymentAmount = await InputHandler(
      USER_INPUT_TEXT.purchaseAmount,
      this.#validatePaymentAmount
    );
    this.#paymentAmount = Number(paymentAmount);
    this.#perchaseAmount = PERCHASE_AMOUNT(this.#paymentAmount);
  }

  #validatePaymentAmount(amount) {
    Object.keys(paymentAmountValidater).forEach(validate => {
      paymentAmountValidater[validate](amount);
    });
  }

  #buyLottos() {
    Console.print(`${this.#perchaseAmount}개를 구매했습니다.`);
    for (let amount = 0; amount < this.#perchaseAmount; amount += 1) {
      const numbers = genLottoNumber();
      Console.print(`[${numbers.join(', ')}]`);
      this.#lottos.push(new Lotto(numbers));
    }
  }

  async #inputWinningNumbers() {
    const winningNumbers = await InputHandler(
      USER_INPUT_TEXT.winningNumbers,
      this.#validateWinningNumber
    );
    this.#winningNumbers = winningNumbers
      .split(',')
      .map(Number)
      .sort((a, b) => a - b);
  }

  #validateWinningNumber(inputNumbers) {
    const winningNumbers = inputNumbers
      .split(',')
      .map(Number)
      .sort((a, b) => a - b);

    Object.keys(winningNumbersValidater).forEach(validate => {
      winningNumbersValidater[validate](winningNumbers);
    });
  }

  async #inputBonusNumber() {
    const bonusNumber = await InputHandler(
      USER_INPUT_TEXT.bonusNumber,
      this.#validateBonusNumber,
      this.#winningNumbers
    );
    this.#bonusNumber = Number(bonusNumber);
  }

  #validateBonusNumber(inputNumber, winningNumbers) {
    const bonusNumber = Number(inputNumber);
    Object.keys(bonusNumberValidater).forEach(validate => {
      bonusNumberValidater[validate](bonusNumber, winningNumbers);
    });
  }

    try {
      const bonusNumber =
        await Console.readLineAsync('보너스 번호를 입력해 주세요.');
      this.#validateBonusNumber(Number(bonusNumber));
      this.#bonusNumber = Number(bonusNumber);
    } catch (error) {
      Console.print(error.message);
      this.#inputBonusNumber();
    }
  }

  #validatePaymentAmount(amount) {
    if (!Number.isInteger(Number(amount))) {
      throw new Error('[ERROR] 정수를 입력해주세요.');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액은 1000원 단위로만 가능합니다.');
    }
  }

  #validateWinningNumber(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw new Error('[ERROR] 당첨 번호는 6개여야 합니다.');
    }
    if (
      winningNumbers.some(number => number < MIN_NUMBER || number > MAX_NUMBER)
    ) {
      throw new Error('[ERROR] 당첨 번호는 1~45 사이여야 합니다.');
    }
    if (winningNumbers.some(number => !Number.isInteger(Number(number)))) {
      throw new Error('[ERROR] 당첨 번호는 정수여야 합니다.');
    }
    if (
      winningNumbers.some(
        (number, index) => winningNumbers.indexOf(number) !== index
      )
    ) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }
  }

  #validateBonusNumber(bonusNumber) {
    if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER) {
      throw new Error('[ERROR] 보너스 번호는 1~45 사이여야 합니다.');
    }
    if (!Number.isInteger(Number(bonusNumber))) {
      throw new Error('[ERROR] 보너스 번호는 정수여야 합니다.');
    }
    if (this.#winningNumbers.includes(bonusNumber)) {
      throw new Error('[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.');
    }
  }

  setStatistics() {
    this.#statistics = new LottoStatistics(
      this.#paymentAmount,
      this.#winningNumbers,
      this.#bonusNumber,
      this.#lottos
    );
  }

  outputStatistics() {
    const winningRate = this.#statistics.getWinningRate();
    const earningRate = this.#statistics.getEarningRate();
    Console.print(
      `3개 일치 (${WINNING_MONEY.fifth.toLocaleString()}원) - ${
        winningRate.fifth
      }개`
    );
    Console.print(
      `4개 일치 (${WINNING_MONEY.fourth.toLocaleString()}원) - ${
        winningRate.fourth
      }개`
    );
    Console.print(
      `5개 일치 (${WINNING_MONEY.third.toLocaleString()}원) - ${
        winningRate.third
      }개`
    );
    Console.print(
      `5개 일치, 보너스 볼 일치 (${WINNING_MONEY.second.toLocaleString()}원) - ${
        winningRate.second
      }개`
    );
    Console.print(
      `6개 일치 (${WINNING_MONEY.first.toLocaleString()}원) - ${
        winningRate.first
      }개`
    );
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default App;
