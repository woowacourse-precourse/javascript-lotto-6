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
    const uniqueNumbers = [...new Set(numbers)];

    if (uniqueNumbers.length !== 6)
      throw new Error('[ERROR] duplicate lotto numbers exist.');

    uniqueNumbers.forEach((num) => {
      if (num > 45 || num < 1 || isNaN(num))
        throw new Error(
          '[ERROR] lotto number must be between 1 and 45 or not number.'
        );
    });
  }

  checkBonusNumber(bonus) {
    if (this.#numbers.includes(bonus))
      throw new Error('[ERROR] bonus number is already exists.');
  }
}

export default Lotto;
