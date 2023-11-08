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

    const winningNumbers = this.#userView.inputWinningNumbers();
    this.#lotto = new Lotto(winningNumbers);
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해주세요.\n');
    const userLottoNumbers = this.#user.getLottoNumbers(winningNumbers);
    const results = this.#lotto.calculateLottoResult(userLottoNumbers, winningNumbers.map(Number), bonusNumber);
    this.#lotto.printLottoResult(results);

    const earnings = this.#lotto.calculateEarningsRate(results);
    this.#lotto.printEarningsRate(earnings, this.#user.getPurchaseAmount());
  }
}

export default App;
