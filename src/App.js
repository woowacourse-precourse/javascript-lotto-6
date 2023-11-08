import LottoGame from './controller/LottoGame';

class App {
  async play() {
    await new LottoGame().start();
  }
}

export default App;
