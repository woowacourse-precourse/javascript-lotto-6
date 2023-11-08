import Lotto from '../src/model/Lotto';
import { calculateMatchingCount } from '../src/utils/LottoUtil';
import { ERROR } from '../src/Constants';

describe('로또 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR.lottoLengthErrorMessage);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR.lottoDuplicateErrorMessage);
  });

  test('로또 번호에 1 ~ 45 범위를 벗어나는 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 100]);
    }).toThrow(ERROR.lottoRangeErrorMessage);
  });

  test('로또 번호에 숫자가 아닌 문자가 포함되면 에외가 발생한다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow(ERROR.lottoInvalidErrorMessage);
  });

  test('두 로또 번호의 일치하는 숫자 갯수를 반환한다', () => {
    const lottoA = new Lotto([1, 2, 3, 4, 5, 6]);
    const lottoB = new Lotto([5, 6, 7, 8, 9, 10]);
    const count = calculateMatchingCount(lottoA, lottoB);

    expect(count).toEqual(2);
  });
});
