import Lotto from '../src/domain/Lotto.js'

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7])
    }).toThrow('[ERROR]')
  })

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5])
    }).toThrow('[ERROR]')
  })

  test('로또 번호가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5])
    }).toThrow('[ERROR]')
  })

  test('로또 번호가 6개이고 중복된 숫자가 없으면 생성된다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6])
    expect(lotto).toBeInstanceOf(Lotto)
  })

  test('로또 번호의 숫자가 1 ~ 45 사이가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46])
    }).toThrow('[ERROR]')

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0])
    }).toThrow('[ERROR]')

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, -1])
    }).toThrow('[ERROR]')

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a'])
    }).toThrow('[ERROR]')
  })
})
