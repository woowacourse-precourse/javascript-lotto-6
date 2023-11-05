import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  constructor() {
    this.error = {
      INVALID_PRICE: "[ERROR] 금액은 1,000원 단위로 입력해주세요.",
    };
  }

  displayErrorMessage(message) {
    throw new Error(message);
  }

  getMoney() {
    const money =
      MissionUtils.Console.readLineAsync("구입 금액을 입력해주세요 \n");

    return money;
  }

  async getLottoQuantity() {
    const money = await this.getMoney();
    const quantity = +money / 1000;

    if (!Number.isInteger(+quantity))
      this.displayErrorMessage(this.error.INVALID_PRICE);

    return quantity;
  }

  setLotto(quantity) {
    MissionUtils.Console.print(`\n ${quantity}개를 구매했습니다.`);

    for (let i = 0; i < quantity; i += 1) {
      const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );

      new Lotto(lottoNumbers).displayNumbers();
    }
  }

  async play() {
    const quantity = await this.getLottoQuantity();
    this.setLotto(quantity);
  }
}

export default App;
