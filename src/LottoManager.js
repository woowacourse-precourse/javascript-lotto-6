import LottoTypeConversion from './util/LottoTypeConversion.js';
import { NUMBER, RANK_RULL_NUMBER, RANK_NUMBER, RANK_WINNING_NUMBER } from './Constants/LottoGame.js';

class LottoManager {
  #lottoPrice;
  #lottos;
  #ranks;

  constructor() {
    this.#lottoPrice = NUMBER.price;
    this.#lottos = [];
    this.#ranks = Array(RANK_RULL_NUMBER.defaultLength).fill(NUMBER.zero);
  }

  lottoTicketExchange(amount) {
    return amount / this.getLottoPrice();
  }

  issueLotto(lottos) {
    lottos.map((lotto) => this.#lottos.push(lotto));
  }

  #compareWinningNumbers(winningNumbers) {
    const result = [];

    this.#lottos.map((lotto) => {
      const winning = lotto.filter((number) => winningNumbers.includes(number));
      result.push(winning.length);
    });

    return result;
  }

  #compareBonusNumber(bonusNumber) {
    const result = [];

    this.#lottos.map((lotto) => {
      const bonus = lotto.includes(LottoTypeConversion.number(bonusNumber));
      result.push(bonus);
    })

    return result;
  }
  
  #rank(winningNumbers, bonusNumber) {
    if (winningNumbers === RANK_NUMBER.six) return RANK_WINNING_NUMBER.one;
    if (winningNumbers === RANK_NUMBER.five && bonusNumber) return RANK_WINNING_NUMBER.two;
    if (winningNumbers === RANK_NUMBER.five) return RANK_WINNING_NUMBER.three;
    if (winningNumbers === RANK_NUMBER.four) return RANK_WINNING_NUMBER.four;
    if (winningNumbers === RANK_NUMBER.three) return RANK_WINNING_NUMBER.five;
  }

  drawingLotto(winningNumbers, bonusNumber) {
    const winnings = this.#compareWinningNumbers(winningNumbers);
    const bonusNumbers = this.#compareBonusNumber(bonusNumber);

    winnings.map((winning, ticket) => {
      const rank = this.#rank(winning, bonusNumbers[ticket]);
      if (rank !== undefined) {
        this.#ranks[rank] += RANK_NUMBER.plus;
      }
    })
  }

  getLottoPrice() {
    return this.#lottoPrice;
  }

  getLottos() {
    return this.#lottos;
  }

  getRanks() {
    return this.#ranks;
  }
}

export default LottoManager;
