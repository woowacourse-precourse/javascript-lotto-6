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
      new Lotto([1, 2, 3, 4, 55]);
    }).toThrow('[ERROR]');
  });

  test('getWinningNumbers() 메서드가 기대한 값과 일치하는지 확인한다.', () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(numbers);
    expect(lotto.getWinningNumbers()).toEqual(numbers);
  });

  test('getUserLotto() 메서드가 기대한 값과 일치하는지 확인한다.', () => {
    const numbers = [10, 20, 30, 40, 41, 42];
    const lotto = new Lotto(numbers);
    expect(lotto.getUserLotto()).toEqual(numbers);
  });
});
