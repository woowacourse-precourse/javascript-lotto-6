import Lotto from '../src/Lotto.js';

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

  // 아래에 추가 테스트 작성 가능
  test('발행된 로또가 당첨 번호와 전부 받았을 경우 6을 리턴한다', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.computeMatchWithLotto([1, 2, 3, 4, 5, 6])).toBe(6);
    expect(lotto.computeMatchWithLotto([1, 2, 3, 4, 5, 7])).not.toBe(6);
  });
});
