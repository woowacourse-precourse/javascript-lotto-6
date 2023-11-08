import Lotto from '../src/domain/Lotto.js';

describe('로또 클래스 테스트', () => {
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

  test('두 로또 객체를 비교하여 일치하는 숫자의 개수를 반환', () => {
    const win = new Lotto([1, 2, 3, 4, 5, 6]);
    const purchase = new Lotto([1, 2, 3, 4, 5, 6]);
    const matchCount = Lotto.getMatchCount(win, purchase);
    expect(matchCount).toBe(6);
  });
});

