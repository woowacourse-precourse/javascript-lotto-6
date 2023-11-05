import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import GenerateLottoNumbers from "./models/GenerateLottoNumbers.js";

class App {
  async play() {
    const purchasePrice = await InputView.getPurchasePrice();
    
    const lottoCount = parseInt(purchasePrice / 1000);
    OutputView.printLottoCount(lottoCount);

    const lottos = GenerateLottoNumbers.getLottos(lottoCount);
    OutputView.printLottos(lottos);

    const targetNumbers = await InputView.getTargetNumbers();
  }
}

export default App;