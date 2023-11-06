class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validate2(numbers);
    this.#validate3(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #validate2(numbers) {
    for (let num of numbers) {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 범위 오류"); // 숫자가 1보다 작거나 45보다 큰 경우 에러 발생
      }
    }
  }
  //중복 체크도 해야 함
  #validate3(numbers) {
    numbers = Array.from(new Set(numbers));
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 중복된 번호가 있습니다.");
    }
  }
}

export default Lotto;
