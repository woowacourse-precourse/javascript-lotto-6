import { GUIDE_MESSAGE, WINNING_AMOUNTS } from './constants/constants'
import LottoTickets from './LottoTickets';
import BonusNumber from './BonusNumber'
import Input from './view/Input';
import Output from './view/Output';
import Lotto from './Lotto';

// @note - 금액 저장, 당첨 번호 저장, 보너스 번호 저장, 수익률 출력

class App {
  #money
  #lottos
  #bonusNumber
  #winningNumbers

  constructor() {
    this.#money = 0;
    this.#lottos = [];
    this.#bonusNumber = 0;
    this.#winningNumbers = [];
    this.input = new Input();
    this.output = new Output();
  }

  async play() {
    await this.requestPurchaseAmounts();
    this.requestLottoTickets()
    await this.requestWinningNumbers();
    await this.requestBonusNumber();
    this.requestResult();
  }

  async requestPurchaseAmounts() {
    const INPUT = await this.input.getValue(GUIDE_MESSAGE.insertPurchaseAmount)

    this.lottos = new LottoTickets(String(INPUT));
    this.#money = this.lottos.returnMoney()
    
    this.output.printMoney(this.#money);
  }

  requestLottoTickets() {
    this.output.printTickets(this.#money / 1000)
  }
}

export default App;