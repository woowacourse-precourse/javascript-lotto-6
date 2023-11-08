import UserController from "./controller/UserController.js";
import MatchController from "./controller/MatchController.js";

class App {
  #usercontroller;
  #matchcontroller;

  constructor() {
    this.#usercontroller = new UserController();
  }

  async play() {
    const {count, lottolist, winningnumbers, bonusNumber} = await this.#usercontroller.getLotto();
    this.#matchcontroller = new MatchController(count, lottolist, winningnumbers, bonusNumber);
    this.#matchcontroller.getMatchResult();
  }
}

export default App;