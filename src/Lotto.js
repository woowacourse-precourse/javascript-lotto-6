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
    this.#checkDuplication(numbers);
    this.#checkIsthereNoneDigit(numbers);
  }

  // TODO: 추가 기능 구현
  /**중복 숫자 예외처리 */
  #checkDuplication(numbers) {
    let counter = {};
    for (let el of numbers) {
      counter[el] = (counter[el] || 0) + 1;
    }
    if (Object.values(counter).includes(2)) {
      throw new Error("[ERROR] 로또 번호는 서로 중복이 아닌 숫자여야 합니다!");
    }
  }
  #checkIsthereNoneDigit(numbers) {
    for (let el of numbers) {
      if (el.match(/D/g)) {
        throw new Error("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다!");
      }
    }
  }
}
export default Lotto;
