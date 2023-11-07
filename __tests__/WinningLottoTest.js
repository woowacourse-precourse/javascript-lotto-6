import WinningLotto from '../src/domain/WinningLotto.js'

describe('당첨 로또 테스트', () => {
  test('보너스 번호가 로또 번호에 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 6)
    }).toThrow('[ERROR]')
  })

  test('보너스 번호가 로또 번호에 포함되지 않으면 생성된다.', () => {
    const winningLotto = new WinningLotto([1, 2, 3, 4, 5, 6], 7)
    expect(winningLotto).toBeInstanceOf(WinningLotto)
  })

  test('보너스 번호가 1 ~ 45 사이가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 0)
    }).toThrow('[ERROR]')

    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 46)
    }).toThrow('[ERROR]')

    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], -1)
    }).toThrow('[ERROR]')

    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 'a')
    }).toThrow('[ERROR]')
  })
})
