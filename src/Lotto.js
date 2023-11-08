class Lotto {
  #numbers;

  #bonusNumber;

  #ticketList;

  constructor(numbers, ticketList) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#ticketList = ticketList;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    const check = new Set(numbers);
    if ([...check].length !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복이 불가능 합니다.');
    }
  }

  confirmNumber(bonusNumber) {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이 숫자만 가능합니다.');
    }

    this.#bonusNumber = bonusNumber;
  }
}

export default Lotto;
