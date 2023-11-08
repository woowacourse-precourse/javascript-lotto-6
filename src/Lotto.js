import { Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_ARRAY_LENGTH);
    }

    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error(ERROR.OUT_OF_RANGE);
      }
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }
  }

  validateBonusNumber = (number, winningNumbers) => {
    if (isNaN(number) || number < 0) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (number < 1 || number > 45) {
      throw new Error(ERROR.OUT_OF_RANGE);
    }
    if (winningNumbers.includes(number)) {
      throw new Error(ERROR.DUPLICATE_NUMBER);
    }
  };

  // TODO: 추가 기능 구현
  inputWinningNumbers = async () => {
    let numbersArray;
    while (true) {
      try {
        const numbers = await Console.readLineAsync(GAME.INPUT.WINNING_NUMBER);
        const numbersArray = numbers.split(",");
        this.#validate(numbersArray);
        break;
      } catch (error) {
        console.error(error.message);
      }
    }
    return numbersArray;
  };

  inputBonusNumber = async (winningNumbers) => {
    while (true) {
      try {
        const number = Number(
          await Console.readLineAsync(GAME.INPUT.BONUS_NUMBER)
        );
        this.validateBonusNumber(number, winningNumbers);
        break;
      } catch (error) {
        console.error(error.message);
      }
    }
    return number;
  };

  compareNumbers = (winningNumbers, bonusNumber) => {
    const matchedNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    const matchedBonusNumber = matchedNumbers.includes(bonusNumber);
    let matched = [0, 0, 0, 0, 0];
    const matchedCount = matchedNumbers.length;

    if (matchedCount === 6) {
      matched[4] += 1;
    } else if (matchedCount === 5 && matchedBonusNumber) {
      matched[3] += 1;
    } else if (matchedCount === 5) {
      matched[2] += 1;
    } else if (matchedCount === 4) {
      matched[1] += 1;
    } else if (matchedCount === 3) {
      matched[0] += 1;
    }

    return matched;
  };
}

export default Lotto;
