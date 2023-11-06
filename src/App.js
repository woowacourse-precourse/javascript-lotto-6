import { inputMoney } from './buyLotto.js';

class App {
  async play() {
    const userLottoList = await inputMoney();
  }
}

export default App;
