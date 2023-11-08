import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Money from "./money.js";

class App {
  userMoney;
  userLotto;
  userBonus;

  

  

  constructor() {}

  async play() {
    
    let money = new Money();
    this.userMoney = money.inputMoney(this.setRandumNum);

    let lotto = new Lotto();

    //this.userLotto = lotto.getNumbers();

  }
}

export default App;
