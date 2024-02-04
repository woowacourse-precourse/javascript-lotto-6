import DongHangLottery from "./DongHangLottery/DongHangLottery.js";

class App {
  async play() {
    const Lotto = new DongHangLottery();
    await Lotto.play()
  }
}

export default App;
