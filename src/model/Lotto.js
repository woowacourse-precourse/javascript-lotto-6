import {
  FIFTH_PRIZE,
  FIRST_PRIZE,
  FOURTH_PRIZE,
  LOTTO_LENGTH,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  SECOND_PRIZE,
  THIRD_PRIZE,
} from "../constant/Constant";
import errorMessage from "../constant/ErrorMessage";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#convertNumber(numbers);
    this.#sortNumbers();
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_LENGTH) {
      errorMessage.lengthError();
    }
    if (new Set(numbers).size !== LOTTO_LENGTH) {
      errorMessage.duplicateError();
    }
    numbers.forEach((number) => {
      if (Number.isNaN(+number)) {
        errorMessage.typeError();
      }
      if (+number < LOTTO_MIN_NUMBER || +number > LOTTO_MAX_NUMBER) {
        errorMessage.numberRangeError();
      }
    });
  }

  #convertNumber(numbers) {
    return numbers.map((number) => +number);
  }

  #sortNumbers() {
    this.#numbers.sort((a, b) => a - b);
  }

  #compareNumbers(randomNumber) {
    let countCorrect = 0;
    let inputNumberPointer = 0;
    let randomNumberPointer = 0;
    while (inputNumberPointer < LOTTO_LENGTH && randomNumberPointer < LOTTO_LENGTH) {
      if (+this.#numbers[inputNumberPointer] > +randomNumber[randomNumberPointer]) {
        randomNumberPointer += 1;
        continue;
      }
      if (+this.#numbers[inputNumberPointer] < +randomNumber[randomNumberPointer]) {
        inputNumberPointer += 1;
        continue;
      }
      if (+this.#numbers[inputNumberPointer] === +randomNumber[randomNumberPointer]) {
        countCorrect += 1;
        inputNumberPointer += 1;
        randomNumberPointer += 1;
        continue;
      }
    }
    return countCorrect;
  }

  #includeBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  winningResult(randomNumbers, bonusNumber) {
    const result = Object.seal({ first: 0, second: 0, third: 0, fourth: 0, fifth: 0 });
    randomNumbers.forEach((randomNumber) => {
      const compareResult = this.#compareNumbers(randomNumber);
      if (compareResult === 3) {
        result.fifth += 1;
        return;
      }
      if (compareResult === 4) {
        result.fourth += 1;
        return;
      }
      if (compareResult === 5) {
        result.third += 1;
        return;
      }
      if (compareResult === 5 && this.#includeBonus(bonusNumber)) {
        result.second += 1;
        return;
      }
      if (compareResult === 6) {
        result.first += 1;
        return;
      }
    });
    return result;
  }

  rateResult(purchaseAmount, winningResult) {
    const totalPrize =
      winningResult.first * FIRST_PRIZE +
      winningResult.second * SECOND_PRIZE +
      winningResult.third * THIRD_PRIZE +
      winningResult.fourth * FOURTH_PRIZE +
      winningResult.fifth * FIFTH_PRIZE;

    const rate = (totalPrize / +purchaseAmount) * 100;
    return rate.toFixed(1);
  }
}

export default Lotto;
