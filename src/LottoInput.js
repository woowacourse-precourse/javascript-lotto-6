import { Console } from "@woowacourse/mission-utils";
import { MESSAGE_INPUT } from "./Constant";

class LottoInput {
  async priceInput() {
    const price = await Console.readLineAsync(MESSAGE_INPUT.PRICE);
    this.checkValidPrice(Number(price));
    return Number(price);
  }

  checkValidPrice(price) {
    if (price % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
  }
}

export default LottoInput;
