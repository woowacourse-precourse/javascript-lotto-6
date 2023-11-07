import { Console } from '@woowacourse/mission-utils'
import { RANKS } from '../constants/lotto'

const OutputView = {
  printPurchaseLottoList: (lottoList) => {
    Console.print(`${lottoList.length}개를 구매했습니다.`)
    lottoList.forEach((lotto) => OutputView.printLotto(lotto))
  },

  printLotto: (lotto) => {
    const copiedLotto = [...lotto]
    const sortedLotto = copiedLotto.sort((a, b) => a - b)
    Console.print('[' + sortedLotto.join(', ') + ']')
  },

  /**
   *
   * @param {{ rankType: string, winningCount: string }[]} winningStatistics
   */
  printWinningStatistics: (winningStatistics) => {
    Console.print('당첨 통계')
    Console.print('---')

    RANKS.forEach((rank) => {
      const winningStat = winningStatistics.find(
        (stat) => stat.rankType.toUpperCase() === rank.rankType.toUpperCase()
      )
      OutputView.printRank(rank, winningStat.winningCount)
    })

    Console.print('---')
  },

  /**
   *
   * @param {number} profitRate
   */
  printProfitRate: (profitRate) => {
    const profitRateString = profitRate.toLocaleString('ko-KR', {
      style: 'percent',
      minimumFractionDigits: 1,
    })

    Console.print(profitRateString)
  },

  /**
   *
   * @param {{ match: number, isBonus: boolean, winning_price: number }} rank
   * @param {number} winningCount
   */
  printRank: (rank, winningCount) => {
    const { match, winning_price } = rank

    const matchString = `${match}개 일치${rank.isBonus ? ', 보너스 볼 일치' : ''}`
    const winningPriceString = `${winning_price.toLocaleString('ko-KR')}원`
    const winningCountString = `${winningCount}개`

    Console.print(`${matchString} (${winningPriceString}) - ${winningCountString}개`)
  },
}

export default OutputView
