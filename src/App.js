import { input } from "./input.js";
import BuyPrice from "./BuyPrice.js";
import Lotto from "./Lotto.js";

class App {
  buyPrice = 0;
  lotto = [];

  constructor() {
    this.buyPrice = 0;
    this.lotto = [];
  }

  async play() {
    const price = await input.getInputBuyPrice();
    this.buyPrice = new BuyPrice(price);

    const lottoArray = await input.getInputLotto();
    this.lotto = new Lotto(lottoArray);
  }
}

export default App;
