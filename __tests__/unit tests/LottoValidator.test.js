import LottoValidator from '../../src/utils/validators/LottoValidator';
import CustomError from '../../src/errors/CustomError';
import ERROR from '../../src/utils/constants/error';
import NUMBER from '../../src/utils/constants/number';

describe('LottoValidator 클래스', () => {
  describe('validateMoneyAmount 메서드', () => {
    it('단위 금액으로 나누어 떨어지지 않는 금액에 대해 오류를 던진다', () => {
      const moneyAmount = NUMBER.game.money.unitAmount - 1;
      expect(() => LottoValidator.validateMoneyAmount(moneyAmount)).toThrow(
        CustomError,
      );
      expect(() => LottoValidator.validateMoneyAmount(moneyAmount)).toThrow(
        ERROR.moneyAmount.notDivisibleByUnitAmount,
      );
    });

    it('단위 금액으로 나누어 떨어지는 금액에 대해서는 오류를 던지지 않는다', () => {
      const moneyAmount = NUMBER.game.money.unitAmount;
      expect(() =>
        LottoValidator.validateMoneyAmount(moneyAmount),
      ).not.toThrow();
    });
  });

  describe('validateLottoNumbers 메서드', () => {
    it('범위를 벗어나는 숫자가 포함된 경우 오류를 던진다', () => {
      const numbers = [0, 1, 2, 3, 46, 57];
      expect(() => LottoValidator.validateLottoNumbers(numbers)).toThrow(
        CustomError,
      );
      expect(() => LottoValidator.validateLottoNumbers(numbers)).toThrow(
        ERROR.lottoNumber.notInRange,
      );
    });

    it('길이가 부적절한 경우 오류를 던진다', () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7];
      expect(() => LottoValidator.validateLottoNumbers(numbers)).toThrow(
        CustomError,
      );
      expect(() => LottoValidator.validateLottoNumbers(numbers)).toThrow(
        ERROR.lottoNumber.invalidLength,
      );
    });

    it('중복된 숫자가 있는 경우 오류를 던진다', () => {
      const numbers = [1, 1, 2, 3, 4, 5];
      expect(() => LottoValidator.validateLottoNumbers(numbers)).toThrow(
        CustomError,
      );
      expect(() => LottoValidator.validateLottoNumbers(numbers)).toThrow(
        ERROR.lottoNumber.isDuplicated,
      );
    });

    it('유효한 번호들에 대해서는 오류를 던지지 않는다', () => {
      const numbers = [1, 2, 3, 4, 5, 6];
      expect(() => LottoValidator.validateLottoNumbers(numbers)).not.toThrow();
    });
  });

  describe('validateBonusNumber 메서드', () => {
    it('당첨 번호에 포함된 보너스 번호에 대해 오류를 던진다', () => {
      const bonusNumber = 1;
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() =>
        LottoValidator.validateBonusNumber(bonusNumber, winningNumbers),
      ).toThrow(CustomError);
    });

    it('범위를 벗어난 보너스 번호에 대해 오류를 던진다', () => {
      const bonusNumber = NUMBER.game.bonus.maxNumber + 1;
      const winningNumbers = Array(NUMBER.game.lotto.length).fill(
        NUMBER.game.lotto.minNumber,
      );
      expect(() =>
        LottoValidator.validateBonusNumber(bonusNumber, winningNumbers),
      ).toThrow(CustomError);
      expect(() =>
        LottoValidator.validateBonusNumber(bonusNumber, winningNumbers),
      ).toThrow(ERROR.bonusNumber.notInRange);
    });

    it('유효한 보너스 번호에 대해서는 오류를 던지지 않는다', () => {
      const bonusNumber = 1;
      const winningNumbers = [2, 3, 4, 5, 6, 7];
      expect(() =>
        LottoValidator.validateBonusNumber(bonusNumber, winningNumbers),
      ).not.toThrow();
    });
  });
});
