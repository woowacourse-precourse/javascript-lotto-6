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
    for (let i=0; i<numbers.length-1 ;i++){
      if (numbers[i] >= numbers[i+1]) {
        throw new Error("[ERROR] 로또 번호는 오름차순, 중복 없어야 합니다.");
      }
    }
  }

  // TODO: 추가 기능 구현
  returnNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
