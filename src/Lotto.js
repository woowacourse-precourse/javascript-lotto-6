import { ERROR_MESSAGE } from "./constants/Constant";

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
    this.#validLottoUnit(numbers);
  }

  #validLottoUnit(numbers) {
    if (numbers.length !== new Set(numbers).size)
      throw new Error(ERROR_MESSAGE.LOTTO_INPUT);

    let [MIN_NUMBER, MAX_NUMBER] = [1, 45];
    numbers.forEach((number) => {
      if (number < MIN_NUMBER || number > MAX_NUMBER) {
        throw new Error(ERROR_MESSAGE.LOTTO_UNIT);
      }
    });
  }

  get numbers() {
    return this.#numbers;
  }
}

export default Lotto;
