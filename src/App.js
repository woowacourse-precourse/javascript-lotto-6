import GameResult from "./GameResult.js";
import GameResultDisplayer from "./GameResultDisplayer.js";
import LottoPurchase from "./LottoPurchase.js";
import LottoPurchaseInput from "./LottoPurchaseInput.js";
import WinningNumberInput from "./WinningNumberInput.js";
import BonusNumberInput from "./BonusNumberInput.js";

class App {
  async play() {
    const lottoPurchase = await LottoPurchaseInput.collectMoney();
    const lottos = lottoPurchase.getLottos();
    LottoPurchase.print(lottos);

    const [winningNumber, bonusNumber] = await App.collectWinningNumbersInput();

    const gameResult = new GameResult(lottos, winningNumber, bonusNumber);

    new GameResultDisplayer(gameResult).show();
  }

  static parseWinningNumber(numbersStr) {
    return numbersStr.split(",").map((strNum) => Number(strNum));
  }

  static async collectWinningNumbersInput() {
    const winningNumberStr = await WinningNumberInput.collect();
    const winningNumber = App.parseWinningNumber(winningNumberStr);
    const bonusNumberInput = new BonusNumberInput(winningNumber);
    const bonusNumberStr = await bonusNumberInput.collect();
    return [winningNumber, Number(bonusNumberStr)];
  }
}

export default App;
