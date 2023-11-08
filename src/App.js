import LottoList from './LottoList.js';
import User from './User.js';

class App {
  constructor() {
    this.initComponent();
  }

  initComponent() {
    this.user = new User();
  }

  async play() {
    const { user } = this;

    await user.inputMoney();

    this.lottoList = new LottoList(user.lottoCount);
  }
}

export default App;
