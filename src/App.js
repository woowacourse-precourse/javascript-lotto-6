import InputView from "./views/InputView.js";

class App {
  async play() {
    const purchasePrice = await InputView.getPurchasePrice();
  }
}
export default App;
