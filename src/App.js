import Lotto from "./Lotto.js";

class App {
  async play() {
    const lotto = new Lotto();
    await lotto.start();
  }
}

export default App;