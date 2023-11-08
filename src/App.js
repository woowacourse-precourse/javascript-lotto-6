import InputManager from './InputManager.js';
import Lotto from './Lotto.js';
import { inputBonusNumber, inputWinningNumbers } from "./InputLotto";
import { printResult, printProfit } from "./OutputLotto";


class App {
  async play() {
    const inputManager = new InputManager();
    const amount = await inputManager.enterAmount();
    const lottos = Lotto.generateMultipleLottos(amount);

    Lotto.printLottos(lottos);

    await Lotto.inputWinningNumbers();

    const lotto = await inputWinningNumbers();
    const bonusNumber = await inputBonusNumber(lotto);
    const matchedData = lottoChecker(randomNumbers, lotto, bonusNumber);
    const winningData = printResult(matchedData);
    printProfit(amount, winningData);
  }
}

export default App;
