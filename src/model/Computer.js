class Computer {
  state;

  constructor() {
    this.state = {
      rank1: { prize: 2000000000, count: 0 },
      rank2: { prize: 30000000, count: 0 },
      rank3: { prize: 1500000, count: 0 },
      rank4: { prize: 50000, count: 0 },
      rank5: { prize: 5000, count: 0 },
    };
  }

  updateState(lottoMatch, bonusMatch) {
    if (lottoMatch === 3) {
      this.state.rank5.count += 1;
    } else if (lottoMatch === 4) {
      this.state.rank4.count += 1;
    } else if (lottoMatch === 5 && !bonusMatch) {
      this.state.rank3.count += 1;
    } else if (lottoMatch === 5 && bonusMatch) {
      this.state.rank2.count += 1;
    } else if (lottoMatch === 6) {
      this.state.rank1.count += 1;
    }
  }

  earningRate(amount, resultObject) {
    let sum = 0;
    const rankList = Object.values(resultObject);
    for (let i = 0; i < 5; i += 1) {
      if (rankList[i].count > 0) {
        sum += rankList[i].count * rankList[i].prize;
      }
    }
    return ((sum / amount) * 100).toFixed(1);
  }
}

export default Computer;
