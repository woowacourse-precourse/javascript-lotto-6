import { Console } from '@woowacourse/mission-utils';
import LottoMachine from './LottoMachine.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class GameController {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async play() {
    await this.getMoney();
    this.createLottos();
  }

  async getMoney() {
    while (true) {
      try {
        const money = await InputView.inputMoney();
        this.#lottoMachine.insertMoney(money);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  createLottos() {
    while (true) {
      try {
        this.#lottoMachine.createLottos();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
export default GameController;
