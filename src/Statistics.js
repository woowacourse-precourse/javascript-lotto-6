class Statistics {
  #rankCounts;

  constructor(results) {
    this.#rankCounts = this.#updateRank(results);
  }

  #updateRank(results) {
    const rankCounts = [0, 0, 0, 0, 0];

    results.forEach(({ matchingNumbers, bonusMatch }) => {
      if (matchingNumbers === 6) {
        rankCounts[0]++; 
      } else if (matchingNumbers === 5 && bonusMatch) {
        rankCounts[1]++; 
      } else if (matchingNumbers === 5) {
        rankCounts[2]++; 
      } else if (matchingNumbers === 4) {
        rankCounts[3]++;
      } else if (matchingNumbers === 3) {
        rankCounts[4]++;
      }
    });

    return rankCounts;
  }
}

export default Statistics;