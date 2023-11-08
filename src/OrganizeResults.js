/* eslint-disable default-case */
class OrganizeResults {

  organizeRank = (lotto, published, bonus) => {
    published.numbers.forEach((number) => {
      const result = lotto.compareNumbers(number);
      this.exportRankAsResult(result, published, number, bonus);
    });
  }

  exportRankAsResult = (result, published, numbers, bonus) => {
    switch(result) {
      case 6 :
        published.rank[0] += 1;
        break;
      case 5 :
        if (numbers.includes(bonus)) {
            published.rank[1] += 1;
          break;
        }
        published.rank[2] += 1;
        break;
      case 4 : 
        published.rank[3] += 1;
        break;
      case 3 :
        published.rank[4] += 1;
        break;
    }
  }
      
  calculateRate = (published) => {
    let gain = 0;
    for (let i = 0; i < 5; i += 1) {
      gain += (published.rank[i] * published.GAIN[i]);
    }
    const rate = gain / (published.numbers.length * 1e3) * 100;
    return rate;
  }
}

export default OrganizeResults;