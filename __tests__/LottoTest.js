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
  test('로또 번호에 1 ~ 45 범위의 숫자가 아니면 예외 발생', () => {
    expect(() => {
      new Lotto([1, 2, 3, 46, 6, 5]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([0, 2, 3, 45, 7, 5]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 'a', 3, 45, 8, 5]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 2, 3, '-', 9, 5]);
    }).toThrow('[ERROR]');
    expect(() => {
      new Lotto([1, 2, 2, 3, 9, 5]);
    }).toThrow('[ERROR]');
  });
});
