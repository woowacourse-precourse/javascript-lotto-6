import Lotto from '../../src/Lotto';
import LottoError from '../../src/errors/LottoError.js';
import { ERROR_MESSAGES } from '../../src/constants/errorMessages.js';
import { newLottoGenerator } from '../../src/utils/newLottoGenerator.js';

jest.mock('../../src/utils/newLottoGenerator.js', () => ({
  newLottoGenerator: jest.fn(),
}));

describe('로또 클래스 테스트', () => {
  test.each([
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3],
  ])('로또 번호의 개수가 6개가 아닐시에 예외가 발생한다.', (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow();
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(new LottoError(ERROR_MESSAGES.lotto_have_duplication_number));
  });

  describe('로또의 getRandomNums 는 무작위의 숫자를 생성해야한다.', () => {
    test('로또 인스턴스는 유니크한 숫자의 총 6개, 오름차순으로 이루어져야한다.', () => {
      // Mock 된 랜덤 번호
      const mockNumbers = [10, 20, 30, 40, 41, 42];
      newLottoGenerator.mockReturnValue(mockNumbers);

      const lotto = Lotto.getRandomNums();

      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.getNumbers().length).toBe(Lotto.LOTTO_LENGTH);
      expect(lotto.getNumbers()).toEqual(mockNumbers.sort((a, b) => a - b));
      expect(lotto.getNumbers()).toEqual(expect.arrayContaining(mockNumbers));
    });
  });

  test.each([[`1, 2, 'hi', 4, 5, 6`], [`1, 2, ' 12', 4, 5, 6`], [`1, 2, '   ', 4, 5, 6`]])(
    '당첨 번호 입력값에 숫자가 아닌 값이 있으면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Lotto.fromInputString(input);
      }).toThrow(new LottoError(ERROR_MESSAGES.lotto_not_a_number));
    },
  );

  test.each([[`1, 2, 0, 5, 6, 7`], [`1, 2, 3, 87, 5, 6`]])(
    '로또 번호에 범위에 벗어난 값을 입력 받는다면 예외가 발생한다.',
    (input) => {
      expect(() => {
        Lotto.fromInputString(input);
      }).toThrow(new LottoError(ERROR_MESSAGES.lotto_out_of_range));
    },
  );
});
