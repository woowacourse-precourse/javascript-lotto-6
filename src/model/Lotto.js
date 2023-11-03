class Lotto {
  #numbers;
  #userNumbers;
  #bonusNumbers;

  constructor(userNumbers, numbers, bonusNumbers) {
    this.#validate(numbers);
    this.#userNumbers = userNumbers;
    this.#numbers = numbers;
    this.#bonusNumbers = bonusNumbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  lottoLogic() {
    this.#userNumbers.forEach((value) => {
      const match = value.filter((number) => this.#numbers.includes(number)).length;
      switch (match) {
        case 3:
          console.log("3개");
          break;
        case 4:
          console.log("4개");
          break;
        case 5:
          value.includes(this.#bonusNumbers) ? console.log('보너스 포함 6개') : console.log("5개");
          break;
        case 6:
          console.log("6개");
          break;
      }
    });
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
