import UserController from "./controller/UserController.js";
import MatchController from "./controller/MatchController.js";
import Outputview from "./views/Outputview.js";

class App {
  #usercontroller;
  #matchcontroller;
  #outputview;

  constructor() {
    this.#usercontroller = new UserController();
    this.#outputview = new Outputview();
  }

  async play() {
    const {count, lottolist, winningnumbers, bonusNumber} = await this.#usercontroller.getLotto();
    this.printLottoNumbers(count, lottolist);
    this.#matchcontroller = new MatchController(count, lottolist, winningnumbers, bonusNumber);
    this.#matchcontroller.getMatchResult(count, lottolist, winningnumbers, bonusNumber);
  }

  printLottoNumbers(count, lottolist) {
    this.#outputview.printLottoNumbers(count, lottolist);
  }
}

export default App;