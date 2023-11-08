import Bonus from '../src/Bonus.js';
import { BonusNumberErrorMessage } from '../src/models/message.js';

describe('보너스 클래스 테스트', () => {
  test('로또 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 5);
    }).toThrow(BonusNumberErrorMessage.Duplicate);
  });

  test('로또 번호에 정수가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 1.5);
    }).toThrow(BonusNumberErrorMessage.NotInteger);
  });

  test('로또 번호가 1 ~ 45 사이의 숫자가 아닐경우 예외가 발생한다.', () => {
    expect(() => {
      new Bonus([1, 2, 3, 4, 5, 6], 46);
    }).toThrow(BonusNumberErrorMessage.OutOfRange);
  });
});
