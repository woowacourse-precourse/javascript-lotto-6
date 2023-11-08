import GetLotto from './component/GetLotto.js';

class App {
  async play() {
    const start = new GetLotto();
    await start.lotto();
  }
}

export default App;
