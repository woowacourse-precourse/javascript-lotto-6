import DongHang from './DongHang.js';
import User from './User.js';

class App {
  async play() {
    this.user = new User();

    await this.user.buy();

    const winningNumbers = await DongHang.makeWinningNumbers();
    this.user.checkAll(winningNumbers);
    this.user.printStatistics();
  }
}

export default App;
