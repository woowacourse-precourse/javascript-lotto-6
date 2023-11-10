import INPUT from './View/Input.js'
import OUTPUT from './View/Output.js';
import COMPUTER from './Computer.js';
import AppError from './Contents/AppError.js';
import LottoError from './Contents/LottoError.js';
import CALCULATE from './Calculate.js';
import { Console } from '@woowacourse/mission-utils';

class LottoGame {
  #input;
  #output;
  #computer;
  #calculate;
  #lotteries;

  constructor() {
    this.#input = new INPUT();
    this.#output = new OUTPUT();
    this.#computer = new COMPUTER();
    this.#calculate = new CALCULATE();
    this.#lotteries = [];
  }

  async handleAppError(error) {
    if (error instanceof AppError) {
      Console.print(`[ERROR] ${error.message}`);
      await this.play();
    } else {
      throw error;
    }
  }

  async play() {
    try {
      await this.playLotteryGame();
    } catch (error) {
      await this.handleAppError(error);
    }
  }

  async playLotteryGame() {
    try {
      const amount = await this.#input.Price();
      const lotteries = this.#computer.sell(amount);
      this.#output.PurchaseInformation(lotteries.map((Lotto) => Lotto.getInformation()));

      const numbers = await this.#input.Number();
      const bonusNumber = await this.#input.BonusNumber();
      this.#lotteries = lotteries;

      const lottoResult = this.#lotteries.map((lotto) => lotto.checkNumber(numbers, bonusNumber));

      const finalResult = this.#calculate.calculateResult(lottoResult);
      const Rate = this.#calculate.calculateRate(finalResult, amount);
      this.#output.Statistics(finalResult, Rate);
    } catch (error) {
      throw new AppError(LottoError.errormessage.amount);
    }
  }
}

export default LottoGame;