import { LOTTO_ERROR_MESSAGE } from '../../src/constants/LottoMessage.js';
import Lotto from '../../src/Lotto.js';

describe('로또 모델 테스트', () => {
  // given
  test.each([
    {
      winningNumber: 'a',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidCharacter,
    },
    {
      winningNumber: '1,2,3,4,5,6,7',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidInputLength,
    },
    {
      winningNumber: '1,2,3,4,5,5.5',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidNumber,
    },
    {
      winningNumber: '1,2,3,4,5,99',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidNumberRange,
    },
    {
      winningNumber: '1,2,3,4,5,5',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidLottoNumber,
    },
  ])(
    '로또 모델 유효성 검증 테스트',
    ({ winningNumber, expectErrorMessage }) => {
      // when & then
      expect(() => new Lotto(winningNumber)).toThrow(expectErrorMessage);
    }
  );
});
