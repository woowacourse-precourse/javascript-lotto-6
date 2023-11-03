import PurchasePriceInput from "./ui/purchasePriceInput.js";

class RunApp {
  async start() {
    const purchasePriceInput = new PurchasePriceInput();
    await purchasePriceInput.print();
  }
}

export default RunApp;
