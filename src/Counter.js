class Counter {
  constructor() {
    this.count = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };
  }

  countUp(matchCount, isBonusNumber) {
    if (matchCount === 5 && isBonusNumber) {
      this.count[5.5] += 1;
      return;
    }
    this.count[matchCount] += 1;
  }

  getCount() {
    return this.count;
  }
}

export default Counter;
