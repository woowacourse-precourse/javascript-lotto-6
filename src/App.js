import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.error = {
      INVALID_PRICE: "[ERROR] 금액은 1,000원 단위로 입력해주세요.",
      INCORRECT_TYPE: "[ERROR] 숫자만 입력해주세요.",
    };
  }

  displayErrorMessage(message) {
    MissionUtils.Console.print(`\n${message}`);
  }

  getMoney() {
    const money =
      MissionUtils.Console.readLineAsync("구입 금액을 입력해주세요. \n");

    return money;
  }

  async repeatValid() {
    let price;

    while (true) {
      price = await this.getMoney();
      const validatedPrice = this.validatePrice(price);

      if (validatedPrice) {
        return validatedPrice;
      }
    }
  }

  validatePrice(price) {
    if (price % 1000 !== 0) {
      this.displayErrorMessage(this.error.INVALID_PRICE);
      return null;
    }

    if (isNaN(price)) {
      this.displayErrorMessage(this.error.INCORRECT_TYPE);
      return null;
    }

    return +price;
  }

  async getLottoQuantity(money) {
    const quantity = money / 1000;

    return quantity;
  }

  setLotto(quantity) {
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);

    for (let i = 0; i < quantity; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      new Lotto(numbers).displayNumbers();
    }
  }

  setBonusNumber() {
    const winningNumber = this.getWinningNumber();

    new Lotto(winningNumber).setWinnigNumber();
  }

  async play() {
    const money = await this.repeatValid();
    const quantity = await this.getLottoQuantity(money);
    this.setLotto(quantity);
  }
}

export default App;
