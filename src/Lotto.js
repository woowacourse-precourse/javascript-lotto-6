import {
  LOTTO_NUMBER_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
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
      issuedNumber.includes(+bonusNumber) && (compareResult[index] += 0.5);
      this.#numbers.map((winningNumber) => {
        issuedNumber.includes(+winningNumber) && (compareResult[index] += 1);
      });
    });
    return compareResult;
  }

  async winningResult(resultData, result) {
    switch (result) {
      case 3:
      case 3.5: {
        resultData.totalProfits += 5000;
        resultData.lottoResult[0] += 1;
        break;
      }
      case 4:
      case 4.5: {
        resultData.totalProfits += 50000;
        resultData.lottoResult[1] += 1;
        break;
      }
      case 5: {
        resultData.totalProfits += 1500000;
        resultData.lottoResult[2] += 1;
        break;
      }
      case 5.5: {
        resultData.totalProfits += 30000000;
        resultData.lottoResult[3] += 1;
        break;
      }
      case 6:
      case 6.5: {
        resultData.totalProfits += 2000000000;
        resultData.lottoResult[4] += 1;
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
      lottoResult: [0, 0, 0, 0, 0, 0], // 일치 개수 : [3개, 4개, 5개, 5개 + 보너스. 6개]
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
