import { Console, Random } from "@woowacourse/mission-utils";
import { INPUT_MSG } from "./constants/InputMessage.js";
import { validatePurchaseFormat } from "./validation/validation.js";

class Lotto {
  // #numbers;

  // constructor(numbers) {
  //   this.#validate(numbers);
  //   this.#numbers = numbers;
  // }

  async play() {
    const playLotto = new PurchaseLotto();
    await playLotto.purchaseTicket();
  }

  // #validate(numbers) {
  //   if (numbers.length !== 6) {
  //     throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
  //   }
  // }

  // TODO: 추가 기능 구현
}

class PurchaseLotto {
  async purchaseTicket() {
    let ticketsAmount = await Console.readLineAsync(INPUT_MSG.amount);
    const validation = validatePurchaseFormat(ticketsAmount);
    return validation;
  }
}

const playLotto = new Lotto();
playLotto.play();

export default Lotto;
