import View from '../View/View.js';
import Lotto from '../src/Lotto.js';
import Validator from './modules/Validator.js';
import createRandomNumbers from '../utils/RandomNumber.js';
import BonusNumber from '../Models/BonusNumber.js';
import LottoResult from './modules/LottoResult.js';

class LottoGame {
  #view = new View();

  async play() {
    const insertedMoney = await this.#view.getPurchaseMoney();
    Validator.checkInsertedMoneyIsValid(insertedMoney);
    this.#view.printNewLine();

    const amount = insertedMoney / 1000;
    this.#view.printAmount(amount);

    const purchasedNumbers = Array.from({ length: amount }, () =>
      createRandomNumbers(1, 45, 6)
    );
    this.#view.printPurchasedNumbers(purchasedNumbers);
    this.#view.printNewLine();

    const lottoNumberUserInput = await this.#view.getLottoNumber();
    const lottoNumber = new Lotto(lottoNumberUserInput).getLottoNumbers();
    this.#view.printNewLine();

    const bonusNumberUserInput = await this.#view.getBonusNumber();
    const bonusNumber = new BonusNumber(bonusNumberUserInput).getBonusNumber();
    this.#view.printNewLine();

    const winResultBoard = LottoResult.calculateResultBoard(
      purchasedNumbers,
      lottoNumber,
      bonusNumber
    );

    const profitPercent = LottoResult.calculateProfit(amount, winResultBoard);

    this.#view.printWinResult(profitPercent, winResultBoard);
  }
}

export default LottoGame;
