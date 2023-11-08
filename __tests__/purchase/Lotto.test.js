import Lotto from '../../src/purchase/Lotto.js';
import {
  LottoLengthError,
  LottoRangeError,
  LottoTypeError,
  LottoDuplicatedError,
} from '../../src/error/CustomErrors.js';

describe('purchase/lotto : 생성 lotto 번호 유효성 검사 테스트', () => {
  test.each([
    [[0, 1, 2, 3, 4, 5]],
    [[0, 6, 2, 47, 4, 2]],
    [[46, 47, 48, 100, 49, 50]],
  ])(
    '로또는 1이상 45 이하여야 한다. 그렇지 않은 경우 LottoRangeError를 반환한다.',
    numbers => {
      expect(() => new Lotto(numbers)).toThrowError(LottoRangeError);
    },
  );

  test.each([[[1, 2, 3]], [[1]], [[1, 2, 3, 4, 5, 6, 7]]])('로또는 6개여야 한다. 그렇지 않은 경우 LottoLengthError를 반환한다.',
    numbers => {
      expect(() => new Lotto(numbers)).toThrowError(LottoLengthError);
    },
  );

  test.each([
    [['일', 2, 3, 4, 5, 6]],
    [['a', 'b', 'c', 'd', 'e', 'f']],
    [[-1, 0, 3.14, 5, 6, 7]],
  ])(
    '로또는 숫자로 이루어져야 한다. 그렇지 않은 경우 LottoTypeError를 반환한다.',
    numbers => {
      expect(() => new Lotto(numbers)).toThrowError(LottoTypeError);
    },
  );

  test.each([[[1, 1, 3, 4, 5, 6]], [[30, 1, 3, 2, 30, 40]]])(
    '로또에 중복되는 숫자는 없어야 한다. 그렇지 않은 경우 LottoDuplicatedError를 반환한다.',
    numbers => {
      expect(() => new Lotto(numbers)).toThrowError(LottoDuplicatedError);
    },
  );
});

describe('purchase/lotto : 로또 번호 반환값 테스트', () => {
  test.each([[[1, 2, 3, 4, 5, 6]], [[5, 10, 15, 20, 25, 30]]])(
    'lotto의 생성값과, getNumbers의 반환값이 동일해야 한다.',
    numbers => {
      const lotto = new Lotto(numbers);
      const result = lotto.get();

      expect(result).toEqual(numbers);
    },
  );
});
