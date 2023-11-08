import { MissionUtils } from "@woowacourse/mission-utils";
import App from "./App.js";
import User from "./User.js";
import Lotto from "./Lotto.js";
import { FAIL, SUCCESS } from "./Constants.js";

export async function literationNumbers() {
  const app = new App();
  const lotto = new Lotto();
  let test = FAIL;
  let numbers = 0;

  while (test === FAIL) {
    numbers = await app.inputNumber();
    try {
      lotto.validate(numbers);
      test = SUCCESS;
    } catch (error) {
      MissionUtils.Console.print("[ERROR]");
    }
  }

  return numbers;
}

export async function literationBonus(NUMBERS) {
  const app = new App();
  let test = FAIL;
  let bonus = 0;

  while (test === FAIL) {
    bonus = await app.inputBonus();
    try {
      await app.validateBonus(bonus, NUMBERS);
      test = SUCCESS;
    } catch (error) {
      MissionUtils.Console.print("[ERROR]");
    }
  }

  return bonus;
}

export async function literationMoney() {
  const user = new User();
  let test = FAIL;
  let money = 0;

  while (test === FAIL) {
    money = await user.inputMoney();
    try {
      user.validate(money);
      test = SUCCESS;
    } catch (error) {
      MissionUtils.Console.print("[ERROR]");
    }
  }

  return money;
}
