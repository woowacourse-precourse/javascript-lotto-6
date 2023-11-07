class Lotto {
  #numbers;
  #count;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers.sort((a, b) => a - b);
  }

  calculateCorrectNumber(lottoArray, bonusNumber) {
    const correctArray = [];
    lottoArray.forEach((lotto) => {
      correctArray.push(this.#compareLottoAndGoal(lotto, Number(bonusNumber)));
    });
    return correctArray;
  }

  #compareLottoAndGoal(lotto, bonusNumber) {
    const correctCount = 13 - new Set([...lotto.getNumbers(), ...this.#numbers, bonusNumber]).size;
    return [correctCount, lotto.getNumbers().indexOf(bonusNumber) !== -1 ? true : false];
  }
}

export default Lotto;
