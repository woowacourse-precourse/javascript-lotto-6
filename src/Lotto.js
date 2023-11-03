const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000
};

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.COUNT = 0;
    this.BONUS = false;
    this.PRIZE;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  compareNumber(winnerNumbers) {
    this.#numbers.forEach((number) => this.qulificationWinNumber(winnerNumbers, number));
  }

  qulificationWinNumber(winnerNumbers, number) {
    if(winnerNumbers.includes(number)) {
      this.COUNT++;
    }
  }

  compareBonusNumber(bonusNumber) {
    if(this.#numbers.includes(bonusNumber)) {
      this.BONUS = true;
    }
  }

  qulificationSecond() {
    if(this.Bonus) {
      return this.PRIZE = PRIZE.SECOND;
    }
    if(!this.BONUS) {
      return this.PRIZE = PRIZE.THIRD;
    }
  }

  getPrize() {
    if(this.COUNT === 6) {
      return this.PRIZE = PRIZE.FIRST;
    }
    if(this.COUNT === 5 && this.BONUS) {
      return this.qulificationSecond();
    }
    if(this.COUNT === 4) {
      return this.PRIZE = PRIZE.FOURTH;
    }
    if(this.COUNT === 3) {
      return this.PRIZE = PRIZE.FIFTH;
    }
  }

}

export default Lotto;
