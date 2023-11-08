class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some((number) => isNaN(Number(number)))) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (!numbers.every((number) => typeof number === "number")) {
      throw new Error("[ERROR] 로또 번호는 숫자여야 합니다.");
    }
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
    
  }

  // TODO: 
  getNumbers() {
    return this.#numbers;
  }

  getNumbersString() {
    return this.#numbers.join(", ");
  }

  judgeLotto(answerLotto) { 
    const answerLottoValue = answerLotto.getNumbers();
    const lottoResult = this.#numbers.filter((number) => 
      answerLottoValue.includes(number)
    );
    const lottoResultCount = lottoResult.length;
    return lottoResultCount;
  }
  
  judgeBonus(bonusLotto) {
    if (this.#numbers.includes(bonusLotto)) {
      return 1;
    }
    return 0;
  }
}

export default Lotto;
