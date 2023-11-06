import Lotto from "./Lotto";

class App {
  async play() {
    const lotto = new Lotto();
    await lotto.start();
  }
}

export default App;