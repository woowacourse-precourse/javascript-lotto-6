import { View } from './LottoView.js';
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.view = new View();
  }
  async play() {
    try {
      const lottoAmount = await this.validateLottoAmount();
      const lottoTickets = this.getLottoTickets(lottoAmount);
      this.view.printLottoTickets(lottoTickets);
    } catch (error) {
      throw error;
    }
  }

  async validateLottoAmount() {
    while (true) {
      try {
        const lottoAmount = await this.view.getLottoPerchaseAmount();
        const model = new Lotto(lottoAmount);
        model.validateLottoAmount();
        return lottoAmount;
      } catch (error) {
        console.error(error);
      }
    }
  }

  getLottoTickets(numbers) {
    const model = new Lotto(numbers);
    return model.generateLottoTicketsArray();
  }
}

export default App;
