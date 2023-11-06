import Lotto from '../src/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR] 로또 번호는 6개여야 합니다.');
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR] 중복된 숫자가 있습니다.');
  });

  test('로또 번호가 45보다 크면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([10, 20, 30, 40, 45, 46]);
    }).toThrow('[ERROR] 로또 번호는 1부터 45사이의 숫자여야 합니다.');
  });
});
