import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import Lotto from './Lotto.js';

class App {
  
  #user
  #lotto

  constructor() {
    this.#user = new User();
  }

  async play() {
    await this.#user.setPurchaseAmount();
    this.#user.setLottoNumbers();

    const winningNumbers = (await Console.readLineAsync('\n당첨 번호를 입력해주세요.\n')).split(',');
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
