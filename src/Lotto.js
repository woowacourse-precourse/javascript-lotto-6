import { Random, Console } from "@woowacourse/mission-utils";
import { GAME, ERROR } from "./message";
import { App } from "./App";

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

  // TODO: 추가 기능 구현
  inputWinningNumbers = async () => {
    try {
      const numbers = await Console.readLineAsync(GAME.INPUT.WINNING_NUMBER);
      const numbersArray = numbers.split(",");
      this.#validate(numbersArray);
    } catch (error) {
      console.error(error.message);
      this.inputWinningNumbers();
    }
  };

  inputBonusNumber = async () => {
    try {
      const number = parseInt(
        await Console.readLineAsync(GAME.INPUT.BONUS_NUMBER),
        10
      );
      this.#validate(number);
    } catch (error) {
      console.error(error.message);
      this.inputBonusNumber();
    }
  };
}

export default Lotto;
