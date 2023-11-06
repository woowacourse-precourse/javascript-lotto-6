import { ERROR } from '../src/Message.js';
import WinningLotto from '../src/WinningLotto.js';

describe('당첨 번호 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.notSix);
  });
  test('로또 번호의 개수가 6개보다 적으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR.notSix);
  });

  test('보너스 번호가 1에서 45 사이의 숫자가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 46);
    }).toThrow(ERROR.notOneToFortyFive);
  });

  test('로또 번호 중에 보너스 번호가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 6);
    }).toThrow(ERROR.notUniqueBonusNumber);
  });

  test('예외가 발생하지 않는 경우', () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6], 9);
    }).not.toThrow();
  });
});
