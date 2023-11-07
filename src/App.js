import Host from './Host.js';
import Lotto from './Lotto.js';
import Statistics from './Statistics.js';

class App {
  async play() {
    const winningNumbers = await Host.getWinningNumbers();
    const lotto = new Lotto(winningNumbers);
    const bonusNumber = await Host.getBonusNumber(winningNumbers);
    const user = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 6, 7, 8, 9],
    ];
    const result = lotto.printResult(user, bonusNumber);
    Statistics.printRateOfReturn(8000, result);
  }
}

const app = new App();
app.play();

export default App;
