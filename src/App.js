import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import LottoStatistics from './LottoStatistics';
import genLottoNumber from './genLottoNumber';
import InputHandler from './utils/InputHandler';
import { PERCHASE_AMOUNT } from './constant/lottoNumber';
import WINNING_MONEY from './constant/winningMoney';
import USER_INPUT_TEXT from './constant/inputText';
import {
  paymentAmountValidator,
  winningNumbersValidator,
  bonusNumberValidator,
} from './utils/validator';

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
    this.#setStatistics();
    this.#outputStatistics();
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
    Object.keys(paymentAmountValidator).forEach(validate => {
      paymentAmountValidator[validate](amount);
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
    Object.keys(winningNumbersValidator).forEach(validate => {
      winningNumbersValidator[validate](winningNumbers);
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
    Object.keys(bonusNumberValidator).forEach(validate => {
      bonusNumberValidator[validate](bonusNumber, winningNumbers);
    });
  }

  #setStatistics() {
    this.#statistics = new LottoStatistics(
      this.#paymentAmount,
      this.#winningNumbers,
      this.#bonusNumber,
      this.#lottos
    );
  }

  #outputWinningRate(winningRate) {
    const rates = Object.keys(winningRate).reverse();
    let matchedCount = 3;
    rates.forEach(rate => {
      const money = WINNING_MONEY[rate].toLocaleString();
      if (rate === 'second') {
        Console.print(
          `5개 일치, 보너스 볼 일치 (${money}원) - ${winningRate.second}개`
        );
      } else {
        Console.print(
          `${matchedCount}개 일치 (${money}원) - ${winningRate[rate]}개`
        );
        matchedCount += 1;
      }
    });
  }

  #outputStatistics() {
    const earningRate = this.#statistics.getEarningRate();
    const winningRate = this.#statistics.getWinningRate();
    this.#outputWinningRate(winningRate);
    Console.print(`총 수익률은 ${earningRate}%입니다.`);
  }
}

export default App;
