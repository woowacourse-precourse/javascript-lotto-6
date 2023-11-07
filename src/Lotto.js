class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    numbers.forEach((number) => {
      if (isNaN(number))
        throw new Error("[ERROR] 입력 형식이 올바르지 않습니다.");
    });

    numbers.forEach((number) => {
      if (number < 1 || number > 45)
        throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 숫자여야 합니다.");
    });

    const setNumber = new Set(numbers);

    if (setNumber.size !== numbers.length)
      throw new Error("[ERROR] 중복된 값이 있습니다'");
  }
}

export default Lotto;
