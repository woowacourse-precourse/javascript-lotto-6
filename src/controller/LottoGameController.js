import { Console } from '@woowacourse/mission-utils';
import { checkLottoResult } from '../utils/CheckLottoResult.js';
import { incomingProfits } from '../utils/IncomingProfits.js';
import { inputBounsNumber, inputBuyMoney, inputWinningLotto } from '../view/InputView.js';
import {
  printBuyLotto,
  printLottoArray,
  printProfitRate,
  printResult,
  printResultDetail,
} from '../view/OutputView.js';
import MakeLottoService from '../service/MakeLottoService.js';

export default class LottoGameController {
  #buyLottoMoney;
  #lottoService;
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
    this.#buyLottoMoney = await inputBuyMoney();
    this.#lottoService = new MakeLottoService(this.#buyLottoMoney);
    this.#printLotto();
  }

  #printLotto() {
    printBuyLotto(this.#lottoService.getLottoCount());
    printLottoArray(this.#lottoService.getLottoNumbers());
  }

  async giveLottoNumbers() {
    this.#winningLottoNumbers = await inputWinningLotto();
  }

  async giveBonusNumber() {
    this.#bonusNumber = await inputBounsNumber(this.#winningLottoNumbers);
  }

  checkLotto() {
    const result = checkLottoResult(
      this.#lottoService.getLottoNumbers(),
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
