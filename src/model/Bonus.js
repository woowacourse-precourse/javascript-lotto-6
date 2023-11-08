import FindIndex from '../controller/FindIndex';
import EXCEPTION from '../constant/Exception';

class Bonus {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Number(numbers)) {
      throw new Error(EXCEPTION.nonNumberError);
    }
    if (!(numbers >= 1 && numbers <= 45)) {
      throw new Error(EXCEPTION.outOfRangeError);
    }
  }

  lottoNumberValidate(winningNumber, userBonusNumber) {
    if (winningNumber.indexOf(String(userBonusNumber)) !== -1) {
      throw new Error(EXCEPTION.bonusWinningSameError);
    }
  }

  isInFive(resultArray) {
    this.arrayInFiveIndex = FindIndex.findArrayIndex(resultArray, 5);
    if (this.arrayInFiveIndex.length !== 0) {
      return this.arrayInFiveIndex;
    }
    return [];
  }

  isinBonusNumber(lotto) {
    let winningBonus = 0;
    let winningFive = 0;

    this.arrayInFiveIndex.forEach(index => {
      const matchingNumbers = lotto[index].filter(
        x => x === Number(this.#numbers),
      );
      if (matchingNumbers.length > 0) {
        winningBonus += 1;
        winningFive -= 1;
      }
      winningFive += 1;
    });
    return [winningFive, winningBonus];
  }
}

export default Bonus;
