import { input } from "./input.js";
import BuyPrice from "./BuyPrice.js";

class App {
  price = 0;

  constructor() {
    this.price = 0;
  }

  async play() {
    this.price = await input.getInputBuyPrice();
    const buyPrice = await new BuyPrice(this.price);
  }
}

export default App;
