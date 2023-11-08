import { Console } from '@woowacourse/mission-utils'
import { RANKS } from '../constants/lotto.js'
import { Rank } from '../types.js'

/**
 * @typedef {import('../domain/Lotto').default} Lotto
 */

const OutputView = {
  /** @param {Lotto[]} lottoList */
  printPurchaseLottoList: (lottoList) => {
    Console.print(`${lottoList.length}개를 구매했습니다.`)
    lottoList.forEach((lotto) => OutputView.printLotto(lotto))
  },

  /** @param {Lotto} lotto */
  printLotto: (lotto) => {
    const lottoNumbers = lotto.getLotto()
    const sortedLottoNumbers = [...lottoNumbers].sort((a, b) => a - b)
    Console.print('[' + sortedLottoNumbers.join(', ') + ']')
  },

  /** @param {{ winningCount: string }[]} winningStatistics */
  printWinningStatistics: (winningStatistics) => {
    Console.print('당첨 통계')
    Console.print('---')

    RANKS.forEach((rank) => {
      const winningCount = winningStatistics[rank.index].winningCount
      OutputView.printRank(rank, winningCount)
    })
  },

  /** @param {number} profitRate */
  printProfitRate: (profitRate) => {
    const profitRateString = profitRate.toLocaleString('ko-KR', {
      style: 'percent',
      minimumFractionDigits: 1,
    })

    Console.print(`총 수익률은 ${profitRateString}입니다.`)
  },

  /**
   *
   * @param {Rank} rank
   * @param {number} winningCount
   */
  printRank: (rank, winningCount) => {
    const { matchCount, winning_price } = rank

    const matchString = `${matchCount}개 일치${rank.isBonusMatch ? ', 보너스 볼 일치' : ''}`
    const winningPriceString = `${winning_price.toLocaleString('ko-KR')}원`
    const winningCountString = `${winningCount}개`

    Console.print(`${matchString} (${winningPriceString}) - ${winningCountString}`)
  },

  /** @param {Error} error */
  printError: (error) => {
    Console.print(error.message)
  },

  printEmptyLine: () => {
    Console.print('')
  },
}

export default OutputView
