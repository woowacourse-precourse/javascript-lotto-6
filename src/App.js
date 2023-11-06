import LottoGame from "./Controllers/LottoGame.js";

class App {
  async play() {
    await LottoGame.start();
  }
}

export default App;
