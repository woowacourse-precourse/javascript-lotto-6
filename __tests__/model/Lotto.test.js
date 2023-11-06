import Lotto from '../../src/model/Lotto';
import { ERROR_MESSAGES } from '../../src/constants/ErrorMessages';

describe('Lotto 클래스', () => {
  const validNumbers = [5, 10, 15, 20, 25, 30];

  test('유효한 번호들로 Lotto 인스턴스가 정상적으로 생성되어야 한다.', () => {
    const lotto = new Lotto(validNumbers);
    expect(lotto.numbers).toEqual(validNumbers.sort((a, b) => a - b));
  });

  test('번호의 개수가 올바르지 않으면 오류를 발생시켜야 한다.', () => {
    const invalidNumbers = [5, 10, 15];
    expect(() => new Lotto(invalidNumbers)).toThrow(ERROR_MESSAGES.INVALID_NUMBERS_COUNT);
  });

  test('중복된 번호가 있으면 오류를 발생시켜야 한다.', () => {
    const duplicateNumbers = [5, 10, 10, 20, 25, 30];
    expect(() => new Lotto(duplicateNumbers)).toThrow(ERROR_MESSAGES.DUPLICATE_NUMBERS);
  });

  test('번호가 유효 범위를 벗어나면 오류를 발생시켜야 한다.', () => {
    const outOfRangeNumbers = [0, 10, 20, 30, 46, 60];
    expect(() => new Lotto(outOfRangeNumbers)).toThrow(ERROR_MESSAGES.NUMBER_OUT_OF_RANGE);
  });

  test('당첨 번호와 일치하는 번호의 개수를 정확하게 계산한다', () => {
    const lotto = new Lotto(validNumbers);
    const winningNumbers = [3, 5, 10, 20, 30, 40];
    const matchCount = lotto.matchNumbers(winningNumbers);
    expect(matchCount).toBe(4);
  });
});
