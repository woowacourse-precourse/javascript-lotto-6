class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.result = "";
  }

  /* eslint-disable class-methods-use-this */
  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error("[ERROR] 로또 번호중 중복된 값이 존재합니다.\n");
    }
  }

  checkResult({ win, bonus }) {
    let cntCorrect = 0;
    let checkBonus = false;
    this.#numbers.forEach((number) => {
      if (win.includes(number)) {
        cntCorrect += 1;
      }
      if (number === bonus) checkBonus = true;
    });

    if (cntCorrect === 6) {
      this.result = "6개 일치 (2,000,000,000원)";
    }

    if (cntCorrect === 5) {
      if (checkBonus) {
        this.result = "5개 일치, 보너스 볼 일치 (30,000,000원)";
      } else {
        this.result = "5개 일치 (1,500,000원)";
      }
    }
    if (cntCorrect === 4) {
      this.result = "4개 일치 (50,000원)";
    }
    if (cntCorrect === 3) {
      this.result = "3개 일치 (5,000원)";
    }
    if (cntCorrect < 3) {
      this.result = "None";
    }
  }
}

export default Lotto;
