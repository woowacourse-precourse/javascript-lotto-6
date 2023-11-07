import { Console } from "@woowacourse/mission-utils";
import View from "./View.js";
import User from "./User.js";

class App {
  async play() {
    const view = new View();
    const amount = await view.getLottoPurchaseAmount();
    const user = new User(amount);
    const myLottos = user.createLottos();
    user.printLottos();
  }
}

export default App;
