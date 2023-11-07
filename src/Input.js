import { LOTTO_CONSTANT, printOutput, readInput } from "./utils";

const MONEY_MESSAGES = Object.freeze({
  QUESTION: "\n구입금액을 입력해 주세요.\n",
  ERROR: {
    MUST_NUMBER: "[ERROR] 숫자만 입력해주세요.",
    NO_SPACE: "[ERROR] 공백을 입력하셨습니다.",
    MUST_DIVIED: `[ERROR] ${LOTTO_CONSTANT.LOTTO_PRICE}원 단위로 입력해주세요.`,
  },
});

const NUMBERS_MESSAGES = Object.freeze({
  QUESTION: "\n당첨 번호를 입력해 주세요.\n",
  ERROR: {
    MUST_SAME_LENGTH: `[ERROR] 숫자는 ${LOTTO_CONSTANT.LOTTO_LENGTH}개를 입력해주세요.`,
    NO_DUPLICATE_NUMBER: "[ERROR] 중복된 숫자를 입력하셨습니다.",
  },
});

const NUMBER_MESSAGES = Object.freeze({
  ERROR: {
    MUST_NUMBER: "[ERROR] 숫자만 입력해주세요.",
    NO_SPACE: "[ERROR] 공백을 입력하셨습니다.",
    MUST_IN_RANGE: `[ERROR] 숫자의 범위는 ${LOTTO_CONSTANT.MIN_LOTTO_NUMBER}~${LOTTO_CONSTANT.MAX_LOTTO_NUMBER} 이어야 합니다.`,
  },
});

const BONUS_MESSAGES = Object.freeze({
  QUESTION: "\n보너스 번호를 입력해 주세요.\n",
  ERROR: {
    NO_DUPLICATE_NUMBER: "[ERROR] 중복된 숫자를 입력하셨습니다.",
  },
});

class Input {
  async handleMoney() {
    let money;
    try {
      money = await this.readMoneyBuyingLotto();
      this.money = money;
    } catch (error) {
      printOutput(error.message);
      await this.handleMoney();
    }
  }

  async readMoneyBuyingLotto() {
    const INPUT = await readInput(MONEY_MESSAGES.QUESTION);
    this.#validLottoMoney(INPUT);
    return Number(INPUT);
  }

  #validLottoMoney(input) {
    const INPUT_NUMBER = Number(input);
    if (Number.isNaN(INPUT_NUMBER)) {
      throw new Error(MONEY_MESSAGES.ERROR.MUST_NUMBER);
    }
    if (!input.trim()) {
      throw new Error(MONEY_MESSAGES.ERROR.NO_SPACE);
    }
    if (INPUT_NUMBER % LOTTO_CONSTANT.LOTTO_PRICE !== 0) {
      throw new Error(MONEY_MESSAGES.ERROR.MUST_DIVIED);
    }
  }

  async handleLottoNumbers() {
    let lottoNumbers;
    try {
      lottoNumbers = await this.readLottoNumbers();
      this.lottoNumbers = lottoNumbers;
    } catch (error) {
      printOutput(error.message);
      await this.handleLottoNumbers();
    }
  }

  async readLottoNumbers() {
    const INPUT = await readInput(NUMBERS_MESSAGES.QUESTION);
    const NUMBERS = INPUT.split(",").map(Number);
    this.#validLottoNumbers(NUMBERS);
    return NUMBERS;
  }

  #validLottoNumbers(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.LOTTO_LENGTH) {
      throw new Error(NUMBERS_MESSAGES.ERROR.MUST_SAME_LENGTH);
    }
    if (new Set(numbers).size !== numbers.length) {
      throw new Error(NUMBERS_MESSAGES.ERROR.NO_DUPLICATE_NUMBER);
    }
    numbers.forEach((number) => {
      this.#validNumber(number);
    });
  }

  #validNumber(number) {
    if (Number.isNaN(number)) {
      throw new Error(NUMBER_MESSAGES.ERROR.MUST_NUMBER);
    }
    if (!number) {
      throw new Error(NUMBER_MESSAGES.ERROR.NO_SPACE);
    }
    const IS_NUMBER_IN_RANGE =
      number >= LOTTO_CONSTANT.MIN_LOTTO_NUMBER &&
      number <= LOTTO_CONSTANT.MAX_LOTTO_NUMBER;
    if (!IS_NUMBER_IN_RANGE) {
      throw new Error(NUMBER_MESSAGES.ERROR.MUST_IN_RANGE);
    }
  }

  async handleBonusNumber() {
    let bonusNumber;
    try {
      bonusNumber = await this.readBonusNumber();
      this.bonusNumber = bonusNumber;
    } catch (error) {
      printOutput(error.message);
      await this.handleBonusNumber();
    }
  }

  async readBonusNumber() {
    const INPUT = await readInput(BONUS_MESSAGES.QUESTION);
    this.#validBonusNumber(INPUT);
    return Number(INPUT);
  }

  #validBonusNumber(input) {
    const INPUT_NUMBER = Number(input);

    this.#validNumber(INPUT_NUMBER);
    if (this.lottoNumbers.includes(INPUT_NUMBER)) {
      throw new Error(BONUS_MESSAGES.ERROR.NO_DUPLICATE_NUMBER);
    }
  }
}

export default Input;
