class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#avoidDuplicate(numbers);
    this.#checkInRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #avoidDuplicate(numbers) {
    const NUMBERSET = new Set([...numbers]);
    if (NUMBERSET.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않은 6개의 숫자여야 합니다.");
    }
  }

  #checkInRange(numbers) {
    const ISINRANGE = numbers.every(num => {1 <= num && num <= 45});
    if(!ISINRANGE) {
      throw new Error("[ERROR] 로또 번호는 1이상, 45이하의 숫자여야 합니다.");
    }
  }

  sortNumbers(){
    this.#numbers.sort((a, b) => a - b);
    return this;
  }

  returnNumbers() {
    return this.#numbers;
  }

}

export default Lotto;
