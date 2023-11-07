import Lotto from '../../src/model/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 중 1~45 이외의 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 중 숫자 이외의 타입이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, NaN]);
    }).toThrow('[ERROR]');
  });

  test('getWinningNumbers() 메서드가 기대한 값과 일치하는지 확인한다.', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getWinningNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('getUserLotto() 메서드가 기대한 값과 일치하는지 확인한다.', () => {
    const lotto = new Lotto([10, 20, 30, 40, 41, 42]);
    expect(lotto.getUserLotto()).toEqual([10, 20, 30, 40, 41, 42]);
  });
});
