import InputView from "./views/InputView.js";

class App {
  async play() {
    const purchasePrice = await InputView.getPurchasePrice();
    const lottoCount = parseInt(purchasePrice / 1000);
  }
}
export default App;
