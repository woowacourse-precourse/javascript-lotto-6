import InputView from "./views/InputView.js";
import OutputView from "./views/OutputView.js";
import GenerateLottoNumbers from "./models/GenerateLottoNumbers.js";
import LottoResultCalculator from "./models/LottoResultCalculator.js";
import ProfitCalculator from "./models/ProfitCalculator.js";

class App {
  async play() {
    OutputView.printInsertMoneyMessage();
    const purchasePrice = await InputView.getPurchasePrice();
    
    const lottoCount = parseInt(purchasePrice / 1000);
    OutputView.printLottoCount(lottoCount);

    const lottos = GenerateLottoNumbers.getLottos(lottoCount);
    OutputView.printLottos(lottos);

    OutputView.printInsertWinningNumbersMessage();
    const winningNumbers = await InputView.getWinningNumbers(); 

    OutputView.printInsertBonusNumberMessage();
    const bonusNumber = await InputView.getBonusNumber(winningNumbers);

    const game = new LottoResultCalculator(lottos);
    const result = game.getResult(winningNumbers, bonusNumber);

    const totalPrize = ProfitCalculator.calculateTotalPrize(result);
    const roi = ProfitCalculator.calculateROI(totalPrize, purchasePrice);

    OutputView.printResult(roi, result);
}

}

export default App;