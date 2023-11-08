import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Bonus from "./Bonus.js";
import Money from "./money.js";

class App {
  userMoney;
  userLotto;
  userBonus;

  setRandumNum(value) {
    let intValue = value / 1000;
    let objArr = new Array(intValue);
    for(let i = 0; i < intValue; i++) {
      let arr = MissionUtils.Random.pickUniqueNumbersInRange(1,45,6);
      objArr.push(arr);
    }
    return this.printRandumNum(objArr,intValue,value);
  }

  printRandumNum(arr,value,returnvalue) {
    MissionUtils.Consol.print(
      `${value}개를 구매했습니다.
      ${arr}`
    );
    return returnvalue;
  }

  constructor() {
    let money = new Money();
    this.userMoney = money.getMoney(this.setRandumNum);
  }

  async play() {
    let lotto = new Lotto();
    let bonus = new Bonus();

    this.userLotto = lotto.getNumbers();

  }
}

export default App;
