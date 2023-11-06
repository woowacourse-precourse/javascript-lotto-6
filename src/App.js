import PurchasePrice from './view/PurchasePrice.js';

class App {
  async play() {
    const purchasePrice = await PurchasePrice.getLottoPurchasePrice();
  }
}

export default App;
