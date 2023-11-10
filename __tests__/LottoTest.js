import Lotto from '../src/Lotto.js';
import { ERROR_MESSAGE } from '../src/constant';
import { getErrorMessage } from '../src/utils/MessageFactory.js';
import { getRandomNumbers } from '../src/utils/RandomNumbers.js';

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
    const NUMBERS = [1, 2, 3, 4, 5];
    const LAST_ITEMS = [
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

    const WRONG_LOTTO_NUMBERS = '1,2,3,4,5,6';

    LAST_ITEMS.forEach((v) => {
      expect(() => {
        new Lotto(NUMBERS.concat(v));
      }).toThrow(getErrorMessage(ERROR_MESSAGE.isNotNumberArray));
    });

    expect(() => {
      new Lotto(WRONG_LOTTO_NUMBERS);
    }).toThrow(getErrorMessage(ERROR_MESSAGE.isNotNumberArray));
  });

  test('로또 번호가 1부터 45외의 숫자가 포함되어 있으면 예외가 발생한다.', () => {
    const NUMBERS = [1, 2, 3, 4, 5];
    const wrongNumbers = [0, ...getRandomNumbers({ min: 46, max: 100 }, 1)];

    wrongNumbers.forEach((v) => {
      expect(() => {
        new Lotto(NUMBERS.concat(v));
      }).toThrow(getErrorMessage(ERROR_MESSAGE.range));
    });
  });

  test('로또 번호는 오름차순으로 정렬되어야 한다.', () => {
    const NUMBERS = [6, 5, 4, 3, 2, 1];
    const SORTED_NUMBERS = [1, 2, 3, 4, 5, 6];

    const lottoNumbers = new Lotto(NUMBERS).getLottoNumbers();
    expect(lottoNumbers).toEqual(SORTED_NUMBERS);
  });
});
