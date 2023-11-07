import { MissionUtils } from "@woowacourse/mission-utils";

const Random = MissionUtils.Random;
const Console = MissionUtils.Console;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  static async userMoney() {
    const userMoney = await Console.readLineAsync("구입 금액을 입력해주세요.");
    return userMoney;
  }

  static async validateUserMoney() {
    while (true) {
      try {
        const money = await Lotto.userMoney();
        Validation.userMoney(money);
        return money;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}


export default Lotto;
