import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import Lotto from './Lotto.js';
import UserView from './views/UserView.js';

class App {
  
  #userView
  #user
  #lotto

  constructor() {
    this.#userView = new UserView();
  }

  async play() {
    // user
    const money = await this.#userView.inputPurchaseAmount();
    this.#user = new User(money);
    this.#user.setLottoNumbers();
    this.#userView.printUserLottoNumbers(this.#user.getNumberOfPurchases(), this.#user.getLottoNumbers());

    // lotto
    const winningNumbers = (await this.#userView.inputWinningNumbers()).split(',');
    this.#lotto = new Lotto(winningNumbers);
    const bonusNumber = await this.#userView.inputBonusNumber();
    this.#lotto.validateBonusNumber(bonusNumber);

    const userLottoNumbers = this.#user.getLottoNumbers(winningNumbers);
    const results = this.#lotto.calculateLottoResult(userLottoNumbers, winningNumbers.map(Number), bonusNumber);
    this.#lotto.printLottoResult(results);

    const earnings = this.#lotto.calculateEarningsRate(results);
    this.#lotto.printEarningsRate(earnings, this.#user.getPurchaseAmount());
  }
}

export default App;
