import { GUIDE_MESSAGE } from './constants/constants'
import LottoTickets from './LottoTickets';
import Input from './view/Input';
import Output from './view/Output';

// @note - 금액 저장, 당첨 번호 저장, 보너스 번호 저장, 수익률 출력

class App {
  #money

  constructor() {
    this.#money = 0;
    this.input = new Input();
    this.output = new Output();
  }

  async play() {
    await this.requestPurchaseAmounts();
  }

  async requestPurchaseAmounts() {
    const INPUT = await this.input.getValue(GUIDE_MESSAGE.insertPurchaseAmount)

    this.lottos = new LottoTickets(String(INPUT));
    this.#money = this.lottos.returnMoney()
    
    this.output.printMoney(this.#money);
  }
}

export default App;