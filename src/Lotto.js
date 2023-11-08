import LottoNumber from "./LottoNumber.js";
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
    numbers.forEach( number => new LottoNumber(number));
    const NUMBERS_COPY = new Set(numbers);
    if( NUMBERS_COPY.size !== numbers.length ) throw new Error('[ERROR] 중복된 숫자가 포함되어 있습니다.');
  }

  getNumbers(){
    return this.#numbers;
  }
}

export default Lotto;
