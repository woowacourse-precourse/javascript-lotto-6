class EarningRate {
  #score;
  #addedScore;
  #money;

  constructor(score, money) {
    this.#score = score;
    this.#money = money;
  }

  #addEarnedScore() {
    const data = ['three', 'four', 'five', 'bonus', 'six'];
    const money = [5000, 50000, 1500000, 30000000, 2000000000];

    this.#addedScore = 0;

    for (let i = 0; i < data.length; i += 1) {
      this.#addedScore += this.#score[data[i]] * money[i];
    }
  }

  calEarningRate() {
    this.#addEarnedScore();

    return Number.parseFloat((this.#addedScore / this.#money) * 100).toFixed(1);
  }
}

export default EarningRate;
