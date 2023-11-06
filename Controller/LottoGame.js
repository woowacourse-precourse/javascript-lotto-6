import View from '../View/View.js';
import Lotto from '../src/Lotto.js';
import createRandomNumbers from '../utils/RandomNumber.js';
import BonusNumber from '../Models/BonusNumber.js';
import LottoResult from './domain/LottoResult.js';
import { Console } from '@woowacourse/mission-utils';
import PurchaseMoney from '../Models/PurchaseMoney.js';

class LottoGame {
  #view = new View();

  async insertMoney() {
    try {
      const insertedMoneyUserInput = await this.#view.inputPurchaseMoney();
      const insertedMoney = new PurchaseMoney(
        insertedMoneyUserInput
      ).getInsertedMoney();
      this.#view.printNewLine();

      return insertedMoney;
    } catch (error) {
      Console.print(error.message);
      await this.insertMoney();
    }
  }

  getPurchasedAmount(insertedMoney) {
    const amount = insertedMoney / 1000;
    this.#view.printAmount(amount);

    return amount;
  }

  getPurchasedNumbers(amount) {
    const purchasedNumbers = Array.from({ length: amount }, () =>
      createRandomNumbers(1, 45, 6)
    );
    this.#view.printPurchasedNumbers(purchasedNumbers);
    this.#view.printNewLine();

    return purchasedNumbers;
  }

  async createLottoNumber() {
    try {
      const lottoNumberUserInput = await this.#view.inputLottoNumber();
      const lottoNumber = new Lotto(lottoNumberUserInput).getLottoNumbers();
      this.#view.printNewLine();

      return lottoNumber;
    } catch (error) {
      Console.print(error.message);
      await this.createLottoNumber();
    }
  }

  async createBonusNumber() {
    try {
      const bonusNumberUserInput = await this.#view.inputBonusNumber();
      const bonusNumber = new BonusNumber(
        bonusNumberUserInput
      ).getBonusNumber();
      this.#view.printNewLine();

      return bonusNumber;
    } catch (error) {
      Console.print(error.message);
      await this.createBonusNumber();
    }
  }

  endGame(purchasedNumbers, lottoNumber, bonusNumber, amount) {
    const winResultBoard = LottoResult.calculateResultBoard(
      purchasedNumbers,
      lottoNumber,
      bonusNumber
    );

    const profitPercent = LottoResult.calculateProfit(amount, winResultBoard);

    this.#view.printWinResult(profitPercent, winResultBoard);
  }

  async play() {
    const insertedMoney = await this.insertMoney();
    const amount = this.getPurchasedAmount(insertedMoney);
    const purchasedNumbers = this.getPurchasedNumbers(amount);
    const lottoNumber = await this.createLottoNumber();
    const bonusNumber = await this.createBonusNumber();
    this.endGame(purchasedNumbers, lottoNumber, bonusNumber, amount);
  }
}

export default LottoGame;
