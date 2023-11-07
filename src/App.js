import DongHang from './DongHang.js';
import User from './User.js';

class App {
  async play() {
    this.user = new User();
    this.donHang = new DongHang();

    await this.user.buy();
    await this.donHang.inputWinningNumbers();

    const winningNumbers = this.donHang.getWinningNumbers();
    this.user.checkAll(winningNumbers);
    this.user.printStatistics();
  }
}

export default App;
