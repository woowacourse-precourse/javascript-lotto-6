import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import UserLottoModel from '../domain/UserLottoModel';
import LottoMatcher from '../domain/LottoMatcher';

class LottoController {
  #userLottoModel;

  constructor() {
    this.#userLottoModel = new UserLottoModel();
  }

  async playGame() {
    try {
      const ticketPrice = await this.getTicketPrice();
      this.printQuantity(ticketPrice);

      this.generateLotto(ticketPrice);

      const winningNumbers = await this.getWinningNumbers();
      const bonusNumbers = await this.getBonusNumbers();

      this.playLottoGame(winningNumbers, bonusNumbers, ticketPrice);
    } catch (error) {
      Console.print(error.message);
    }
  }

  async getTicketPrice() {
    return InputView.getLottoNumbers();
  }

  printQuantity(ticketPrice) {
    OutputView.printQuantity(ticketPrice);
  }

  generateLotto(ticketPrice) {
    this.#userLottoModel.generateLottoTicket(ticketPrice);
    const lottoTickets = this.#userLottoModel.getLottoTickets();
    OutputView.printLottoTickets(lottoTickets);
  }

  async getWinningNumbers() {
    while (true) {
      try {
        return await InputView.getWinningNumbers();
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  
  async getBonusNumbers() {
    while (true) {
      try {
        return await InputView.getBonusNumbers();
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  

  playLottoGame(winningNumbers, bonusNumbers, ticketPrice) {
    const result = this.#calculateLottoResult(winningNumbers, bonusNumbers, ticketPrice);
    this.#displayLottoResult(result);
  }

  #calculateLottoResult(winningNumbers, bonusNumbers, ticketPrice) {
    const lottoTickets = this.#userLottoModel.getLottoTickets();
    const lottoMatcher = new LottoMatcher(lottoTickets, winningNumbers, bonusNumbers, ticketPrice);
    return lottoMatcher.countMatches();
  }

  #displayLottoResult(result) {
    OutputView.printResultTitle();
    OutputView.printSeparator();
    OutputView.formatResults(result);
    OutputView.calculateProfitRate(result);
  }
}

export default LottoController;
