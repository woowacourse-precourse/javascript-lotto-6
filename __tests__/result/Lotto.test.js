import Lotto from '../../src/result/Lotto.js';
import {
  LottoLengthError,
  LottoRangeError,
  LottoTypeError,
  LottoDuplicatedError
} from '../../src/error/CustomErrors.js';

describe('result/lotto : 생성 lotto 번호 유효성 검사 테스트', () => {
  test.each([
    [[0, 1, 2, 3, 4, 5]],
    [[0, 6, 2, 47, 4, 2]],
    [[46, 47, 48, 100, 49, 50]],
  ])('로또는 1이상 45 이하여야 한다. 그렇지 않은 경우 LottoRangeError를 반환한다.', (numbers) => {

    expect(() => new Lotto(numbers)).toThrowError(LottoRangeError);
  });

  test.each([
    [[1, 2, 3]],
    [[1]],
    [[1, 2, 3, 4, 5, 6, 7]],
  ])('로또는 6개여야 한다. 그렇지 않은 경우 LottoLengthError를 반환한다.', (numbers) => {

    expect(() => new Lotto(numbers)).toThrowError(LottoLengthError);
  });

  test.each([
    [['일', 2, 3, 4, 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'f']],
    [[-1, 0, 3.14, 5, 6, 7]],
  ])('로또는 숫자로 이루어져야 한다. 그렇지 않은 경우 LottoTypeError를 반환한다.', (numbers) => {

    expect(() => new Lotto(numbers)).toThrowError(LottoTypeError);
  });

  test.each([
    [[1, 1, 3, 4, 5, 6]],
    [[30, 1, 3, 2, 30, 40]],
  ])('로또에 중복되는 숫자는 없어야 한다. 그렇지 않은 경우 LottoDuplicatedError를 반환한다.', (numbers) => {

    expect(() => new Lotto(numbers)).toThrowError(LottoDuplicatedError);
  });
});

describe('result/lotto : 로또 번호 등수 산정 테스트', () => {
  const RAFFLE = [1,2,3,4,5,6];
  const BONUS = 7;

  test.each([
    [[1, 2, 3, 4, 5, 6]],
  ])('당첨 번호와 로또 번호가 6개 일치하면 1등("1")을 반환한다.', (numbers) => {
    const lotto = new Lotto(numbers);
    const result = lotto.getRank(RAFFLE, BONUS)

    expect(result).toEqual('1');
  });

  test.each([
    [[1, 2, 3, 4, 5, 7]],
    [[1, 3, 4, 5, 6, 7]],
  ])('당첨 번호와 로또 번호가 5개 일치하고 보너스 번호가 일치하면 2등("2")을 반환한다.', (numbers) => {
    const lotto = new Lotto(numbers);
    const result = lotto.getRank(RAFFLE, BONUS)

    expect(result).toEqual('2');
  });

  test.each([
    [[1, 2, 3, 4, 5, 10]],
    [[2, 3, 4, 5, 6, 12]],
  ])('당첨 번호와 로또 번호가 5개 일치하면 3등("3")을 반환한다.', (numbers) => {
    const lotto = new Lotto(numbers);
    const result = lotto.getRank(RAFFLE, BONUS)

    expect(result).toEqual('3');
  });

  test.each([
    [[1, 2, 3, 6, 12, 24]],
    [[3, 4, 5, 6, 7, 8]],
  ])('당첨 번호와 로또 번호가 4개 일치하면 4등("4")을 반환한다.', (numbers) => {
    const lotto = new Lotto(numbers);
    const result = lotto.getRank(RAFFLE, BONUS)

    expect(result).toEqual('4');
  });

  test.each([
    [[1, 2, 3, 43, 44, 45]],
    [[1, 3, 5, 7, 9, 11]],
  ])('당첨 번호와 로또 번호가 3개 일치하면 5등("5")을 반환한다.', (numbers) => {
    const lotto = new Lotto(numbers);
    const result = lotto.getRank(RAFFLE, BONUS)

    expect(result).toEqual('5');
  });
});