import Computer from "./feat/Computer.js";
import User from "./feat/User.js";

class App {
  async play() {
    const computer = new Computer();
    const user = new User();
    const lottoAmonut = await user.purchaseAmount();
    const lottoList = computer.issuanceLotto(lottoAmonut);
    const lottoNumber = await computer.inputLottoNumber();
    const bonusNumber = await computer.inutBonusNumber(lottoList);
    const winningDetail = computer.winningDetails(
      lottoNumber,
      bonusNumber,
      lottoList,
    );
  }
}
const app = new App();
app.play();
export default App;
