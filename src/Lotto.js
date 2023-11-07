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

  getNumbers() {
    return this.#numbers;
  }

  comapareNumbers(winningNums, bonusNum) {
    const winningCnt = this.#numbers.filter((num) => winningNums.includes(num)).length;
    const bonusHit = this.#numbers.includes(bonusNum);

    return { winningCnt, bonusHit };
  }
}

export default Lotto;
