import Lotto from "./Lotto.js";
import LottoCalculator from "./LottoResults.js";
import UserInput from "./UserInput.js";
import LottoView from "./LottoView.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const lottoAmount = await UserInput.inputAmount();

    const lottoNumber = Lotto.generateNumbers();
    const numberOfSets = lottoAmount / 1000;
    const lottoNumbers = Lotto.generateNumbers(numberOfSets);

    lottoNumbers.forEach((numbers) => {
      Console.print(`[${numbers}]`);
    });

    const winningNumbers = await UserInput.inputNumber();
    const bonusNumber = await UserInput.inputBonus();

    const calculator = new LottoCalculator(winningNumbers, numberOfSets);
    const view = new LottoView(); // 뷰 인스턴스 생성
    const statistics = calculator.calculateStatistics(lottoNumbers);
    view.displayStatistics(statistics);
  }
}

export default App;
