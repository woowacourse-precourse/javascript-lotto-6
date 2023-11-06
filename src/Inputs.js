import { Console } from "@woowacourse/mission-utils";

class Inputs {
  async inputPrice() {
    const price = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    return price;
  }

  validPrice(price) {
    const numericPrice = Number(price);
    if (!(numericPrice % 1000 === 0) || isNaN(numericPrice) || !numericPrice) {
      throw new Error("[ERROR] 1,000원 단위의 숫자를 입력해주세요.");
    }
    return numericPrice;
  }
}

export default Inputs;
