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
    const SET_NUM = new Set([...numbers]);
    if (SET_NUM.size !== numbers.length) {
      throw new Error("[ERROR] 중복된 값을 입력하지 마세요");
    }
    numbers.forEach(v => {
      if (isNaN(v)) throw new Error("[ERROR] 숫자만 입력");
      if (v < 1 && v>45) throw new Error("[ERROR] 1부터 45까지만 가능");
    });
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}
export default Lotto;
