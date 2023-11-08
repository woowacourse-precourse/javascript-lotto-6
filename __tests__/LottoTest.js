import Lotto from '../src/models/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('중복');
  });

  test('로또 번호가 1~45 사이가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow('사이의 수');
  });

  test('정렬 테스트', () => {
    const input = [17, 3, 26, 19, 15, 22];
    const answer = [3, 15, 17, 19, 22, 26];
    const lotto = new Lotto(input);
    const result = lotto.getLotto();
    expect(result).toEqual(answer);
  });
});
