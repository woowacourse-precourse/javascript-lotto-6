import { ERROR_MESSAGES } from '../src/constants/messages.js';
import Validator from '../src/validators/Validator.js';

describe('유효성 검사 로직 테스트', () => {
  test('1,000으로 나누어 떨어지지 않는 구입금액', () => {
    const purchaseAmount = 8001;

    expect(() => {
      Validator.validatePurchaseAmount(purchaseAmount);
    }).toThrow(ERROR_MESSAGES.invalidAmount);
  });

  test('올바르지 않은 구입금액 데이터 타입', () => {
    const purchaseAmount = Number('1000a');

    expect(() => {
      Validator.validatePurchaseAmount(purchaseAmount);
    }).toThrow(ERROR_MESSAGES.invalidType);
  });

  test('구매한도를 초과한 구입금액 입력', () => {
    const purchaseAmount = 110000;

    expect(() => {
      Validator.validatePurchaseAmount(purchaseAmount);
    }).toThrow(ERROR_MESSAGES.invalidPurchaseRange);
  });

  test('6개를 초과한 당첨 번호 입력', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    expect(() => {
      Validator.validateLottoNumbers(numbers);
    }).toThrow(ERROR_MESSAGES.invalidNumberLength);
  });

  test('중복된 요소가 존재하는 당첨 번호 입력', () => {
    const numbers = [1, 2, 2, 3, 4, 5];

    expect(() => {
      Validator.validateLottoNumbers(numbers);
    }).toThrow(ERROR_MESSAGES.invalidUnique);
  });

  test('올바르지 않은 보너스 번호 타입', () => {
    const bonusNumber = Number('1a');

    expect(() => {
      Validator.validateBonusNumber(bonusNumber);
    }).toThrow(ERROR_MESSAGES.invalidType);
  });

  test('유효하지 않은 범위의 보너스 번호', () => {
    const bonusNumber = 46;

    expect(() => {
      Validator.validateBonusNumber(bonusNumber);
    }).toThrow(ERROR_MESSAGES.invalidNumberRange);
  });

  test('당첨 번호와 중복되는 보너스 번호 입력', () => {
    const bonusNumber = 1;
    const winningNumbers = [1, 2, 3, 4, 5, 6];

    expect(() => {
      Validator.validateBonusNumber(bonusNumber, winningNumbers);
    }).toThrow(ERROR_MESSAGES.invalidBonusNumber);
  });
});
