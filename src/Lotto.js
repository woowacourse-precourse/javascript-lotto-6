class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    //  변경 불가
    // numbers : 사용자가 뽑은 당첨 번호
    // 필드 추가 금지
  }

  #validate(numbers) {
    if (numbers.length !== 6)
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");

    numbers.forEach((element, index, array) => {
      if (array.indexOf(element) !== array.lastIndexOf(element))
        throw new Error("[ERROR] 로또 번호는 서로 중복되면 안됩니다.");
    });

    numbers.forEach((element) => {
      if (element > 45)
        throw new Error("[ERROR] 로또 번호는 1~45까지만 가능합니다.");
    });
  }
  getNumber() {
    return this.#numbers;
  }
  // 메소드 추가 가능
  // TODO: 추가 기능 구현
}

export default Lotto;
