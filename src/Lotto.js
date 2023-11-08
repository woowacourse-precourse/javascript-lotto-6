class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      console.log(numbers);
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (Number.isNaN(numbers)) {
      throw new Error("[ERROR] 숫자만 입력해주세요. ");
    }
    if (!numbers.every((number) => this.isNumberValid(number))) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  isNumberValid(number) {
    return !Number.isNaN(number) && number >= 1 && number <= 45;
  }
}
export default Lotto;
