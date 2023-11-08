import Lotto from '../src/Lotto.js';
import { WinningNumberErrorMessage } from '../src/models/message.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(WinningNumberErrorMessage.WrongNumber);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(WinningNumberErrorMessage.Duplicate);
  });

  test('로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.5]);
    }).toThrow(WinningNumberErrorMessage.NotInteger);
  });

  test('로또 번호가 1 ~ 45 사이의 숫자가 아닐경우 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(WinningNumberErrorMessage.OutOfRange);
  });
});
