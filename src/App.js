import { Console } from "@woowacourse/mission-utils";
import LottoController from "./controller/LottoController";

class App {
  async play() {
    const controller = new LottoController();

    try {
      await controller.play();
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
