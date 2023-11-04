class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  calculateRank(winningLottos, bonusLotto) {
    const winningNumberCount = this.#numbers.filter(number =>
      winningLottos.includes(number),
    ).length;

    return this.#determineRank(
      winningNumberCount,
      this.#numbers.includes(bonusLotto),
    );
  }

  #determineRank(winningNumberCount, hasBonus) {
    const rankMapping = { 6: 1, 5: hasBonus ? 2 : 3, 4: 4, 3: 5 };
    return rankMapping[winningNumberCount] || 0;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
