import { Console } from "@woowacourse/mission-utils";

class Input {
  static async inputMoney() {
    try {
      const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
      const money = Number(input);
      if (Number.isNaN(money)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      if (money % 1000 !== 0) {
        throw new Error("[ERROR] 1000원 단위로 입력해 주세요.");
      }
      return money;
    } catch (err) {
      Console.print(err.message);
      return this.inputMoney();
    }
  }
  static async inputWinningNumber() {
    try {
      const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
      const numbers = input.split(",").map((number) => Number(number));
      if (numbers.some((number) => Number.isNaN(number))) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      return numbers;
    } catch (err) {
      Console.print(err.message);
      return this.inputWinningNumbers();
    }
  }
  static async inputBonusNumber() {
    try {
      const bonus = await Console.readLineAsync("보너스 볼을 입력해 주세요.\n");
      const bonusNumber = Number(bonus);
      if (Number.isNaN(bonusNumber)) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      return bonusNumber;
    } catch (err) {
      Console.print(err.message);
      return this.inputBonusNumber();
    }
  }
}

export default Input;
