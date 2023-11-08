import FindIndex from '../controller/FindIndex';
import EXCEPTION from '../constant/Exception';
import Init from '../constant/Init';

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
    if (!(numbers >= Init.minLottoRange && numbers <= Init.maxLottoRange)) {
      throw new Error(EXCEPTION.outOfRangeError);
    }
  }

  lottoNumberValidate(winningNumber, userBonusNumber) {
    if (winningNumber.indexOf(String(userBonusNumber)) !== Init.nonIndex) {
      throw new Error(EXCEPTION.bonusWinningSameError);
    }
  }

  isInFive(resultArray) {
    this.arrayInFiveIndex = FindIndex.findArrayIndex(
      resultArray,
      Init.bonusNumber,
    );
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
