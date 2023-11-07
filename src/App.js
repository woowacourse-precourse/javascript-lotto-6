import DongHang from './DongHang.js';
import User from './User.js';

class App {
  async play() {
    this.user = new User();

    this.money = await this.user.buy();
    this.lottos = DongHang.issue(this.money);
  }
}

export default App;
