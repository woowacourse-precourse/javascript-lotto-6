const MAX_NUMBER = 45;
const MIN_NUMBER = 1;
const LOTTO_LENGTH = 6;
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    numbers.forEach((number) => {
      if (isNaN(number)) {
        throw new Error("[ERROR] 숫자를 입력해주세요");
      }

      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error("[ERROR] 1~45까지의 번호를 입력해 주세요");
      }
    });
    if (numbers.length !== LOTTO_LENGTH) {
      throw new Error(`[ERROR] 로또 번호는 ${LOTTO_LENGTH}개여야 합니다.`);
    }
    if (numbers.length != new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호는 중복되서는 안됩니다.");
    }
  }

  get_numbers() {
    return this.#numbers;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
