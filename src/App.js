import { Console } from "@woowacourse/mission-utils";
import UserInput from "./utils/UserInput.js";

class App {
  async play() {
    const lottoAmount = await UserInput.getPurchaseAmount();
    Console.print(lottoAmount);
  }
}

export default App;
