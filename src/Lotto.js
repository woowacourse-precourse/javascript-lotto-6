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
  }

  // TODO: 
  getNumbers() {
    return this.#numbers.join(", ");
  }

  judgingLotto(answerLotto) { 
    const result = [];
    this.#numbers.forEach((number) => {
      if (answerLotto.includes(number)) {
        result.push(1);
      }
      else {
        result.push(0);
      }
    })
    return result;
  }
  
  judgingBonus(bonusLotto) {
    if (bonusLotto.includes(number)) {
      return 1;
    }
  }
}

export default Lotto;
