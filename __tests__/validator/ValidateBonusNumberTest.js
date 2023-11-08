import ERROR from '../../src/constant/Error.js';
import Lotto from '../../src/domain/Lotto.js';
import LottoNumber from '../../src/domain/LottoNumber.js';
import validateBonusNumber from '../../src/validator/validateBonusNumber.js';

describe('보너스 번호 검증을 위한 테스트', () => {
  const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

  test('중복인 경우 에러 확인', () => {
    const bonusNumber = new LottoNumber(1)

    expect(() => validateBonusNumber(lotto.get(), bonusNumber.get())).toThrow(ERROR.bonusNumberDup);
  });

  test('중복이 아닌 경우 정상 동작', () => {
    const bonusNumber = new LottoNumber(7)

    expect(() => validateBonusNumber(lotto.get(), bonusNumber.get()));
  });
});
