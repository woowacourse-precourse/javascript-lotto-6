import { NUMBER, RANK_RULL_NUMBER, RANK_NUMBER, RANK_WINNING_NUMBER } from './Constants/LottoGame.js';

class LottoManager {
  #lottoPrice
  #lottos
  #ranks

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

  #compareWinningNumber(winningNumber) {
    const result = [];

    this.#lottos.map((lotto) => {
      const winning = lotto.filter((number) => winningNumber.includes(number));
      result.push(winning.length);
    });

    return result;
  }

  #compareBonusNumber(bonusNumber) {
    const result = [];

    this.#lottos.map((lotto) => {
      const bonus = lotto.includes(bonusNumber);
      result.push(bonus);
    })

    return result;
  }
  
  #rank(winningNumber, bonusNumber) {
    if (winningNumber === RANK_NUMBER.six) return RANK_WINNING_NUMBER.one;
    if (winningNumber === RANK_NUMBER.five && bonusNumber) return RANK_WINNING_NUMBER.two;
    if (winningNumber === RANK_NUMBER.five) return RANK_WINNING_NUMBER.three;
    if (winningNumber === RANK_NUMBER.four) return RANK_WINNING_NUMBER.four;
    if (winningNumber === RANK_NUMBER.three) return RANK_WINNING_NUMBER.five;
  }

  drawingLotto(winningNumber, bonusNumber) {
    const winnings = this.#compareWinningNumber(winningNumber);
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
