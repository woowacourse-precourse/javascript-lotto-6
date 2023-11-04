import PurchaseLottos from "./PurchaseLottos.js";
class App {
  async play() {
    const purchaseLottos = new PurchaseLottos();
    await purchaseLottos.getLottoPurchaseAmount();
  }
}

export default App;
