import Lotto from '../../src/domains/Lotto.js';
import { LottoDuplicatedError, LottoLengthError, LottoRangeError, LottoTypeError } from '../../src/error/Errors';

describe('Lotto - 생성 lotto 번호 유효성 검사 테스트', () => {
  test.each([
    [[0, 1, 2, 3, 4, 5]],
    [[0, 6, 2, 47, 4, 2]],
    [[46, 47, 48, 100, 49, 50]],
  ])('로또는 1이상 45 이하여야 한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoRangeError);
  });

  test.each([
    [[1, 2, 3]],
    [[1]],
    [[1, 2, 3, 4, 5, 6, 7]],
  ])('로또는 6개여야 한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoLengthError);
  });

  test.each([
    [['일', 2, 3, 4, 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'f']],
    [[-1, 0, 3.14, 5, 6, 7]],
  ])('로또는 숫자로 이루어져야 한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoTypeError);
  });

  test.each([
    [[1, 1, 3, 4, 5, 6]],
    [[30, 1, 3, 2, 30, 40]],
  ])('로또에 중복되는 숫자는 없어야 한다.', (numbers) => {
    const result = () => new Lotto(numbers);

    expect(result).toThrowError(LottoDuplicatedError);
  });
});
