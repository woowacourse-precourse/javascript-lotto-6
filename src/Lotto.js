import { Random } from '@woowacourse/mission-utils';
import LOTTO_NUMBER from './constants/lottoNumber.js';
import ERROR from './constants/error.js';
import MessageFormat from './utils/messageFormat.js';
import RANK from './constants/rank.js';
import PURCHASE_PRICE from './constants/purchasePrice.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(MessageFormat.error(ERROR.errorMessage.INVALID_LENGTH_WINNING_NUMBER));
    }
    const setNumber = new Set(numbers);
    if (numbers.length !== setNumber.size) {
      throw new Error(MessageFormat.error(ERROR.errorMessage.INVALID_UNIQUE_WINNING_NUMBER));
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  static getRandomLottoNumber() {
    const { minNum, maxNum, count } = LOTTO_NUMBER;
    const randomLottoNumber = Random.pickUniqueNumbersInRange(minNum, maxNum, count);
    const sortLottoNumber = randomLottoNumber.sort((a, b) => a - b);
    return sortLottoNumber;
  }

  static getRankBoard(lottos, winningNum, bonusNum) {
    const { rankBoard } = RANK;
    lottos.forEach((lotto) => {
      const { matchingCount, bonusMatch } = Lotto.calculateResults(lotto, winningNum, bonusNum);
      const rank = Lotto.calculateRank(matchingCount, bonusMatch);
      if (rank) rankBoard[rank] += 1;
    });
    return rankBoard;
  }

  static calculateResults(lotto, winningNum, bonusNum) {
    const lottoNum = lotto.getLottoNumbers();
    const matchingCount = lottoNum.filter((number) => winningNum.includes(number)).length;
    const bonusMatch = lottoNum.includes(bonusNum);
    return { matchingCount, bonusMatch };
  }

  static calculateRank(matchingCount, bonusMatch) {
    switch (matchingCount) {
      case 6:
        return 1;
      case 5:
        return bonusMatch ? 2 : 3;
      case 4:
        return 4;
      case 3:
        return 5;
      default:
        return 0;
    }
  }

  static getFinalMoney(rankBoard) {
    const { rankMoney } = RANK;
    const rankArr = Object.entries(rankBoard);
    return rankArr.reduce((money, [rank, count]) => money + count * rankMoney[rank], 0);
  }

  static getProfitAbility(initalMoney, finalMoney) {
    const profitAbility = finalMoney / initalMoney;
    return (profitAbility * 100).toFixed(1);
  }

  static getResult(lottos, winningNumbers, bonusNumber) {
    const rankBoard = Lotto.getRankBoard(lottos, winningNumbers, bonusNumber);
    const initalMoney = lottos.length * PURCHASE_PRICE.divisionUnit;
    const finalMoney = Lotto.getFinalMoney(rankBoard);
    const profitAbility = Lotto.getProfitAbility(initalMoney, finalMoney);
    return { rankBoard, profitAbility };
  }
}

export default Lotto;
