/* eslint-disable no-new */
import Bonus from '../src/bonus';

describe('보너스 클래스 테스트', () => {
  test('보너스 번호에 로또 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 3);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 1~45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 6, 5], 56);
    }).toThrow('[ERROR]');
  });

  test('보너스 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 6, 5], 'bonus');
    }).toThrow('[ERROR]');
  });
});
