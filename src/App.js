import DongHangLottery from "./DongHangLottery/DongHangLottery";

class App {
  async play() {
    const Lotto = new DongHangLottery();
    await Lotto.play();
  }
}

export default App;
