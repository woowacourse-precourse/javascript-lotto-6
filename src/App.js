import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./const/message";


class App {
  constructor() {
    this.price = 0;
    this.winning = [];
    this.bonus = 0;
  }
  async play() {

  }

  async getLottoPrice() {
    const priceInput = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    this.price = this.checkPrice(priceInput)
  }
  checkPrice(priceInput) {
    const checkPrice = parseInt(priceInput);
    const remainder = checkPrice % 1000;
    if(remainder !== 0 ){throw new Error(MESSAGE.THOUSAND)};
    return checkPrice;
  }
}

export default App;
