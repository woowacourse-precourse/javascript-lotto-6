import Lotto from '../src/domain/Lotto';
import { ERROR_MESSAGES } from '../src/constants/Errors';

describe('로또 클래스 테스트', () => {
  describe.each([
    // 유효한 로또 번호로 테스트
    [[1, 2, 3, 4, 5, 6]],
    [[7, 8, 9, 10, 11, 12]],
    [[13, 14, 15, 16, 17, 18]],

    // 유효하지 않은 로또 번호로 테스트
    [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGES.invalidLottoNumberLength],
    [[1, 2, 3, 4, 5, 5], ERROR_MESSAGES.invalidLottoNumberDuplicate],
    [[1, 2, 'A', 4, 5, 6], ERROR_MESSAGES.invalidLottoNumberType],
    [[0, 2, 3, 47, 5, 6], ERROR_MESSAGES.invalidLottoNumberRange],
  ])('Lotto 인스턴스 테스트: %p', (numbers, errorMessage) => {
    test('로또 인스턴스 생성', () => {
      if (errorMessage) {
        expect(() => new Lotto(numbers)).toThrow(errorMessage);
      } else {
        expect(() => new Lotto(numbers)).not.toThrow();
      }
    });
  });
});
