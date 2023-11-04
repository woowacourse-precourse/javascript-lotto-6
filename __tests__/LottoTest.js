import Lotto from '../src/Lotto.js';
import { ERROR_MESSAGE } from '../src/constant';
import { getErrorMessage } from '../src/uttils/MessageFactory.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(getErrorMessage(ERROR_MESSAGE.sixNumbers));
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(getErrorMessage(ERROR_MESSAGE.duplicateNumber));
  });

  test('로또 클래스는 숫자배열을 파라미터로 받으며, 그렇지 않을 경우 예외가 발생한다.', () => {
    const numbers = [1, 2, 3, 4, 5];
    const wrongItems = [
      NaN,
      null,
      undefined,
      true,
      false,
      '하나',
      '1',
      '',
      { number: 1 },
    ];

    wrongItems.forEach((v) => {
      expect(() => {
        new Lotto(numbers.concat(v));
      }).toThrow(getErrorMessage(ERROR_MESSAGE.isNotNumberArray));
    });

    expect(() => {
      new Lotto('1,2,3,4,5,6');
    }).toThrow(getErrorMessage(ERROR_MESSAGE.isNotNumberArray));
  });

  test('로또 번호가 1부터 45외의 숫자가 포함되어 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 0]);
    }).toThrow(getErrorMessage(ERROR_MESSAGE.range));

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(getErrorMessage(ERROR_MESSAGE.range));
  });

  test('로또 번호는 오름차순으로 정렬되어야 한다.', () => {
    const numbers = [6, 5, 4, 3, 2, 1];
    const correctNumbers = [1, 2, 3, 4, 5, 6];

    const lottoNumbers = new Lotto(numbers).getLottoNumbers();

    expect(lottoNumbers.join(',')).toBe(correctNumbers.join(','));
  });
});
