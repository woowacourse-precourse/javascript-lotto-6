import Lotto from "./Lotto.js";
import LottoCalculator from "./LottoResults.js";
import UserInput from "./UserInput.js";

class App {
  async play() {
    const lottoAmount = await UserInput.inputAmount();

    const lottoNumber = Lotto.generateNumbers();
    const numberOfSets = lottoAmount / 1000;
    const lottoNumbers = Lotto.generateNumbers(numberOfSets);

    lottoNumbers.forEach((numbers) => {
      console.log(`[${numbers}]`);
    });

    const winningNumbers = await UserInput.inputNumber();
    const bonusNumber = await UserInput.inputBonus();
  }
}

export default App;
