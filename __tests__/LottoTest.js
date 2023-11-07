import { ERROR } from '../src/constant/constant.js';
import Lotto from '../src/model/Lotto.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.length);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.duplicated);
  });

  test('로또 번호가 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 99])).toThrow(ERROR.range);
  });

  test('로또 번호가 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 'asdf'])).toThrow(ERROR.numberOnly);
  });
});
