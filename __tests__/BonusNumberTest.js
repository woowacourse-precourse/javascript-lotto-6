import { ERROR } from '../src/constant/index';
import BonusNumber from '../src/BonusNumber';

describe('보너스 번호 예외 테스트', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test('보너스 번호가 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumbers, '23a');
    }).toThrow(ERROR.BONUS_NUMBER.NUMBER);
  });

  test('보너스 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumbers, '56');
    }).toThrow(ERROR.BONUS_NUMBER.RANGE);
  });

  test('보너스 번호가 당첨 번호와 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(winningNumbers, '1');
    }).toThrow(ERROR.BONUS_NUMBER.UNIQE);
  });
});
