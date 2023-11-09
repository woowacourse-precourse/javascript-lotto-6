import Lotto from '../src/model/Lotto.js';
import EXCEPTION from '../src/constant/Exception.js';

describe('로또 클래스 테스트', () => {
  test.each([
    [['1', '2', '3', '4', '5', '6', '7']],
    [['1', '2', '3', '4', '5', '6', '90']],
    [['1']],
    [['1', '2']],
  ])('로또 번호의 개수가 6개가 아닌 경우 예외가 발생한다.', input => {
    const RESULT = () => new Lotto(input);
    expect(RESULT).toThrow(EXCEPTION.lottoLengthError);
  });

  test.each([
    [['1', '2', '3', '4', '5', '5']],
    [['1', '3', '5', '44', '44', '6']],
  ])('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', input => {
    const RESULT = () => new Lotto(input);
    expect(RESULT).toThrow(EXCEPTION.duplicateError);
  });

  test.each([
    [['1', '2', '3', '4', '5', '90']],
    [['200', '2', '4', '5', '45', '3']],
  ])('로또 번호가 범위 내에 포함되지 않으면 예외가 발생한다.', input => {
    const RESULT = () => new Lotto(input);
    expect(RESULT).toThrow(EXCEPTION.outOfRangeError);
  });
});
