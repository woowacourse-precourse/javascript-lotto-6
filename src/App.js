import GameResult from "./GameResult.js";
import GameResultDisplayer from "./GameResultDisplayer.js";
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

    const gameResult = new GameResult(
      lottos,
      App.parseWinningNumber(winningNumberStr),
      Number(bonusNumberStr)
    );

    const gameResultDisplayer = new GameResultDisplayer(gameResult);
    gameResultDisplayer.show();
  }

  static parseWinningNumber(numbersStr) {
    return numbersStr.split(",").map((strNum) => Number(strNum));
  }
}

export default App;
