import { calcEarningRate, publishGameNums } from "./Game";
import {
  inputAmount,
  inputBonusNum,
  inputWinningNums,
  outputEarningRate,
  outputGameNums,
  outputResult,
} from "./InOut";
import Lotto from "./Lotto";

class App {
  async play() {
    const amount = await inputAmount();
    const games = publishGameNums(amount / 1000);
    outputGameNums(games);
    const [lotto, winningNums] = await this.inputWinning();
    const bonusNum = await inputBonusNum();
    const result = lotto.calcResult(games, bonusNum);
    const earnRate = calcEarningRate(
      amount,
      result.reduce((acc, cur) => (acc += cur[1]), 0)
    );
    outputResult(result);
    outputEarningRate(earnRate);
  }

  async inputWinning() {
    let lotto = null;
    let winningNums = null;
    while (true) {
      try {
        winningNums = await inputWinningNums();
        lotto = new Lotto(winningNums);
        break;
      } catch (e) {
        console.log(e.message);
        continue;
      }
    }
    return [lotto, winningNums];
  }
}

export default App;
