import { MissionUtils } from "@woowacourse/mission-utils";

const Random = MissionUtils.Random;
const Console = MissionUtils.Console;

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.COUNT = 0;
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

  static createNumber() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return numbers;
  }

  static sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  printNumber() {
    const sortNumbers = Lotto.sortNumbers(this.#numbers);
    return Console.print(`[${sortNumbers.join(", ")}]`);
  }

  compareNumber(winningNumbers) {
    this.#numbers.forEach((number) =>
      this.qulificationWinNumber(winningNumbers, number)
    );
  }

  qulificationWinNumber(winningNumber, number) {
    if (winningNumber.includes(number)) {
      this.COUNT++;
    }
  }
}


export default Lotto;
