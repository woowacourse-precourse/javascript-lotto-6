import { Console } from "@woowacourse/mission-utils";

class Input {
  async price() {
    try {
      const inputPrice = await Console.readLineAsync('구입 금액을 입력해 주세요.\n');
      return inputPrice;
    } catch (error) {
      Console.print(error.message);
    }
  }

  async winningNumbers() {
    try {
      const inputNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
      return inputNumbers;
    } catch (error) {
      Console.print(error.message);
    }
  }

  async bonusNumber() {
    try {
      const inputNumbers = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
      return inputNumbers;
    } catch (error) {
      Console.print(error.message);
    }
  }
}


