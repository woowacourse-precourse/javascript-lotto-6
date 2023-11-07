class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#addValidate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #addValidate(numbers){
    if (
      numbers.some((number, index) => 
        number < 1 ||
        number > 45 ||
        numbers.indexOf(number) !== index
      )
    ) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 중복되지 않는 숫자여야 합니다.");
    }
  }

  checkLotto(WINNING_NUMBERS, BONUS_NUMBER) {
    const MATCHING_LOTTO = this.#numbers.filter((number) => WINNING_NUMBERS.includes(number));
    const MATCHING_COUNT = MATCHING_LOTTO.length;

    if (MATCHING_COUNT === 6) {
      return "6개 일치";
    } else if (MATCHING_COUNT === 5 && this.#numbers.includes(BONUS_NUMBER)) {
      return "5개 일치, 보너스 볼 일치";
    } else if (MATCHING_COUNT === 5) {
      return "5개 일치";
    } else if (MATCHING_COUNT === 4) {
      return "4개 일치";
    } else if (MATCHING_COUNT === 3) {
      return "3개 일치";
    }
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }
}

export default Lotto;
