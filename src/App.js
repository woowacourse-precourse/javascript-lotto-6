import Lotto from "./Lotto.js";
import UserInput from "./UserInput.js";

class App {
  async play() {
    const lottoAmount = await UserInput.inputAmount();
    const bonusNumber = await UserInput.inputBonus();

    const lottoNumber = Lotto.generateNumbers();
    const numberOfSets = lottoAmount / 1000;
    const lottoNumbers = Lotto.generateNumbers(numberOfSets);

    lottoNumbers.forEach((numbers) => console.log(`[${numbers}]`));
  }
}

export default App;
