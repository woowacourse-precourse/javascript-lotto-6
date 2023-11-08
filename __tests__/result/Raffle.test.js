import Raffle from '../../src/result/Raffle.js';
import {
  LottoDuplicatedError,
  LottoLengthError,
  LottoRangeError,
  LottoTypeError,
  BonusIncludedError,
  BonusRangeError,
  BonusTypeError,
} from '../../src/error/CustomErrors.js';

describe('result/raffle : 생성 유효성 테스트', () => {
  test('예외 상황이 아닌 경우 오류를 반환하지 않아야 한다.', () => {
    expect(() => new Raffle([1, 2, 3, 4, 5, 6], 7)).not.toThrow()
  });

  test.each([
    [[0, 1, 2, 3, 4, 5]],
    [[1, 2, 3, 4, 5, 1024]],
    [[45, 46, 47, 48, 49, 50]],
    [[100, 1, 200, 2, 300, 3]],
  ])('당첨 번호는 1 이상 45 이하여야 한다. 그렇지 않으면 LottoRangeError를 반환한다.', (input) => {
    expect(() => new Raffle(input, 7)).toThrowError(LottoRangeError);
  });

  test.each([
    [['일', 2, 3, 4, 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'f']],
    [[-1, 0, 3.14, 5, 6, 7]],
  ])('당첨 번호는 자연수로 이루어져야 한다. 그렇지 않으면 LottoTypeError를 반환한다.', (input) => {
    expect(() => new Raffle(input, 7)).toThrowError(LottoTypeError);
  });

  test.each([
    [[1, 2, 3]],
    [[1]],
    [[1, 2, 3, 4, 5, 6, 7]],
  ])('당첨 번호는 6개여야 한다. 그렇지 않으면 LottoLengthError를 반환한다.', (input) => {
    expect(() => new Raffle(input, 7)).toThrowError(LottoLengthError);
  });

  test.each([
    [[1, 1, 3, 4, 5, 6]],
    [[30, 1, 3, 2, 30, 40]],
  ])('당첨 번호에 중복되는 숫자는 없어야 한다. 그렇지 않으면 LottoDuplicatedError를 반환한다.', (input) => {
    expect(() => new Raffle(input, 7)).toThrowError(LottoDuplicatedError);
  });

  test.each([
    -1, 3.14, 9.81, 'f', '다섯', ' ',
  ])('보너스는 자연수로 이루어져야 한다. 그렇지 않으면 BonusTypeError를 반환한다.', (input) => {
  
    expect(() => new Raffle([1,2,3,4,5,6],input)).toThrowError(BonusTypeError);
  });

  test.each([
    0, 46, 100, 9999,
  ])('보너스는 1 이상 45 이하여야 한다. 그렇지 않으면 BonusRangeError를 반환한다.', (input) => {
    expect(() => new Raffle([1,2,3,4,5,6],input)).toThrowError(BonusRangeError);
  });

  test.each([
    1, 2, 3, 4, 5, 6
  ])('보너스는 당첨번호와 중복되지 않아야 한다. 그렇지 않으면 BonusIncludedError를 반환한다.', (input) => {
    expect(() => new Raffle([1,2,3,4,5,6],input)).toThrowError(BonusIncludedError);
  });
});