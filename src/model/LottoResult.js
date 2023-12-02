import { STRINGS } from '../constants/constants.js';

class LottoResult {
  #winningNumbers;

  #userNumber;

  #bonusNumber;

  constructor(winningNumbers, userNumber, bonusNumber) {
    this.#winningNumbers = winningNumbers;
    this.#userNumber = userNumber;
    this.#bonusNumber = bonusNumber;
  }

  getResult() {
    const match = this.getMatch();

    const result = this.calcurateResult(match, this.#bonusNumber);

    return result;
  }

  getMatch() {
    const match = [];

    this.#winningNumbers.forEach(winningNumber => {
      const matchCount = this.compareNumbers(
        winningNumber,
        this.#userNumber,
        this.#bonusNumber,
      );
      match.push(matchCount);
    });

    return match;
  }

  compareNumbers(winningNumber, userNumber, bonusNumber) {
    let match = 0;

    winningNumber.forEach(firstNumber => {
      userNumber.forEach(secondNumber => {
        if (firstNumber === secondNumber) {
          match += 1;
        }
      });
    });

    if (match === 5 && winningNumber.includes(Number(bonusNumber))) {
      match = STRINGS.bonus;
    }

    return match;
  }

  calcurateResult(match) {
    const result = Array.from({ length: 5 }, () => 0);

    match.forEach(matchCount => {
      if (matchCount === 3) {
        result[0] += 1;
      }
      if (matchCount === 4) {
        result[1] += 1;
      }
      if (matchCount === 5) {
        result[2] += 1;
      }
      if (matchCount === STRINGS.bonus) {
        result[3] += 1;
      }
      if (matchCount === 6) {
        result[4] += 1;
      }
    });

    return result;
  }
}

export default LottoResult;
