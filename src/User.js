import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "./constants.js";

class User {
  constructor() {}

  async buy() {
    const price = await Console.readLineAsync(MESSAGE.GET_PRICE);
    this.validatePrice(price);

    return price / 1000;
  }

  validatePrice(price) {
    if (price % 1000 != 0) {
      throw new Error("[ERROR] 1,000원 단위로 입력해주세요.");
    }
  }

  async makeWinningNumbers() {
    const numbers = await Console.readLineAsync(MESSAGE.GET_WINNING_NUMBER);
    this.validateNumbers(numbers);

    return numbers;
  }

  validateNumbers(numbers) {
    const numbersArray = [...numbers];
    const REGEXP = /^[1-45]$/;
    numbersArray.forEach((number) => {
      if (!REGEXP.test(number)) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    });

    if (numbersArray.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }
}

export default User;
