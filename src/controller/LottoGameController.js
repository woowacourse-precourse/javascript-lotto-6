import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO_PRICE } from '../constants/GameSetting.js';
import { checkLottoResult } from '../utils/CheckLottoResult.js';
import { incomingProfits } from '../utils/IncomingProfits.js';
import { getRandomNumber } from '../utils/RandomNumber.js';
import {
  inputBounsNumber,
  inputBuyAmount,
  inputWinningLotto,
  printBuyLotto,
  printLottoArray,
  printProfitRate,
  printResult,
  printResultDetail,
} from '../view/View.js';

export default class LottoGameController {
  #buyLottoAmount;
  #buyLottoCnt;
  #createdLottoNumbers = [];
  #winningLottoNumbers;
  #bonusNumber;
  #profitRate;

  async play() {
    try {
      await this.buyAmount();
      //   this.countLotto();
      //   this.buyLotto();
      await this.giveLottoNumbers();
      await this.giveBonusNumber();
      this.checkLotto();
      this.showProfitRate();
    } catch (err) {
      Console.print(err.message);
      await this.play();
    }
  }

  async buyAmount() {
    this.#buyLottoAmount = await inputBuyAmount();
    this.countLotto();
  }

  countLotto() {
    this.#buyLottoCnt = this.#buyLottoAmount / LOTTO_PRICE;
    this.buyLotto();
  }

  buyLotto() {
    printBuyLotto(this.#buyLottoCnt);
    for (let i = 0; i < this.#buyLottoCnt; i++) {
      this.#createdLottoNumbers.push(this.makeLotto());
    }
    printLottoArray(this.#createdLottoNumbers);
  }

  makeLotto() {
    const lotto = new Lotto(getRandomNumber());
    return lotto.getNumbers();
  }

  async giveLottoNumbers() {
    this.#winningLottoNumbers = await inputWinningLotto();
  }

  async giveBonusNumber() {
    this.#bonusNumber = await inputBounsNumber(this.#winningLottoNumbers);
  }

  giveProfitRate(profit) {
    this.#profitRate = profit;
  }

  checkLotto() {
    const result = checkLottoResult(
      this.#createdLottoNumbers,
      this.#winningLottoNumbers,
      this.#bonusNumber,
    );
    printResult();
    printResultDetail(result);
    const profit = incomingProfits(result, this.#buyLottoAmount);
    this.giveProfitRate(profit);
  }

  showProfitRate() {
    printProfitRate(this.#profitRate);
  }
}
