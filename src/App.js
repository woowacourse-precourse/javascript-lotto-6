import { Console } from "@woowacourse/mission-utils";
import MESSAGES from "./constants/index.js";

class App {
  async play() {
    Console.print(MESSAGES.INPUT_MONEY)
  }
}

export default App;
