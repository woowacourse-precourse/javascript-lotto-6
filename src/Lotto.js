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

    if (numbers.length !== new Set(numbers).size) {
      throw new Error("[ERROR] 로또 번호가 중복될 수 없습니다.");
    }
  }

  sortLottoList() {
    return this.#numbers.sort((x, y) => x - y);
  }

  getMatchedCount(prizeList) {
    return this.#numbers.filter((number) => prizeList.includes(number)).length;
  }
}

export default Lotto;
