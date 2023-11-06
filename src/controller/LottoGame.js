import { Handle_Input } from '../view/InputUI';

export class LottoGame {
  #money_amount;

  async startGame() {
    const quantitiy = await this.initMoney();
  }

  async initMoney() {
    this.#money_amount = parseInt(await Handle_Input.moneyInput());

    return this.#money_amount / 1000;
  }
}
