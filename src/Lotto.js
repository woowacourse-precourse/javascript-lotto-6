class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    //this.#validate2(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #validate2(numbers) {
    if (
      numbers.map((num) => {
        num < 1 || num > 45;
      })
    ) {
      throw new Error("[ERROR] 범위 오류"); // 중복도 체크
    }
  }
}

export default Lotto;
