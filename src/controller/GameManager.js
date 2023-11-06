import { Handle_Input } from '../view/InputUI';
import { Handle_Output } from '../view/OutputUI';
import { Lottos } from '../domain/Lottos';
import { RandomNumber } from '../domain/RandomNumber';

export class GameManager {
  #money_amount;

  async startGame() {
    this.initQuantity_PickLotto();
  }

  async initMoney() {
    this.#money_amount = parseInt(await Handle_Input.moneyInput());

    return this.#money_amount / 1000;
  }

  async initQuantity_PickLotto() {
    const quantitiy = await this.initMoney();
    const num_generator = new RandomNumber();
    const lotto_collection = [];

    for (let i = 0; i < quantitiy; i++) {
      lotto_collection.push(num_generator.generate());
    }

    const lottos = new Lottos(lotto_collection);

    Handle_Output.Quantitiy_Output(quantitiy);
    Handle_Output.Lotto_Output(lottos.join_ConvertedString());
  }
}
