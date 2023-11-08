import { MissionUtils } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;
  purchaseAmount;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  async buyTicket() {
    while (true) {
      try {
        this.purchaseAmount = await MissionUtils.Console.readLineAsync(
          "구입 금액을 입력해 주세요."
        );
        const amount = parseInt(this.purchaseAmount);

        if (amount % 1000 !== 0) {
          throw new Error("[ERROR] 구입 금액은 1000원 단위로 입력해야 합니다.");
        }

        this.purchaseAmount = amount;
        break;
      } catch (error) {
        console.error(error.message);
        throw error;
      }
    }
  }
}
export default Lotto;
