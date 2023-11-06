import { View } from './LottoView.js';
import Lotto from './Lotto.js';
import { Console, Random } from '@woowacourse/mission-utils';
const DECICMAL_NUMBER = 10;

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

      const lottoWinningNumberArray =
        this.getLottoWinningNumberArray(lottoWinningNumbers);

      const bonusNumber = await this.validateLottoBonusNumber(
        lottoWinningNumberArray
      );
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

        return parseInt(lottoAmount, DECICMAL_NUMBER);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async validateLottoWinningNumbers() {
    while (true) {
      try {
        const lottoWinningNumbers = await this.view.getLottoWinningNumbers();
        const model = new Lotto(lottoWinningNumbers);
        model.validateLottoWinningNumbers();

        return lottoWinningNumbers;
      } catch (error) {
        console.error(error);
      }
    }
  }

  async validateLottoBonusNumber(lottoWinningNumberArray) {
    while (true) {
      try {
        const lottoBonusNumber = await this.view.getBonusLottoNumber();
        const model = new Lotto(lottoBonusNumber);
        model.validateLottoBonusNumber(lottoWinningNumberArray);

        return parseInt(lottoBonusNumber, DECICMAL_NUMBER);
      } catch (error) {
        console.error(error);
      }
    }
  }

  getLottoTickets(numbers) {
    const model = new Lotto(numbers);
    return model.generateLottoTicketsArray();
  }

  getLottoWinningNumberArray(lottoWinningNumbers) {
    const model = new Lotto(lottoWinningNumbers);
    return model.getLottoWinningNumberArray();
  }
}

export default App;
