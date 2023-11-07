import {
  FIFTH_PRIZE,
  FIFTH_PRIZE_CORRECT,
  FIRST_PRIZE,
  FIRST_PRIZE_CORRECT,
  FOURTH_PRIZE,
  FOURTH_PRIZE_CORRECT,
  LOTTO_LENGTH,
  LOTTO_MAX_NUMBER,
  LOTTO_MIN_NUMBER,
  SECOND_PRIZE,
  SECOND_THIRD_PRIZE_CORRECT,
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
      } else if (+this.#numbers[inputNumberPointer] < +randomNumber[randomNumberPointer]) {
        inputNumberPointer += 1;
      } else if (+this.#numbers[inputNumberPointer] === +randomNumber[randomNumberPointer]) {
        countCorrect += 1;
        inputNumberPointer += 1;
        randomNumberPointer += 1;
      }
    }
    return countCorrect;
  }

  #includeBonus(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  #getPrize(compareResult, bonusNumber) {
    if (compareResult === FIRST_PRIZE_CORRECT) {
      return "first";
    } else if (compareResult === SECOND_THIRD_PRIZE_CORRECT && this.#includeBonus(bonusNumber)) {
      return "second";
    } else if (compareResult === SECOND_THIRD_PRIZE_CORRECT) {
      return "third";
    } else if (compareResult === FOURTH_PRIZE_CORRECT) {
      return "fourth";
    } else if (compareResult === FIFTH_PRIZE_CORRECT) {
      return "fifth";
    }
    return null;
  }

  winningResult(randomNumbers, bonusNumber) {
    const result = Object.seal({ first: 0, second: 0, third: 0, fourth: 0, fifth: 0 });
    for (const randomNumber of randomNumbers) {
      const compareResult = this.#compareNumbers(randomNumber);
      const prize = this.#getPrize(compareResult, bonusNumber);
      if (prize) {
        result[prize] += 1;
      }
    }
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
