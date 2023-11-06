import { Console } from '@woowacourse/mission-utils';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #initializeResult() {
    return {
      three: 0,
      four: 0,
      five: 0,
      bonusFive: 0,
      six: 0,
    };
  }

  #getResult(issuedTickets, bonus) {
    const result = this.#initializeResult();
    issuedTickets.forEach((issuedNumbers) => {
      const totalMatched = this.#countMatchingNumbers(issuedNumbers);
      const isBonus = issuedNumbers.includes(bonus);
      if (totalMatched === 3) result.three += 1;
      if (totalMatched === 4) result.four += 1;
      if (totalMatched === 5 && !isBonus) result.five += 1;
      if (totalMatched === 5 && isBonus) result.bonusFive += 1;
      if (totalMatched === 6) result.six += 1;
    });
    return result;
  }

  #countMatchingNumbers(issuedNumbers) {
    let totalMatched = 0;
    issuedNumbers.forEach((number) => {
      if (this.#numbers.includes(number)) totalMatched += 1;
    });
    return totalMatched;
  }
}

export default Lotto;
