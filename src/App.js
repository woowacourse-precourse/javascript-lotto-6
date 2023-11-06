import { MissionUtils } from "@woowacourse/mission-utils";
import User from "./User.js";

class App {
  async play() {
    const user = new User();
    user.play();
  }
}

export default App;
