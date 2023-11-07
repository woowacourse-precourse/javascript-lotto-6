import { LOTTO_ERROR_MESSAGE } from '../../src/constants/LottoMessage.js';
import BonusLotto from '../../src/model/BonusLotto.js';

describe('보너스 로또 모델 테스트', () => {
  // given
  test.each([
    {
      winningNumber: [1, 2, 3, 4, 5, 6],
      winningBonusNumber: 'a',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidCharacter,
    },
    {
      winningNumber: [1, 2, 3, 4, 5, 6],
      winningBonusNumber: '6',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidLottoNumber,
    },
    {
      winningNumber: [1, 2, 3, 4, 5, 6],
      winningBonusNumber: '99',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidNumberRange,
    },
    {
      winningNumber: [1, 2, 3, 4, 5, 6],
      winningBonusNumber: '5.5',
      expectErrorMessage: LOTTO_ERROR_MESSAGE.notAValidNumber,
    },
  ])(
    '보너스 로또 모델 유효성 검증 테스트',
    ({ winningNumber, winningBonusNumber, expectErrorMessage }) => {
      // when & then
      expect(() => new BonusLotto(winningNumber, winningBonusNumber)).toThrow(
        expectErrorMessage
      );
    }
  );
});
