import {
  FIFTH_PRIZE,
  FIFTH_PRIZE_MONEY,
  FIRST_PRIZE,
  FIRST_PRIZE_MONEY,
  FOURTH_PRIZE,
  FOURTH_PRIZE_MONEY,
  SECOND_PRIZE,
  SECOND_PRIZE_MONEY,
  THIRD_PRIZE,
  THIRD_PRIZE_MONEY,
} from './constant/Prize.js';
import User from './model/User.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const money = await InputView.inputMoney();
    const user = new User(money);
    user.buyLottos();
    OutputView.printLottos(user.getLottos());
    const winningNumbers = await InputView.inputLottoNumbers();
    const bonusNumber = await InputView.inputBonusNumber(winningNumbers);
    const status = this.calculateStatus(user.getLottos(), winningNumbers, bonusNumber);
    const profitRate = this.calculateProfitRate(status, money);
    OutputView.winnigDetail(status, profitRate);
  }

  compareNumbers(lottoNumbers, winningNumbers) {
    const combinedNumbers = [...lottoNumbers, ...winningNumbers];
    const uniqueNumbers = new Set(combinedNumbers);
    const countOfMatchedNumbers = 12 - uniqueNumbers.size;
    return countOfMatchedNumbers;
  }

  checkBonusNumber(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  checkRank(countOfMatchedNumbers, hasBonusNumber) {
    switch (countOfMatchedNumbers) {
      case 6:
        return FIRST_PRIZE;
      case 5:
        if (hasBonusNumber) return SECOND_PRIZE;
        return THIRD_PRIZE;
      case 4:
        return FOURTH_PRIZE;
      case 3:
        return FIFTH_PRIZE;
      default:
        return -1;
    }
  }

  calculateStatus(lottos, winningNumbers, bonusNumber) {
    const status = {
      [FIRST_PRIZE]: 0,
      [SECOND_PRIZE]: 0,
      [THIRD_PRIZE]: 0,
      [FOURTH_PRIZE]: 0,
      [FIFTH_PRIZE]: 0,
    };
    lottos.forEach(lotto => {
      const countOfMatchedNumbers = this.compareNumbers(lotto, winningNumbers);
      const hasBonusNumber = this.checkBonusNumber(lotto, bonusNumber);
      const rank = this.checkRank(countOfMatchedNumbers, hasBonusNumber);
      if (rank !== -1) {
        status[rank] += 1;
      }
    });
    return status;
  }

  calculateProfitRate(status, money) {
    const profit =
      status[FIRST_PRIZE] * FIRST_PRIZE_MONEY +
      status[SECOND_PRIZE] * SECOND_PRIZE_MONEY +
      status[THIRD_PRIZE] * THIRD_PRIZE_MONEY +
      status[FOURTH_PRIZE] * FOURTH_PRIZE_MONEY +
      status[FIFTH_PRIZE] * FIFTH_PRIZE_MONEY;

    const profitRate = (profit / money) * 100;
    return profitRate.toFixed(1);
  }
}
const app = new App();
app.play();
export default App;
