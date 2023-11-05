import { Console } from "@woowacourse/mission-utils";
import { checkPrice } from "./checkInputValidate.js";

class View {
  constructor() {}

  async getPrice() {
    const INPUT = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    checkPrice(INPUT);
    return +INPUT;
  }
}

export default View;
