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

  test.each([
    [1, 2, 3, 4, 5, 0],
    [1, 2, 3, 4, 5, 46],
  ])('번호가 1에서 45사이에 있지 않으면 예외가 발생한다.', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow('[ERROR]');
  });

  test('번호가 오름차순으로 정렬되어 있지 않으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([4, 3, 2, 1, 5, 6]);
    }).toThrow('[ERROR]');
  });
});
