import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";

class App {
  async play() {
    const purchasePrice = await InputView.getPurchasePrice();
    
    const lottoCount = parseInt(purchasePrice / 1000);
    OutputView.printLottoCount(lottoCount);
  }
}

export default App;