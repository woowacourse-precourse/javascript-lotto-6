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
    const cntCorrect = this.#numbers.filter((number) =>
      win.includes(number),
    ).length;
    const checkBonus = this.#numbers.includes(bonus);
    this.result = this.#determineResult(cntCorrect, checkBonus);
  }

  #determineResult(cntCorrect, checkBonus) {
    const prizeMap = {
      6: "6개 일치 (2,000,000,000원)",
      5: checkBonus
        ? "5개 일치, 보너스 볼 일치 (30,000,000원)"
        : "5개 일치 (1,500,000원)",
      4: "4개 일치 (50,000원)",
      3: "3개 일치 (5,000원)",
    };

    return prizeMap[cntCorrect] || "None";
  }
}

export default Lotto;
