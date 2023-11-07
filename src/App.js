import PurchasePrice from './view/PurchasePrice.js';
import CheckInputError from './domain/CheckInputError.js';

class App {
  async play() {
    const purchasePrice = await PurchasePrice.getLottoPurchasePrice();
    await CheckInputError.checkPriceInputError(purchasePrice);
  }
}

export default App;
