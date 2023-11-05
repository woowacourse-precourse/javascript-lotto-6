import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import Computer from "./Computer.js";

class App {
  async play() {
    const purchaseAmount = await User.inputLottoPurchaseAmout();
    await User.inputWinningNumber();
    await User.inputBonusNumber();

    const purchaseNumber = Computer.purchaseList(purchaseAmount);
    Console.print(`${purchaseNumber}개를 구매했습니다.`);
    Computer.randomNumberList(purchaseNumber);
  }
}
const app = new App();
app.play();
// export default App;`
