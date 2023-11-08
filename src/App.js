import { Console, Random } from '@woowacourse/mission-utils';
import InputView from './view/InputView';
import Lotto from './Lotto';
import validate from './util/validation';

class App {
  #ticketCount;
  #winningNumber;
  #validTicketNumber;
  #bonusNumber;
  #lottoNumbers;

  async play() {
    this.#ticketCount = await InputView.moneyInput();
    this.#winningNumber = await InputView.winningNumerInput();
    this.#validTicketNumber = new Lotto(this.#winningNumber);
    this.#bonusNumber = await InputView.bonusNumberInput();
    this.#lottoNumbers = this.createLottoNumbers();
  }
  async createLottoNumbers() {
    const lottoNumber = await Random.pickUniqueNumbersInRange(1, 45, 6);
    return lottoNumber;
  }
}

export default App;
