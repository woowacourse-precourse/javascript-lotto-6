import DongHang from './DongHang.js';
import Statistics from './Statistics.js';
import User from './User.js';

class App {
  async play() {
    this.user = new User();
    await this.user.buy();

    const winningNumbers = await DongHang.makeWinningNumbers();
    const results = this.user.checkAll(winningNumbers);

    const statistics = new Statistics(results);
    statistics.show();
  }
}

export default App;
