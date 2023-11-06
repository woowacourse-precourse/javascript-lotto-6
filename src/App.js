import Lotto from "./Lotto.js";
import LottoCalculator from "./LottoCalculator.js";
import UserInput from "./UserInput.js";
import LottoView from "./LottoView.js";

class App {
  async play() {
    const lottoAmount = await UserInput.inputAmount();

    const lottoNumber = Lotto.generateNumbers();
    const numberOfSets = lottoAmount / 1000;
    const lottoNumbers = Lotto.generateNumbers(numberOfSets);

    const winningNumbers = await UserInput.inputNumber();
    const bonusNumber = await UserInput.inputBonus(winningNumbers);

    const calculator = new LottoCalculator(winningNumbers, numberOfSets);
    const statistics = calculator.calculateStatistics(lottoNumbers);

    const view = new LottoView();
    const purchaseData = view.createPurchaseData(numberOfSets, lottoNumbers);
    const lottoResult = view.createLottoResult(statistics);
    const result = `${purchaseData}\n${lottoResult}`;

    view.displayResult(result);
  }
}

export default App;
