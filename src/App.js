import Lotto from './Lotto.js';
import GetLotto from './component/GetLotto.js';

class App {
  async play() {
    const start = new GetLotto();
    start.lotto();
  }
}

export default App;
