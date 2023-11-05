import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import GenerateLottoNumbers from "./models/GenerateLottoNumbers.js";
import LottoResultCalculator from "./models/LottoResultCalculator.js";
import ProfitCalculator from "./models/ProfitCalculator.js";

class App {
  async play() {
    const purchasePrice = await InputView.getPurchasePrice();
    
    const lottoCount = parseInt(purchasePrice / 1000);
    OutputView.printLottoCount(lottoCount);

    const lottos = GenerateLottoNumbers.getLottos(lottoCount);
    OutputView.printLottos(lottos);

    const winningNumbers = await InputView.getWinningNumbers(); 
    const bonusNumber = await InputView.getBonusNumber(winningNumbers);

    const game = new LottoResultCalculator(lottos);
    const result = game.getResult(winningNumbers, bonusNumber);

    const totalPrize = ProfitCalculator.calculateTotalPrize(result);
    const roi = ProfitCalculator.calculateROI(totalPrize, purchasePrice);
  }
}

export default App;