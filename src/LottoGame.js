import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
  MAX_NUMBER,
  MIN_NUMBER,
  NUMBERS_COUNT,
  TICKET_PRICE,
  PRIZE_INFO,
} from './constants/Constants.js';
import { isValidAmount } from './utils/Utils.js';

class LottoGame {
  #lottos;

  #winningNumbers;

  #bonusNumber;

  constructor() {
    this.#lottos = [];
    this.#winningNumbers = [];
    this.#bonusNumber = null;
  }

  purchaseTickets(amount) {
    if (!isValidAmount(amount)) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
    }

    const numberOfTickets = amount / TICKET_PRICE;
    for (let i = 0; i < numberOfTickets; i += 1) {
      this.#lottos.push(Lotto.generateRandom());
    }
  }

  drawWinningNumbers() {
    this.#winningNumbers = Random.pickUniqueNumbersInRange(
      MIN_NUMBER,
      MAX_NUMBER,
      NUMBERS_COUNT,
    );
    do {
      this.#bonusNumber = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    } while (this.#winningNumbers.includes(this.#bonusNumber));
  }

  calculateResults() {
    const results = this.#lottos.map((lotto) => {
      const matchedNumbers = lotto
        .getNumbers()
        .filter((number) => this.#winningNumbers.includes(number)).length;
      const hasBonus = lotto.getNumbers().includes(this.#bonusNumber);

      // Determine the rank based on matched numbers and bonus number
      const rank = this.#determineRank(matchedNumbers, hasBonus);

      return {
        numbers: lotto.getNumbers(),
        matchedNumbers,
        rank,
        prize: PRIZE_INFO[rank]?.prize || 0,
      };
    });

    return results;
  }

  #determineRank(matchedNumbers, hasBonus) {
    switch (matchedNumbers) {
      case 6:
        return 'FIRST';
      case 5:
        return hasBonus ? 'SECOND' : 'THIRD';
      case 4:
        return 'FOURTH';
      case 3:
        return 'FIFTH';
      default:
        return null;
    }
  }
}

export default LottoGame;
