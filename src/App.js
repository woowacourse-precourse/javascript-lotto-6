import LottoMachine from './LottoMachine';
import InputView from './view/InputView';
import OutputView from './view/OutputView';

class App {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async play() {
    await this.#requestUserMoney();
    this.#lottoMachine.issueLottos();
    this.#printLottos();
    await this.#requestWinningNumbers();
    await this.#requestBonusNumbers();
    this.#lottoMachine.compareLottosWithWinningNumber();
  }

  async #requestUserMoney() {
    let isVaildMoney = false;

    while (!isVaildMoney) {
      try {
        const money = await InputView.getMoney();
        this.#lottoMachine.setMoney(money);
        isVaildMoney = true;
      } catch (errorMessage) {
        OutputView.printError(errorMessage);
      }
    }
  }

  #printLottos() {
    const purchaseCount = this.#lottoMachine.getPurchaseCount();
    OutputView.printPurchaseCount(purchaseCount);

    for (let i = 0; i < purchaseCount; i++) {
      const lotto = this.#lottoMachine.getLotto(i);
      OutputView.printLotto(lotto);
    }
  }

  async #requestWinningNumbers() {
    let isVaildWinningNumber = false;

    while (!isVaildWinningNumber) {
      try {
        const winningNumbers = await InputView.getWinningNumber();
        this.#lottoMachine.setWinningNumbers(winningNumbers);
        isVaildWinningNumber = true;
      } catch (errorMessage) {
        OutputView.printError(errorMessage);
      }
    }
  }

  async #requestBonusNumbers() {
    let isVaildBonusNumber = false;

    while (!isVaildBonusNumber) {
      try {
        const bonusNumber = await InputView.getBonusNumber();
        this.#lottoMachine.setBonusNumber(bonusNumber);
        isVaildBonusNumber = true;
      } catch (errorMessage) {
        OutputView.printError(errorMessage);
      }
    }
  }
}

export default App;
