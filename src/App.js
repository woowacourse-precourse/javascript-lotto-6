import InputView from "./views/InputView.js";

class App {
  async play() {
    const lottoPrice = await InputView.getLottoPrice();
  }
}

export default App;