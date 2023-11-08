import { ERROR_MESSAGES } from "./constants/messages.js";
import { REWARDS } from "./constants/lottoNumbers.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.USE_SIX_NUMBERS);
    } else if (new Set(numbers).size !== 6) {
      throw new Error(ERROR_MESSAGES.CANT_USE_SAME_NUMBER);
    }
  }

  // TODO: 추가 기능 구현
  compareLottos(lotto, bonusNumber) {
    let sameCnt = lotto.filter((num) => this.#numbers.includes(num)).length;
    let hasBonusNumber = lotto.includes(bonusNumber);
    return [sameCnt, hasBonusNumber];
  }

  saveCompareResult(compareResult, lottoBoard) {
    const [sameCnt, hasBonusNumber] = compareResult;

    if (sameCnt === 3) {
      lottoBoard.threeSame += 1;
    } else if (sameCnt === 4) {
      lottoBoard.fourSame += 1;
    } else if (sameCnt === 5 && hasBonusNumber === true) {
      lottoBoard.fiveAndBonusSame += 1;
    } else if (sameCnt === 5) {
      lottoBoard.fiveSame += 1;
    } else if (sameCnt === 6) {
      lottoBoard.sixSame += 1;
    }
  }

  calculateReward(lottoBoard) {
    let reward = 0;

    reward += lottoBoard.threeSame * REWARDS.FIFTH;
    reward += lottoBoard.fourSame * REWARDS.FOURTH;
    reward += lottoBoard.fiveSame * REWARDS.THIRD;
    reward += lottoBoard.fiveAndBonusSame * REWARDS.SECOND;
    reward += lottoBoard.sixSame * REWARDS.FIRST;

    return reward;
  }

  calculateRateOfReturn(totalReward, money) {
    const temp = (totalReward / money) * 100;

    return (Math.round(temp * 10) / 10).toFixed(1);
  }
}

export default Lotto;
