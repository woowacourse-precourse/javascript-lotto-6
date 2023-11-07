import {
  BONUS_SCORE,
  LOTTO_NUMBER_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  PRIZE_WINNING_FIVE,
  PRIZE_WINNING_FIVE_BONUS,
  PRIZE_WINNING_FOUR,
  PRIZE_WINNING_SIX,
  PRIZE_WINNING_THREE,
  WINNING_FIVE,
  WINNING_FIVE_BONUS,
  WINNING_FOUR,
  WINNING_FOUR_BOUNS,
  WINNING_SCORE,
  WINNING_SIX,
  WINNING_SIX_BONUS,
  WINNING_THREE,
  WINNING_THREE_BONUS,
} from "./constants/standard.js";
import {
  ERROR_NUMBER_COUNT,
  ERROR_NUMBER_DUPLICATION,
  ERROR_NUMBER_RANGE,
  ERROR_NUMBER_TYPE,
} from "./constants/validate.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateNumberCount(numbers);
    this.#validateDuplication(numbers);
    this.#validateNumberRange(numbers);
    this.#validateNumberType(numbers);
  }

  // TODO: 추가 기능 구현
  #occurError(errorMessage) {
    throw new Error(errorMessage);
  }
  #validateNumberCount(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      this.#occurError(ERROR_NUMBER_COUNT);
    }
  }
  #validateDuplication(numbers) {
    const checkedNumbers = new Set(numbers);
    if (checkedNumbers.size !== LOTTO_NUMBER_COUNT) {
      this.#occurError(ERROR_NUMBER_DUPLICATION);
    }
  }
  #validateNumberRange(numbers) {
    numbers.forEach((number) => {
      if (number < MIN_LOTTO_NUMBER || number > MAX_LOTTO_NUMBER) {
        this.#occurError(ERROR_NUMBER_RANGE);
      }
    });
  }
  #validateNumberType(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        this.#occurError(ERROR_NUMBER_TYPE);
      }
    });
  }

  get() {
    return this.#numbers;
  }

  async compareResult(issuedNumbers, bonusNumber) {
    const compareResult = [];

    issuedNumbers.map((issuedNumber, index) => {
      compareResult.push(0);
      issuedNumber.includes(+bonusNumber) &&
        (compareResult[index] += BONUS_SCORE);
      this.#numbers.map((winningNumber) => {
        issuedNumber.includes(+winningNumber) &&
          (compareResult[index] += WINNING_SCORE);
      });
    });
    return compareResult;
  }

  async winningResult(resultData, result) {
    switch (result) {
      case WINNING_THREE:
      case WINNING_THREE_BONUS: {
        resultData.totalProfits += PRIZE_WINNING_THREE;
        resultData.lottoResult[0] += WINNING_SCORE;
        break;
      }
      case WINNING_FOUR:
      case WINNING_FOUR_BOUNS: {
        resultData.totalProfits += PRIZE_WINNING_FOUR;
        resultData.lottoResult[1] += WINNING_SCORE;
        break;
      }
      case WINNING_FIVE: {
        resultData.totalProfits += PRIZE_WINNING_FIVE;
        resultData.lottoResult[2] += WINNING_SCORE;
        break;
      }
      case WINNING_FIVE_BONUS: {
        resultData.totalProfits += PRIZE_WINNING_FIVE_BONUS;
        resultData.lottoResult[3] += WINNING_SCORE;
        break;
      }
      case WINNING_SIX:
      case WINNING_SIX_BONUS: {
        resultData.totalProfits += PRIZE_WINNING_SIX;
        resultData.lottoResult[4] += WINNING_SCORE;
        break;
      }
      default: {
        break;
      }
    }

    return resultData;
  }

  async result(issuedNumbers, bonusNumber) {
    let resultData = {
      lottoResult: [0, 0, 0, 0, 0, 0], // 일치 개수 : [3개, 4개, 5개, 5개 + 보너스, 6개]
      totalProfits: 0,
    };

    const comparedResult = await this.compareResult(issuedNumbers, bonusNumber);

    comparedResult.forEach(async (result) => {
      resultData = await this.winningResult(resultData, result);
    });

    return resultData;
  }
}

export default Lotto;
