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

    const WinningNumbers = await InputView.getWinningNumbers();
    const bonusNumber = await getBonusNumber();
  }
}

export default App;