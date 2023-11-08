import Lotto from '../src/Lotto.js';
import { ERROR_MESSAGE, LOTTO_NUMBER } from '../src/constants.js';

describe('Lotto 클래스 테스트', () => {
  test('유효한 로또 번호일 경우.', () => {
    const validNumbers = [1, 2, 3, 4, 5, 6];
    const lotto = new Lotto(validNumbers);
    expect(lotto.getNumbers()).toEqual(validNumbers);
  });

  test('6개가 아닌 로또 번호일 경우 예외 처리', () => {
    const invalidNumbers = [1, 2, 3, 4, 5, 6, 7];
    expect(() => new Lotto(invalidNumbers)).toThrow(ERROR_MESSAGE.duplicationWinningNumbers);
  });

  test('중복된 로또 번호일 경우 예외 처리', () => {
    const invalidNumbers = [1, 2, 3, 4, 5, 5];
    expect(() => new Lotto(invalidNumbers)).toThrow(ERROR_MESSAGE.duplicationWinningNumbers);
  });

  test('로또번호가 6개이고 1부터 45 사이의 수이다.', () => {
    const lotto = new Lotto();
    const numbers = lotto.getNumbers();

    expect(numbers.length).toBe(6);
    expect(numbers.every((number) => number >= LOTTO_NUMBER.inRangeFrom && number <= LOTTO_NUMBER.inRangeTo)).toBe(
      true,
    );
  });

  test('로또 번호가 오름차순으로 정렬되어 있다.', () => {
    const lotto = new Lotto();
    const numbers = lotto.getNumbers();

    for (let i = 0; i < numbers.length - 1; i += 1) {
      expect(numbers[i] < numbers[i + 1]).toBe(true);
    }
  });
});
