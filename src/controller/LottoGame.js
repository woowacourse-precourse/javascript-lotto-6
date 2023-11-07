import Input from '../view/Input.js';
import Output from '../view/Output.js';
import Buyer from '../model/Buyer.js';
import Util from '../utils/Util.js';
import WinLotto from '../model/WinLotto.js';
import Result from '../model/Result.js';

class LottoGame {
  #buyer;

  #winLotto;

  #result;

  async start() {
    await this.#setBuyer();
    this.#printPurchaseInfo();
    await this.#setWinLotto();
    await this.#setBonusLotto();
    this.#setResult();
    this.#printResult();
    this.#printRateOfReturn();
  }

  async #setBuyer() {
    while (true) {
      const lottoBudget = await Input.getLottoBudget();
      try {
        this.#buyer = new Buyer(lottoBudget);
        break;
      } catch (error) {
        Output.print(error.message);
      }
    }
  }

  #printPurchaseInfo() {
    Output.printPurchaseCount(this.#buyer.getPurchaseCount());
    Output.printPurchasedLottoList(this.#buyer.getLottoList());
  }

  async #setWinLotto() {
    while (true) {
      const winLotto = await Input.getWinLotto();
      const parsedWinLotto = Util.parseStringToSortedArray(winLotto);
      try {
        this.#winLotto = new WinLotto(parsedWinLotto);
        break;
      } catch (error) {
        Output.print(error.message);
      }
    }
  }

  async #setBonusLotto() {
    while (true) {
      const bonusLotto = await Input.getBonusLotto();
      try {
        this.#winLotto.setBonusLotto(Number(bonusLotto));
        break;
      } catch (error) {
        Output.print(error.message);
      }
    }
  }

  #setResult() {
    this.#result = new Result(this.#buyer.getLottoList(), this.#winLotto.getLotto(), this.#winLotto.getBonusLotto());
  }

  #printResult() {
    Output.printResultHeader();
    this.#result.getResultMessages().forEach((each) => {
      Output.print(`${each}`);
    });
  }

  #printRateOfReturn() {
    const rate = Util.rateOfReturn(this.#result.getTotalPrize(), this.#buyer.getBudget());
    Output.printRateOrReturn(rate);
  }
}

export default LottoGame;
