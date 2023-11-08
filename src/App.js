import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";

class App {
  constructor() {
    this.user = new User();
  }

  async play() {
    try {
      await this.user.buy();
    } catch (error) {
      Console.print(error);
    }
  }
}

export default App;
