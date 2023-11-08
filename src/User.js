import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constants.js";

class User {
  constructor() {}

  async buy() {
    const price = await Console.readLineAsync(MESSAGE.GET_PRICE);
    this.validate(price);
  }

  validate(price) {
    if (price % 1000 != 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
  }
}

export default User;
