const MIN_WINNING_NUMBER = 1;
const MAX_WINNING_NUMBER = 45;
const ERROR_MESSAGES = {
  BONUS_NUMBER_IS_NOT_NATURAL: "[ERROR] 보너스 번호는 자연수로 입력해주세요.\n",
  WINNING_NUMBER_IS_NOT_NATURAL: "[ERROR] 당첨 번호는 자연수로 입력해주세요.\n",
  AMOUNT_IS_NOT_NATURAL: "[ERROR] 당첨 번호는 자연수로 입력해주세요.\n",
  MIN_AMOUNT: "[ERROR] 구입금액은 최소 1000원부터 가능합니다.\n",
  AMOUNT_UNIT: "[ERROR] 구입금액은 1,000원 단위만 가능합니다.\n",
  WINNING_NUMBER_COUNT:
    "[ERROR] 당첨 번호는 쉼표(,)로 구분하여 6개 입력해주세요.\n",
  DUPLICATE_NUMBER: "[ERROR] 번호들 중 중복된 값이 존재합니다.\n",
  WINNING_NUMBER_RANGE: `[ERROR] 당첨 번호는 ${MIN_WINNING_NUMBER}부터 ${MAX_WINNING_NUMBER}사이의 값을 입력해주세요.\n`,
  BONUS_NUMBER_RANGE: `[ERROR] 보너스 번호는 ${MIN_WINNING_NUMBER}부터 ${MAX_WINNING_NUMBER}사이의 값을 입력해주세요.\n`,
  BONUS_NUMBER_DUPLICATE:
    "[ERROR] 당첨 번호들 중 보너스 번호와 중복된 값이 존재합니다.\n",
};

class ValidateInput {
  static validateAmount(amount) {
    if (isNaN(amount)) {
      throw new Error(ERROR_MESSAGES.AMOUNT_IS_NOT_NATURAL);
    }

    if (amount < 1000) {
      throw new Error(ERROR_MESSAGES.MIN_AMOUNT);
    }

    if (amount > 1000 && amount % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.AMOUNT_UNIT);
    }
  }

  static validateWinningNumber(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_COUNT);
    }

    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NUMBER);
    }

    if (numbers.some((number) => isNaN(number) || number % 1 !== 0)) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_IS_NOT_NATURAL);
    }

    if (
      numbers.some(
        (number) => number < MIN_WINNING_NUMBER || number > MAX_WINNING_NUMBER,
      )
    ) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_RANGE);
    }
  }

  static validateBonusNumber(number, winningNumber) {
    if (isNaN(number) || number % 1 !== 0) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_IS_NOT_NATURAL);
    }

    if (number < MIN_WINNING_NUMBER || number > MAX_WINNING_NUMBER) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_RANGE);
    }

    if (winningNumber.some((item) => item === number)) {
      throw new Error(ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    }
  }
}

export default ValidateInput;
