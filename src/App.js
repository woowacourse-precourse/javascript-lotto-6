import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.error = {
      INVALID_PRICE: "[ERROR] 금액은 1,000원 단위로 입력해주세요.",
      INCORRECT_TYPE: "[ERROR] 숫자만 입력해주세요.",
      INVALID_STRING: "[ERROR] 당첨 번호는 쉼표(,)로 구분하여 입력해주세요.",
    };
  }

  displayErrorMessage(message) {
    throw new Error(message);
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

  getBonusNumber() {
    const bonusNumber = MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return bonusNumber;
  }

  getWinningNumber() {
    const winningNumber = MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    return winningNumber;
  }

  validatePrice(price) {
    if (price % 1000 !== 0) {
      this.displayErrorMessage(this.error.INVALID_PRICE);
    }

    if (isNaN(price)) {
      this.displayErrorMessage(this.error.INCORRECT_TYPE);
    }

    return +price;
  }

  getLottoQuantity(money) {
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

  isCommaSeparated(numbers) {
    const parts = numbers.split(",");

    if (parts.length < 2) throw new Error(this.error.INVALID_STRING);

    return parts;
  }

  async setWinnigAndBonusNumber() {
    const winningNumber = await this.getWinningNumber();
    const winningNumberArray = await this.isCommaSeparated(winningNumber);
    const bonusNumber = await this.getBonusNumber();
    const userLotto = new Lotto(winningNumberArray);

    userLotto.setWinningNumber();
    userLotto.setBonusNumber(bonusNumber);
  }

  async play() {
    const money = await this.repeatValid();
    const quantity = await this.getLottoQuantity(money);
    this.setLotto(quantity);

    await this.setWinnigAndBonusNumber();
  }
}

export default App;
