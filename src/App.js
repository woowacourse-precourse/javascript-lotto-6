import { Console } from '@woowacourse/mission-utils';
import {
  isValidLottoAmountInput,
  isValidLottoWinningNumbersInput,
  isValidLottoBonusNumberInput,
} from './utils/validation.js';
import { pickRandomLottoNumbers } from './utils/random.js';
import InputView from './view/inputView.js';
import OutputView from './view/OutputView.js';
import Lotto from './Lotto.js';
import { WINNINGS } from './constants.js';

class App {
  constructor() {
    this.lottoRankingResult = [];
  }

  async play() {
    const lottoAmount = await this.getLottoAmount();
    const lottoCount = this.getLottoCount(lottoAmount);
    const lottoTickets = this.getLottoTickets(lottoCount);

    OutputView.printLottoTicketCount(lottoCount);
    OutputView.printLottoTickets(lottoTickets);

    const lottoWinningNumbers = await this.getWinningNumbers();
    const lottoBonusNumber = await this.getBonusNumber(lottoWinningNumbers);

    this.getRankingResult(lottoTickets, lottoWinningNumbers, lottoBonusNumber);
    const lottoTotalWinnings = this.calculateTotalWinnings(
      this.lottoRankingResult
    );

    const lottoWinningCountList = this.getWinningCount(this.lottoRankingResult);
    OutputView.printWinningResult(lottoWinningCountList);
  }

  async getLottoAmount() {
    let lottoAmount;

    while (true) {
      try {
        lottoAmount = await InputView.readLottoAmount();

        if (!isValidLottoAmountInput(lottoAmount)) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        } else {
          return lottoAmount;
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getWinningNumbers() {
    let lottoWinningNumbers;

    while (true) {
      try {
        lottoWinningNumbers = await InputView.readLottoWinningNumbers();
        isValidLottoWinningNumbersInput(lottoWinningNumbers);

        return lottoWinningNumbers;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async getBonusNumber(winningNumbers) {
    let lottoBonusNumber = 0;

    while (true) {
      try {
        lottoBonusNumber = await InputView.readLottoBonusNumber();
        isValidLottoBonusNumberInput(winningNumbers, lottoBonusNumber);

        return lottoBonusNumber;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  getLottoCount(amount) {
    return parseInt(amount / 1000);
  }

  getLottoTickets(count) {
    const lottoTickets = [];

    for (let i = 0; i < count; i++) {
      lottoTickets.push(this.getLottoNumbers());
    }

    return lottoTickets;
  }

  getLottoNumbers() {
    const lottoNumbers = pickRandomLottoNumbers();
    const lotto = new Lotto(lottoNumbers);

    return lotto;
  }

  getRankingResult(tickets, winningNumbers, bonusNumber) {
    tickets.forEach((ticket) => {
      const lotto = new Lotto(ticket.getNumbers());
      const ranking = lotto.getRank(winningNumbers, bonusNumber);
      this.lottoRankingResult.push(ranking);
    });
    return this.lottoRankingResult;
  }

  calculateTotalWinnings(rankingResult) {
    const totalWinnings = rankingResult.reduce((total, ranking) => {
      if (WINNINGS.hasOwnProperty(ranking)) {
        total += WINNINGS[ranking];
      }
      return total;
    }, 0);

    return totalWinnings;
  }

  getWinningCount(rankingResult) {
    const winningCount = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };
    rankingResult.forEach((ranking) => {
      const rankingKey = ranking.toString();
      if (winningCount.hasOwnProperty(rankingKey)) {
        winningCount[rankingKey]++;
      }
    });

    return winningCount;
  }
}

export default App;
