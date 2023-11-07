import { Console } from "@woowacourse/mission-utils";
import View from "./View.js";

class App {
  async play() {
    const view = new View();
    const amount = await view.getLottoPurchaseAmount();
    Console.print(`${amount} 입력 받았음 ! !`);
  }
}

export default App;
