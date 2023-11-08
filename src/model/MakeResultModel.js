import { PRIZE } from '../constants/Constants.js';

class MakeResultModel {
  static calculateMatchCounts(lottos, winningNumbers, bonusNumber) {
    let matchCounts = [0, 0, 0, 0, 0, 0];
    lottos.forEach((lotto) => {
      const matchedNumbers = this.countMatchedNumbers(lotto, winningNumbers);
      const hasBonusNumber = this.hasBonus(lotto, bonusNumber);
      matchCounts = this.updateMatchCounts(
        matchedNumbers,
        hasBonusNumber,
        matchCounts,
      );
    });
    return matchCounts;
  }

  static updateMatchCounts(matchedNumbers, hasBonusNumber, matchCounts) {
    const updatedMatchCounts = [...matchCounts];
    if (matchedNumbers === 6) {
      updatedMatchCounts[5] += 1;
    } else if (matchedNumbers === 5 && hasBonusNumber) {
      updatedMatchCounts[4] += 1;
    } else if (matchedNumbers === 5) {
      updatedMatchCounts[3] += 1;
    } else if (matchedNumbers === 4) {
      updatedMatchCounts[2] += 1;
    } else if (matchedNumbers === 3) {
      updatedMatchCounts[1] += 1;
    }
    return updatedMatchCounts;
  }

  static countMatchedNumbers(lotto, winningNumbers) {
    return lotto.filter((number) => winningNumbers.includes(number)).length;
  }

  static hasBonus(lotto, bonusNumber) {
    return lotto.includes(bonusNumber);
  }

  static calculateProfit(purchasePrice, matchCounts) {
    const prizeOfRank = [
      0,
      PRIZE.rank5,
      PRIZE.rank4,
      PRIZE.rank3,
      PRIZE.rank2,
      PRIZE.rank1,
    ];
    const totalPrize = matchCounts.reduce(
      (total, count, index) => total + count * prizeOfRank[index],
      0,
    );
    return ((totalPrize / purchasePrice) * 100).toFixed(1);
  }
}

export default MakeResultModel;
