import { Console, Random } from '@woowacourse/mission-utils';
import User from './User.js';
import Validation from './Validation.js';
import MESSAGE from './MESSAGE.js';
import Lotto from './Lotto.js';

class Game {
  #lottoAmount;

  #myLotto = [];

  #winLotto;

  #bonusNumber;

  #winningDetails = { 3: 0, 4: 0, 5: 0, '5b': 0, 6: 0 };

  #profit;

  static async #getLottoPrice() {
    const priceInput = await User.readInput(MESSAGE.enterPrice);
    return Validation.price(priceInput);
  }

  static #priceToAmount(price) {
    return price / 1000;
  }

  async #setLottoAmount() {
    const price = await Game.#getLottoPrice();
    this.#lottoAmount = Game.#priceToAmount(price);
  }

  static #pickLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  #setMyLotto() {
    let count = this.#lottoAmount;
    while (count > 0) {
      this.#myLotto.push(new Lotto(Game.#pickLottoNumbers()));
      count -= 1;
    }
  }

  #printMyLotto() {
    User.printMessage(MESSAGE.purchasedLotto(this.#lottoAmount));
    this.#myLotto.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );
  }

  static async #enterWinNumbers() {
    const winNumbersInput = await User.readInput(MESSAGE.enterWinNumbers);
    return Validation.winNumbers(winNumbersInput);
  }

  async #setWinLotto() {
    this.#winLotto = new Lotto(await Game.#enterWinNumbers());
  }

  static async #enterBonusNumber() {
    const bonusNumberInput = await User.readInput(MESSAGE.enterBonusNumber);
    return Validation.bonusNumber(bonusNumberInput);
  }

  async #setBonusNumber() {
    this.#bonusNumber = await Game.#enterBonusNumber();
  }

  static #howManyMatch(winLotto, myLotto) {
    const winNumbers = winLotto.getNumbers();
    const myNumbers = myLotto.getNumbers();
    const mergedNumbers = [...winNumbers, ...myNumbers];
    return 12 - new Set(mergedNumbers).size;
  }

  #hasBonusNumber(myLotto) {
    const myNumbers = myLotto.getNumbers();
    return myNumbers.includes(this.#bonusNumber);
  }

  #setWinningDetails() {
    this.#myLotto.forEach((myLotto) => {
      const match = Game.#howManyMatch(this.#winLotto, myLotto);
      if (match === 5 && this.#hasBonusNumber(myLotto)) {
        this.#winningDetails['5b'] += 1;
        return;
      }
      if (match >= 3) {
        this.#winningDetails[match] += 1;
      }
    });
  }

  #printWinningDetails() {
    User.printMessage(MESSAGE.winningDetails(this.#winningDetails));
  }

  #setProfit() {
    this.#profit =
      this.#winningDetails[3] * 5000 +
      this.#winningDetails[4] * 50000 +
      this.#winningDetails[5] * 1500000 +
      this.#winningDetails['5b'] * 30000000 +
      this.#winningDetails[6] * 2000000000;
  }

  #calculateProfitRate() {
    return (this.#profit / this.#lottoAmount / 10).toFixed(1);
  }

  #printProfitRate() {
    User.printMessage(MESSAGE.profitRate(this.#calculateProfitRate()));
  }

  async play() {
    try {
      await this.#setLottoAmount();
      this.#setMyLotto();
      this.#printMyLotto();
      await this.#setWinLotto();
      await this.#setBonusNumber();
      this.#setWinningDetails();
      this.#printWinningDetails();
      this.#setProfit();
      this.#printProfitRate();
    } catch (e) {
      Console.print(e.message);
    }
  }
}

export default Game;
