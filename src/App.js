import Host from './Host.js';
import Lotto from './Lotto.js';
import Statistics from './Statistics.js';
import Vendor from './Vendor.js';

class App {
  async play() {
    const paid = await Vendor.buyTickets();
    const winningNumbers = await Host.getWinningNumbers();
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await Host.getBonusNumber(winningNumbers);
    const user = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 6, 7, 8, 9],
    ];
    const prize = lotto.printResult(user, bonusNumber);
    Statistics.printRateOfReturn(paid, prize);
  }
}

const app = new App();
app.play();

export default App;
