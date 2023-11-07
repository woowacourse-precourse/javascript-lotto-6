import DongHang from './DongHang.js';
import User from './User.js';

class App {
  async play() {
    this.user = new User();
    this.donHang = new DongHang();

    await this.user.buy();
    await this.donHang.inputWinningNumbers();
  }
}

export default App;
