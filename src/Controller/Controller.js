import { Console } from '@woowacourse/mission-utils';
import Input from '../View/Input.js';
import Output from '../View/Output.js';
import Lotto from '../Model/Lotto.js';
import LottoService from '../Model/LottoService.js';

class Controller {
  #amount;
  #lottoList = [];
  #winnginNum;
  #bonusNum;
  #matchHistory;
  #rateOfReturn;

  constructor() {
    this.input = new Input();
    this.output = new Output();
    this.lottoService = new LottoService();
  }

  async buyLotto() {
    this.#amount = await this.input.inputPurchase();
    let buy = this.#amount;
    while (buy > 0) {
      this.#lottoList.push(this.lottoService.createLotto());
      buy -= 1000;
    }
    this.output.purchaseHistory(this.#lottoList);
  }

  async inputWinningNum() {
    const userInput = await this.input.inputWinningNum();
    this.#winnginNum = userInput.split(',');
    const lotto = new Lotto(this.#winnginNum);
    this.#bonusNum = await this.input.inputBonus();
  }

  winningStatement() {
    this.#matchHistory = this.lottoService.getWinningList(
      this.#lottoList,
      this.#winnginNum,
      this.#bonusNum,
    );
    this.#rateOfReturn = this.lottoService.getRateReturn(this.#amount);
    this.output.winningDetails(this.#matchHistory, this.#rateOfReturn);
  }
}

export default Controller;
