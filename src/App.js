import { inputUserMoney, inputUserLottoArray, inputUserBonusNumber } from '../src/Input';
import LottoManager from './LottoManager';
import { Console } from '@woowacourse/mission-utils';

class App {
  #manager;

  constructor() {
    this.#manager = new LottoManager();
  }

  async #handleGlobalError(callback) {
    try {
      await callback();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async play() {
    await this.#handleGlobalError(async () => {
      const userMoney = await inputUserMoney();
      this.#manager.generateLottoTickets(userMoney);
      this.#manager.printLottoTickets();

      const userLottoArray = await inputUserLottoArray();
      this.#manager.setUserLottoArray(userLottoArray);

      const userBonusNumber = await inputUserBonusNumber();
      this.#manager.setUserBonusNumber(userBonusNumber);

      this.#manager.determineLotteryResult();
      this.#manager.printResult()
      this.#manager.printYield()
    });
  }
}

export default App;
