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

      const lottoWinningNumbers = await this.validateLottoWinningNumbers();
      Console.print(lottoWinningNumbers);
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

  async validateLottoWinningNumbers() {
    while (true) {
      try {
        const lottoWinningNumbers = await this.view.getLottoWinningNumbes();
        const model = new Lotto(lottoWinningNumbers);
        model.validateLottoWinningNumbers();
        return lottoWinningNumbers;
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
