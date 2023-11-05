import { Random } from '@woowacourse/mission-utils';
import LOTTO_NUMBER from './constants/lottoNumber.js';
import ERROR from './constants/error.js';
import MessageFormat from './utils/messageFormat.js';
import RANK from './constants/rankBoard.js';

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

  static getRankBoard(lottos, winningNumbers, bonusNumber) {
    const { rankBoard } = RANK;

    lottos.forEach((lotto) => {
      const lottoNum = lotto.getLottoNumbers();
      const matchingNumbers = lottoNum.filter((number) => winningNumbers.includes(number)).length;
      const bonusMatch = lottoNum.includes(bonusNumber);
      const rank = Lotto.calculateRank(matchingNumbers, bonusMatch);
      if (rank) rankBoard[rank] += 1;
    });

    return rankBoard;
  }

  static calculateRank(matchingNumbers, bonusMatch) {
    if (matchingNumbers === 6) {
      return 1;
    }
    if (matchingNumbers === 5 && bonusMatch) {
      return 2;
    }
    if (matchingNumbers === 5) {
      return 3;
    }
    if (matchingNumbers === 4) {
      return 4;
    }
    if (matchingNumbers === 3) {
      return 5;
    }
    return 0;
  }
}

export default Lotto;
