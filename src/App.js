import LottoInterface from "./LottoInterface/index.js";

class App {
  async play() {
    const lottoInterface = new LottoInterface();

    const answer1 = await lottoInterface.readAmountToPurchase();
    const answer2 = await lottoInterface.readWinningNumbers();
    const answer3 = await lottoInterface.readBonusNumber();
  }
}

export default App;
