class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkInteger(numbers);
    this.#checkNumberRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #checkInteger(numbers) {
    numbers.forEach((number) => {
      if(!Number.isInteger(number)) throw new Error('[ERROR] : winning number must be integer.');
    })
  }

  #checkNumberRange(numbers) {
    numbers.forEach((number) => {
      if(number < 1 || number > 45) throw new Error('[ERROR] : winning number must be in range 1~45');
    })
  }
}

export default Lotto;
