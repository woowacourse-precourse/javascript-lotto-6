import lottoGame from "./controller/LottoGame.js";

class App {
  async play() {
    await lottoGame.start();
  }
}

export default App;
