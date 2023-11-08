import COMMON_VALUE from './constants/\bcommonValue';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  result(winningNumbers, bonusNumber) {
    const winningStatus = this.calculateWinningStatus(
      winningNumbers,
      bonusNumber
    );
    const rateOfReturn = this.calculateRateOfReturn(winningStatus);

    return [winningStatus, rateOfReturn];
  }

  calculateWinningStatus(winningNumbers, bonusNumber) {
    const winStatus = [0, 0, 0, 0, 0];
    this.#numbers.forEach((numbers) => {
      const rankOfwin = this.calculateLottoRank(
        numbers,
        winningNumbers,
        bonusNumber
      );
      if (rankOfwin !== COMMON_VALUE.FAIL) {
        winStatus[rankOfwin - 1] += 1;
      }
    });
    // 당첨 통계는 5등부터 나오므로 순서를 뒤집어준다.
    return winStatus.reverse();
  }

  calculateRateOfReturn(winningStatus) {
    const investmentAmount = this.#numbers.length * 1000;
    const reward = this.calculateReward(winningStatus);
    const rateOfReturn =
      Math.round((reward / investmentAmount) * 100 * 10) / 10;
    return rateOfReturn;
  }

  calculateReward(winningStatus) {
    let reward = 0;
    winningStatus.forEach((numb, rank) => {
      reward += numb * COMMON_VALUE.REWARD[rank];
    });
    return reward;
  }

  calculateLottoRank(numbers, winningNumbers, bonusNumber) {
    const numberOfMatching = this.countOfMatchingNumbers(
      numbers,
      winningNumbers
    );

    const checkBonusMatching = this.checkMatchingBonus(
      winningNumbers,
      bonusNumber
    );

    return this.checkLottoRank(numberOfMatching, checkBonusMatching);
  }

  checkLottoRank(numberOfMatching, checkBonusMatching) {
    switch (numberOfMatching) {
      case 6:
        return 1;
      case 5:
        return checkBonusMatching ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return COMMON_VALUE.FAIL;
    }
  }

  countOfMatchingNumbers(arr1, arr2) {
    let intersection = arr1.filter((x) => arr2.includes(x));

    return intersection.length;
  }

  checkMatchingBonus(winningNumbers, bonusNumber) {
    if (winningNumbers.includes(bonusNumber)) {
      return true;
    }
    return false;
  }
}

export default Lotto;
