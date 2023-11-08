import Lotto from '../src/model/Lotto.js';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // 아래에 추가 테스트 작성 가능

  test('허용 숫자의 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([-1, -2, -100, 100, 60, 50]);
    }).toThrow('[ERROR]');
  });

  test('몇 등인지 반환하는 함수 테스트', () => {
    const winningNumber = [1, 2, 3, 4, 5, 7];
    const bonusLottoNumber = 6;
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const obj = { allCount: 6, bonus: true };
    lotto.getNumbersCount = jest.fn(() => obj);

    expect(lotto.determineRanking(winningNumber, bonusLottoNumber)).toBe('2등');
  });

  test('몇개의 번호를 맞췄는지 반환해주는 함수 테스트', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumber = [1, 2, 3, 4, 5, 7];
    const bonusLottoNumber = 6;

    expect(lotto.getNumbersCount(winningNumber, bonusLottoNumber)).toEqual({
      allCount: 6,
      bonus: true,
    });
  });
});
