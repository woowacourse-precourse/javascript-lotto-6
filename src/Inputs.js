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

  async inputWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(
      "당첨 번호를 입력해 주세요.\n"
    );
    return winningNumbers;
  }

  validWinningNumbers(numbers) {
    const winningNumbers = numbers.split(",").map(Number);
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const setNumbers = new Set(winningNumbers);
    if (setNumbers.size !== 6) {
      throw new Error("[ERROR] 중복된 숫자를 가질 수 없습니다.");
    }

    if (winningNumbers.some((num) => typeof num !== "number" || isNaN(num))) {
      throw new Error(
        "[ERROR] 로또 번호에 숫자가 아닌 문자나 공백이 포함되어 있습니다."
      );
    }

    if (
      winningNumbers.some(
        (num) => !Number.isInteger(num) || num <= 0 || num > 45
      )
    ) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.");
    }
    return winningNumbers;
  }

  async inputBonusNumber() {
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요.\n"
    );
    return bonusNumber;
  }
}

export default Inputs;
