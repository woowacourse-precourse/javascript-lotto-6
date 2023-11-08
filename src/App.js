import WinnigStatistics from "./WinnigStatistics.js";
import LotteDrawing from "./LotteDrawing.js";
import LottoStore from "./LottoStore.js";
import Buyer from "./Buyer.js";

class App {
  async play() {}
  constructor() {
    this.buyer = new Buyer();
    this.lottostore = new LottoStore();
    this.lottoDrawing = new LotteDrawing();
  }
  async play() {
  }
}

export default App;
