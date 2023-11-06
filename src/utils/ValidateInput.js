const MIN_WINNING_NUMBER = 1;
const MAX_WINNING_NUMBER = 45;

class ValidateInput {
  static validateAmount(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("[ERROR] 구입금액은 자연수만 입력 가능합니다.\n");
    }

    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 구입금액은 1,000원 단위만 가능합니다.\n");
    }
  }

  static validateWinningNumber(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        "[ERROR] 당첨 번호는 쉼표(,)로 구분하여 6개 입력해주세요.\n",
      );
    }

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 번호들 중 중복된 값이 존재합니다.\n");
    }

    if (
      numbers.some(
        (number) =>
          isNaN(number) ||
          number < MIN_WINNING_NUMBER ||
          number > MAX_WINNING_NUMBER,
      )
    ) {
      throw new Error(
        "[ERROR] 당첨 번호는 1부터 45사이의 숫자로 입력해주세요.\n",
      );
    }
  }

  static validateBonusNumber(number, winningNumber) {
    if (
      isNaN(number) ||
      number < MIN_WINNING_NUMBER ||
      number > MAX_WINNING_NUMBER
    ) {
      throw new Error(
        "[ERROR] 보너스 번호는 1부터 45사이의 숫자로 입력해주세요.\n",
      );
    }

    if (winningNumber.some((item) => item === number)) {
      throw new Error(
        "[ERROR] 당첨 번호들 중 보너스 번호와 중복된 값이 존재합니다.\n",
      );
    }
  }
}

export default ValidateInput;
