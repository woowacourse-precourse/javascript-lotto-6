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

class LottoMachine {
  /**
   * @type {Lotto[]}
   */
  #lottos
  /**
   * @type {WinningLotto}
   */
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

  /**
   *
   * @returns {Lotto[]} lottos
   */
  getLottos() {
    return this.#lottos
  }

  /**
   *
   * @returns {WinningLotto} winningLotto
   */
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
   * @returns  {{ winningCount: number }[]}
   */
  calculateWinningStatistics() {
    const initWinningStatistics = Array.from({ length: RANKS.length }, () => ({
      winningCount: 0,
    }))

    const winningStatistics = this.#lottos.reduce((acc, lotto) => {
      const lottoNumbers = lotto.getLotto()
      const winningNumbers = this.#winningLotto.getLotto()
      const bonusNumber = this.#winningLotto.getBonusNumber()
      const rank = this.getLottoRank(lottoNumbers, winningNumbers, bonusNumber)
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
   * @returns {{ matchCount: number, isBonusMatch: boolean, winning_price: number, index: number} | undefined} rank
   */
  getLottoRank(lottoNumbers, winningNumbers, bonusNumber) {
    const matchCount = getMatchCount(lottoNumbers, winningNumbers)
    const isBonusMatch = hasLottoNumber(lottoNumbers, bonusNumber)

    //TODO: 리팩토링 필요
    const rank = RANKS.find((RANK) => {
      if (RANK.matchCount === matchCount) {
        if (RANK.index === THIRD.index) {
          return RANK.isBonusMatch === isBonusMatch
        }

        return true
      }

      return false
    })

    return rank
  }

  /**
   *
   * @param {{ winningCount: number }[]} winningStatistics
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
}

export default LottoMachine
