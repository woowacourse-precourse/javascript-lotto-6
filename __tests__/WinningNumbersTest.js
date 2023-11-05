import { ERROR } from '../src/constant/index';
import WinningNumbers from '../src/WinningNumbers';

describe('WinningNumbers 클래스 테스트', () => {
  test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow(ERROR.WINNING_NUMBERS.LENGTH);
  });

  test('당첨 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new WinningNumbers([1, 1, 2, 5, 7, 27]);
    }).toThrow(ERROR.WINNING_NUMBERS.UNIQE);
  });

  test.each([[[0, 1, 2, 3, 4, 5]], [[46, 1, 2, 3, 4, 5]]])(
    '당첨 번호가 1과 45 사이의 숫자가 아니라면 예외가 발생한다.',
    number => {
      expect(() => {
        new WinningNumbers(number);
      }).toThrow(ERROR.WINNING_NUMBERS.RANGE);
    }
  );
});
