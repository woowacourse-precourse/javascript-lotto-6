import WINNING_REWARD from '../constants/WinningReward.js';

class Purchase {
  #amount;
  #revenue;

  constructor(amount) {
    // this.validate(amount);
    this.#amount = Number(amount) / 1000;
    this.#revenue = 0;
  }

  // validate(amount) {
  //   this.validateType(amount);
  //   this.validateRange(amount);
  //   this.validateUnit(amount);
  // }

  // validateType(amount) {
  //   if (isNaN(amount)) {
  //     throw new Error('[ERROR] 숫자로 이루어져야 합니다.');
  //   }
  // }

  // validateRange(amount) {
  //   if (amount <= 0) {
  //     throw new Error('[ERROR] 0원보다 큰 금액을 입력해야 합니다.');
  //   }
  // }

  // validateUnit(amount) {
  //   if (amount % 1000 !== 0) {
  //     throw new Error('[ERROR] 1000원 단위 금액을 입력해야 합니다.');
  //   }
  // }

  getAmount() {
    return this.#amount;
  }

  getRevenueRate(winningStatistic) {
    const purchasePrice = this.#amount * 1000;
    winningStatistic.forEach((count, index) => {
      this.#revenue += WINNING_REWARD[index] * count;
    });

    return ((this.#revenue / purchasePrice) * 100).toFixed(1);
  }
}

export default Purchase;
