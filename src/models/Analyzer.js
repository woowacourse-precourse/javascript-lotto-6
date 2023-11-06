class Analyzer {
  #prizeInfo;

  constructor() {
    this.#prizeInfo = {
      firstPlace: 0,
      secondPlace: 0,
      thirdPlace: 0,
      fourthPlace: 0,
      fifthPlace: 0,
      totalPrizeMoeny: 0,
    };
  }

  getPrizeInfo() {
    return this.#prizeInfo;
  }

  getPrize(winnigResult) {
    const prizeLookup = {
      '6,0': 'firstPlace',
      '5,1': 'secondPlace',
      '5,0': 'thirdPlace',
      '4,0': 'fourthPlace',
      '3,0': 'fifthPlace',
    };
    winnigResult.forEach((matchingResult) => {
      const prize = prizeLookup[matchingResult.join(',')] || 0;
      if (prize) {
        this.#prizeInfo[prize] += 1;
      }
    });
  }

  calculateTotalPrize() {
    const prizeLookup = {
      firstPlace: 2000000000,
      secondPlace: 30000000,
      thirdPlace: 1500000,
      fourthPlace: 50000,
      fifthPlace: 5000,
    };
    for (const rank in this.#prizeInfo) {
      if (rank !== 'totalPrizeMoeny') {
        this.#prizeInfo.totalPrizeMoeny +=
          this.#prizeInfo[rank] * prizeLookup[rank];
      }
    }
  }

  calculateYield(money) {
    return ((this.#prizeInfo.totalPrizeMoeny / money) * 100).toFixed(2);
  }
}

export default Analyzer;
