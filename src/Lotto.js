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

  #compareNumbers(userNumbers) {
    let totalMatched = 0;
    userNumbers.forEach((number) => {
      if (this.#numbers.includes(number)) totalMatched += 1;
    });
    return totalMatched;
  }
}

export default Lotto;
