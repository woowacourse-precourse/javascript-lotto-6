import { Console } from '@woowacourse/mission-utils';
import Lotto from '../Lotto.js';
import { LOTTO_PRICE } from '../constants/GameSetting.js';
import { checkLottoResult } from '../utils/CheckLottoResult.js';
import { incomingProfits } from '../utils/IncomingProfits.js';
import { getRandomNumberSort } from '../utils/RandomNumber.js';
import { inputBounsNumber, inputBuyAmount, inputWinningLotto } from '../view/InputView.js';
import {
  printBuyLotto,
  printLottoArray,
  printProfitRate,
  printResult,
  printResultDetail,
} from '../view/OutputView.js';

export default class LottoGameController {
  #buyLottoMoney;
  #buyLottoCnt;
  #createdLottoNumbers = [];
  #winningLottoNumbers;
  #bonusNumber;
  #profitRate;

  async play() {
    try {
      await this.buyLottoMoney();
      await this.giveLottoNumbers();
      await this.giveBonusNumber();
      this.checkLotto();
      this.showProfitRate();
    } catch (err) {
      Console.print(err.message);
      await this.play();
    }
  }

  async buyLottoMoney() {
    this.#buyLottoMoney = await inputBuyAmount();
    this.#countLotto();
    this.#buyLotto();
  }

  #countLotto() {
    this.#buyLottoCnt = this.#buyLottoMoney / LOTTO_PRICE;
  }

  //   FIXME: 컨트롤러에서 하는게 맞는지? / 분리할 필요가 있을까?
  #buyLotto() {
    printBuyLotto(this.#buyLottoCnt);
    for (let i = 0; i < this.#buyLottoCnt; i++) {
      this.#createdLottoNumbers.push(this.#makeLotto());
    }
    printLottoArray(this.#createdLottoNumbers);
  }

  #makeLotto() {
    const lotto = new Lotto(getRandomNumberSort());
    return lotto.getNumbers();
  }

  async giveLottoNumbers() {
    this.#winningLottoNumbers = await inputWinningLotto();
  }

  async giveBonusNumber() {
    this.#bonusNumber = await inputBounsNumber(this.#winningLottoNumbers);
  }

  checkLotto() {
    const result = checkLottoResult(
      this.#createdLottoNumbers,
      this.#winningLottoNumbers,
      this.#bonusNumber,
    );
    printResult();
    printResultDetail(result);
    this.#giveProfitRate(incomingProfits(result, this.#buyLottoMoney));
  }

  #giveProfitRate(profit) {
    this.#profitRate = profit;
  }

  showProfitRate() {
    printProfitRate(this.#profitRate);
  }
}
