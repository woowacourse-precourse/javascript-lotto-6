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

  async getBonusNumber() {
    const bonusNumber = await MissionUtils.Console.readLineAsync(
      "\n보너스 번호를 입력해 주세요.\n"
    );
    return bonusNumber;
  }

  async getWinningNumber() {
    const winningNumber = await MissionUtils.Console.readLineAsync(
      "\n당첨 번호를 입력해 주세요.\n"
    );
    return winningNumber;
  }

  async getMoney() {
    const money = await MissionUtils.Console.readLineAsync(
      "구입 금액을 입력해주세요. \n"
    );
    return money;
  }

  getLottoQuantity(money) {
    const quantity = money / 1000;
    return +quantity;
  }

  async checkPrice() {
    try {
      const price = await this.getMoney();
      const validatedPrice = this.priceConditionalSentence(price);
      return +validatedPrice;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.checkPrice();
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

  validStringContionalSentence(s) {
    if (isNaN(s) && s !== ",") {
      this.displayErrorMessage(this.error.INVALID_STRING);
      return null;
    }
    return s;
  }

  async checkCommaSeparated(string) {
    for (let s of string) {
      this.validStringContionalSentence(s);
    }
    return string.split(",");
  }

  async setLotto(quantity) {
    MissionUtils.Console.print(`\n${quantity}개를 구매했습니다.`);
    let purchasedLottos = [];

    for (let i = 0; i < quantity; i += 1) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      purchasedLottos.push(numbers);
      const lottoString = new Lotto(numbers).displayNumbers();
      MissionUtils.Console.print(`${lottoString}`);
    }

    return purchasedLottos;
  }

  async setWinnigArray() {
    try {
      const winningNumber = await this.getWinningNumber();
      return await this.checkCommaSeparated(winningNumber);
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.setWinnigArray();
    }
  }

  async updateBonusNumber(userLotto) {
    try {
      const bonusNumber = await this.getBonusNumber();
      userLotto.setBonusNumber(bonusNumber);
    } catch (error) {
      MissionUtils.Console.print(`\n${error.message}`);
      await this.updateBonusNumber(userLotto);
    }
  }

  async updateWinningNumber() {
    try {
      const winningNumberArray = await this.setWinnigArray();
      const userLotto = new Lotto(winningNumberArray);
      userLotto.setWinningNumber(winningNumberArray);
      await this.updateBonusNumber(userLotto);
      return userLotto;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      await this.updateWinningNumber();
    }
  }

  async getMatchingStatisticsAndRate(
    quantity,
    purchasedLottos,
    userLotto,
    money
  ) {
    for (let i = 0; i < quantity; i += 1) {
      userLotto.updateMatchingCount(purchasedLottos[i]);
    }
    MissionUtils.Console.print("\n당첨 통계\n---");
    const result = await userLotto.calculateMatchingStatistics();
    for (let score of result) MissionUtils.Console.print(score);
    await userLotto.calculateMatchingRate(money);
  }

  async play() {
    const money = await this.checkPrice();
    const quantity = this.getLottoQuantity(money);
    const purchasedLottos = await this.setLotto(quantity);
    const userLotto = await this.updateWinningNumber();
    await this.getMatchingStatisticsAndRate(
      quantity,
      purchasedLottos,
      userLotto,
      money
    );
  }
}

export default App;
