import GameResult from "./GameResult.js";
import LottoPurchase from "./LottoPurchase.js";
import LottoPurchaseInput from "./LottoPurchaseInput.js";
import WinningNumberInput from "./WinningNumberInput.js";

class App {
  async play() {
    const lottoPurchase = await LottoPurchaseInput.collectMoney();
    const lottos = lottoPurchase.generateLottos();
    LottoPurchase.print(lottos);

    const [winningNumberStr, bonusNumberStr] =
      await WinningNumberInput.collect();
    const winningNumber = App.parseWinningNumber(winningNumberStr);
    const bonusNumber = Number(bonusNumberStr);

    const gameResult = new GameResult(lottos, winningNumber, bonusNumber);
    gameResult.show();
  }

  static parseWinningNumber(numbersStr) {
    return numbersStr.split(",").map((strNum) => Number(strNum));
  }
}

export default App;
