import LotteryController from "./controller/LotteryController.js";

class App {
  async play() {
    const lotteryController = new LotteryController();
    await lotteryController.setup();
    await lotteryController.drawLottoNumbers();
  }
}

export default App;
