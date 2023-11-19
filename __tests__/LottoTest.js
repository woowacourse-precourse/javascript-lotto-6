import Lotto from '../src/Lotto.js';
import { ERROR_MESSAGE } from '../src/Constants.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_SIX);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.SAME_NUMBER);
  });

  // 아래에 추가 테스트 작성 가능
  test('로또 번호에 입력값이 없으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.NOTHING);
  });

  test('로또 번호에 숫자 이외의 것이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'j']);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.NOT_A_NUMBER);
  });

  test('로또 번호가 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 51]);
    }).toThrow(ERROR_MESSAGE.LOTTO_NUMBERS.OUT_OF_RANGE);
  });
});
