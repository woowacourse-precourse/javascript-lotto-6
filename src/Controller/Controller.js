import Input from '../View/Input.js';
import Output from '../View/Output.js';
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
    while (this.#amount > 0) {
      this.#lottoList.push(this.lottoService.createLotto());
      this.#amount -= 1000;
    }
    this.output.purchaseHistory(this.#lottoList);
  }

  async inputWinningNum() {
    this.#winnginNum = await this.input.inputWinningNum();
    this.#bonusNum = await this.input.inputBonus();
  }

  winningStatement() {
    this.#matchHistory = this.lottoService.getWinningList(
      this.#lottoList,
      this.#winnginNum,
      this.#bonusNum,
    );
    this.output.winningDetails(
      this.#matchHistory,
      this.#winnginNum,
      this.#bonusNum,
    );
  }

  rateReturn() {
    this.#rateOfReturn = this.lottoService.getrateReturn(this.#amount);
  }
}

export default Controller;
