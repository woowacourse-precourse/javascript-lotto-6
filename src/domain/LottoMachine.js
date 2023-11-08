import { Random } from '@woowacourse/mission-utils'
import {
  LOTTO_LENGTH,
  LOTTO_PRICE,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  RANKS,
  THIRD,
} from '../constants/lotto.js'
import Lotto from './Lotto.js'
import WinningLotto from './WinningLotto.js'
import { getMatchCount, hasLottoNumber } from '../utils/lotto.js'
import { WinningStat, Rank } from '../types.js'

class LottoMachine {
  /** @type {Lotto[]} */
  #lottos
  /** @type {WinningLotto} */
  #winningLotto

  constructor() {
    this.#lottos = []
    this.#winningLotto = null
  }

  /**
   *
   * @param {number} money
   */
  buyLotto(money) {
    const lottoCount = money / LOTTO_PRICE
    this.#lottos = Array.from({ length: lottoCount }, () => this.#makeLotto())
  }

  getLottos() {
    return this.#lottos
  }

  getWinningLotto() {
    return this.#winningLotto
  }

  /**
   *
   * @param {number[]} winningNumbers
   * @param {number} bonusNumber
   */
  createWinningLotto(winningNumbers, bonusNumber) {
    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber)
  }

  /**
   *
   * @returns  {WinningStat[]}
   */
  calculateWinningStatistics() {
    const initWinningStatistics = Array.from({ length: RANKS.length }, () => ({
      winningCount: 0,
    }))

    const winningStatistics = this.#lottos.reduce((acc, lotto) => {
      const rank = this.getLottoRank(
        lotto.getLotto(),
        this.#winningLotto.getLotto(),
        this.#winningLotto.getBonusNumber()
      )

      if (!rank) {
        return acc
      }

      acc[rank.index].winningCount += 1

      return acc
    }, initWinningStatistics)

    return winningStatistics
  }

  /**
   *
   * @param {Lotto} lotto
   * @returns {Rank | undefined} rank
   */
  getLottoRank(lottoNumbers, winningNumbers, bonusNumber) {
    const matchCount = getMatchCount(lottoNumbers, winningNumbers)
    const isBonusMatch = hasLottoNumber(lottoNumbers, bonusNumber)

    const rank = RANKS.find((RANK) => this.#isMatch(RANK, matchCount, isBonusMatch))

    return rank
  }

  /**
   *
   * @param {WinningStat[]} winningStatistics
   * @returns {number} profitRate
   */
  calculateProfitRate(winningStatistics) {
    const totalWinningPrice = winningStatistics.reduce((acc, { winningCount }, index) => {
      const { winning_price } = RANKS[index]

      return acc + winningCount * winning_price
    }, 0)

    const totalPurchasePrice = this.#lottos.length * LOTTO_PRICE

    return totalWinningPrice / totalPurchasePrice
  }

  #makeLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_LENGTH
    )
    const sortedLottoNumbers = [...lottoNumbers].sort((a, b) => a - b)

    return new Lotto(sortedLottoNumbers)
  }

  /**
   *
   * @param {Rank} rank
   * @param {number} matchCount
   * @param {number} isBonusMatch
   * @returns
   */
  #isMatch(rank, matchCount, isBonusMatch) {
    if (rank.matchCount !== matchCount) {
      return false
    }

    if (rank.index === THIRD.index) {
      return rank.isBonusMatch === isBonusMatch
    }

    return true
  }
}

export default LottoMachine
