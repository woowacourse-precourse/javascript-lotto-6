import LottoMachine from './LottoMachine';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  #lottoMachine;

  constructor() {
    lottoMachine = new LottoMachine();
  }

  async play() {
    await this.#requestUserMoney();
  }

  async #requestUserMoney() {
    let isVaildMoney = false;

    while (!isVaildMoney) {
      try {
        const money = await InputView.getMoney();
        this.#lottoMachine.insertMoney(money);
        isVaildMoney = true;
      } catch (errorMessage) {
        OutputView.printError(errorMessage);
      }
    }
  }
}

export default App;
