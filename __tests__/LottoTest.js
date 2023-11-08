import Lotto from '../src/Lotto.js';
import { ERROR_MESSAGES } from '../src/constant/Constants.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.lottoLength);
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.duplicatedNumber);
  });

  test('로또 번호에 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto(['a', 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.lottoType);
  });

  test('로또 번호가 정해진 범위가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([99, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.lottoRange);
  });
});
