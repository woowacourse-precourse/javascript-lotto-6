import { MissionUtils } from "@woowacourse/mission-utils";
const { Console } = MissionUtils;
import InputManager from "./InputManager.js";
import LottoPurchaser from "./LottoPurchaser.js";
import BonusNumber from "./BonusNumber.js";
import WinningNumbers from "./WinningNumbers.js";

class App {
  constructor() {
    this.lottoPurchaser = null;
    this.winningNumbers = null;
    this.bonusNumber = null;
  }
  async play() {
    const price = await InputManager.inputPrice();

    this.lottoPurchaser = new LottoPurchaser(price);
    this.lottoPurchaser.printCount();
    this.lottoPurchaser.printList();

    const winningNumbers = await InputManager.getWinningNumbers();
    this.winningNumbers = new WinningNumbers(winningNumbers);

    const bonusNumber = await InputManager.getBonusNumbers();
    this.bonusNumber = new BonusNumber(bonusNumber, this.winningNumbers.value);
  }
}

export default App;
