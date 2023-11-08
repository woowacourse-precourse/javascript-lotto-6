import { MissionUtils } from '@woowacourse/mission-utils'
import { LOTTO_PRICE } from '../src/constants/lotto.js'
import LottoMachine from '../src/domain/LottoMachine.js'
import WinningLotto from '../src/domain/WinningLotto.js'

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn()
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number)
  }, MissionUtils.Random.pickUniqueNumbersInRange)
}

describe('로또 머신 테스트', () => {
  const lottoMachine = new LottoMachine()

  const lottoNumbers = [
    [1, 2, 3, 4, 5, 6], // first
    [2, 3, 4, 5, 6, 7], // second
    [3, 4, 5, 6, 7, 8], // fourth
    [4, 5, 6, 7, 8, 9], // fifth
    [5, 6, 7, 8, 9, 10], // no match
  ]

  mockRandoms(lottoNumbers)

  test('로또 머신 생성', () => {
    expect(lottoMachine).toBeInstanceOf(LottoMachine)
  })

  test('로또를 구매한다.', () => {
    lottoMachine.buyLotto(5000)
    const lottos = lottoMachine.getLottos()
    expect(lottos.length).toBe(5000 / LOTTO_PRICE)
  })

  test('당첨 로또를 생성한다.', () => {
    lottoMachine.createWinningLotto([1, 2, 3, 4, 5, 6], 7)

    const winningLotto = lottoMachine.getWinningLotto()
    expect(winningLotto).toBeInstanceOf(WinningLotto)
  })

  test('당첨 통계를 산출한다.', () => {
    const winningStatistics = lottoMachine.calculateWinningStatistics()
    expect(winningStatistics).toEqual([
      { winningCount: 1 },
      { winningCount: 1 },
      { winningCount: 0 },
      { winningCount: 1 },
      { winningCount: 1 },
    ])
  })

  test('수익률을 계산한다.', () => {
    const winningStatistics = lottoMachine.calculateWinningStatistics()
    const profitRate = lottoMachine.calculateProfitRate(winningStatistics)
    expect(profitRate).toBe((2_000_000_000 + 30_000_000 + 50_000 + 5_000) / (LOTTO_PRICE * 5))
  })
})
