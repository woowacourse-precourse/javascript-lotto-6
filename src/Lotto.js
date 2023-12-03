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
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 각 로또 번호는 중복될 수 없습니다.');
    }
    numbers.forEach((number) => {
      if (!Number.isInteger(number)) {
        throw new Error('[ERROR] 로또 번호는 1-45 사이의 정수만 가능합니다.');
      }
      if (number < 1 || number > 45) {
        throw new Error('[ERROR] 로또 번호는 1-45 사이의 정수만 가능합니다.');
      }
    });
  }

  getResult() {}

  #getInitializedResult() {
    return {
      three: 0,
      four: 0,
      five: 0,
      bonusFive: 0,
      six: 0,
    };
  }

  #calculateResult(tickets, bonusNumber) {
    const result = this.#getInitializedResult();
    tickets.forEach((ticket) => {
      const matched = ticket.filter((number) => this.#numbers.includes(number));
      const isBonus = this.#numbers.includes(bonusNumber);
      if (matched.length === 3) result.three += 1;
      if (matched.length === 4) result.four += 1;
      if (matched.length === 5 && !isBonus) result.five += 1;
      if (matched.length === 5 && isBonus) result.bonusFive += 1;
      if (matched.length === 6) result.six += 1;
    });
    return result;
  }
}

export default Lotto;
