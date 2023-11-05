import Lotto from "./Lotto.js";
import LottoCalculator from "./LottoResults.js";
import UserInput from "./UserInput.js";
import LottoView from "./LottoView.js";

class App {
  async play() {
    const lottoAmount = await UserInput.inputAmount();

    const lottoNumber = Lotto.generateNumbers();
    const numberOfSets = lottoAmount / 1000;
    const lottoNumbers = Lotto.generateNumbers(numberOfSets);

    const view = new LottoView();
    view.displayPurchaseInfo(numberOfSets, lottoNumbers);

    const winningNumbers = await UserInput.inputNumber();
    const bonusNumber = await UserInput.inputBonus(winningNumbers);

    const calculator = new LottoCalculator(winningNumbers, numberOfSets);
    const statistics = calculator.calculateStatistics(lottoNumbers);
    view.displayStatistics(statistics);
  }
}

export default App;
