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
    throw new Error(`\n${message}`);
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

  getMoney() {
    const money =
      MissionUtils.Console.readLineAsync("구입 금액을 입력해주세요. \n");
    return money;
  }

  getLottoQuantity(money) {
    const quantity = money / 1000;
    return quantity;
  }

  async checkPrice() {
    let price;
    while (true) {
      const validatedPrice = await this.tryCatchPrice(price);
      if (validatedPrice) return validatedPrice;
    }
  }

  async tryCatchPrice(price) {
    try {
      price = await this.getMoney();
      const validatedPrice = this.priceConditionalSentence(price);
      return validatedPrice;
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }

  priceConditionalSentence(price) {
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

  async checkCommaSeparated(numbers) {
    let winningNumber;

    while (true) {
      const result = await this.tryCatchNumber(winningNumber, numbers);
      if (result) return result.split(",");
    }
  }

  checkCommaLoop(string) {
    for (let s of string) {
      if (isNaN(s) && s !== ",") {
        this.displayErrorMessage(this.error.INVALID_STRING);
        return null;
      }
    }

    return string;
  }

  async tryCatchNumber(winningNumber, numbers) {
    try {
      const result = this.checkCommaLoop(numbers);
      return result;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      winningNumber = await this.getWinningNumber();
    }
  }

  setLotto(quantity) {
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);

    for (let i = 0; i < quantity; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

      new Lotto(numbers).displayNumbers();
    }
  }

  async setWinnigAndBonusNumber() {
    const winningNumber = await this.getWinningNumber();
    const winningNumberArray = await this.checkCommaSeparated(winningNumber);
    const userLotto = new Lotto(winningNumberArray);
    userLotto.setWinningNumber();

    const bonusNumber = await this.getBonusNumber();
    userLotto.setBonusNumber(bonusNumber);
  }

  async play() {
    const money = await this.checkPrice();
    const quantity = this.getLottoQuantity(money);
    this.setLotto(quantity);

    this.setWinnigAndBonusNumber();
  }
}

export default App;
