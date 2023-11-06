import {
  readAmountToPurchase,
  readBonusNumber,
  readWinningNumbers,
} from "./lottoInterface/input.js";

class App {
  async play() {
    const answer1 = await readAmountToPurchase();

    const answer2 = await readWinningNumbers();

    const answer3 = await readBonusNumber();
  }
}

export default App;
