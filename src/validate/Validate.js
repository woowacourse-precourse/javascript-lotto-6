class Validate {
  static AMOUNT_ERROR_MESSAGE = "[ERROR] 구매 금액은 1,000원 단위여야 합니다.";
  static STRUCTURAL_ERROR_MESSAGE =
    "[ERROR] 당첨번호는 숫자,숫자, 구조의 6개의 숫자여야 합니다.";
  static RANGE_ERROR_MESSAGE =
    "[ERROR] 당첨번호는 1 ~ 45 사이의 숫자여야 합니다.";
  static DUPLICATE_ERROR_MESSAGE =
    "[ERROR] 당첨번호는 중복 되지 않아야 합니다.";
  static DUPLICATE_BONUS_ERROR_MESSAGE =
    "[ERROR] 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.";
  static RANGE_BONUS_ERROR_MESSAGE =
    "[ERROR] 보너스 번호는 1 ~ 45 사이의 숫자여야 합니다.";
  static LENGTH_BONUS_ERROR_MESSAGE =
    "[ERROR] 보너스 번호는 1개의 숫자로만 이루어져 있어야합니다.";
  static LOTTO_PRICE = 1000;
  static LOOTO_SIZE = 6;
  static MIN_LOTTO_NUMBER = 1;
  static MAX_LOTTO_NUMBER = 45;

  // 구매금액 검증 함수
  validatePurchaseAmount = (purchaseAmount) => {
    if (purchaseAmount % Validate.LOTTO_PRICE !== 0) {
      throw new Error(Validate.AMOUNT_ERROR_MESSAGE);
    }
    if (purchaseAmount % Validate.LOTTO_PRICE === 0) {
      return true;
    }
  };
  // 당첨번호 검증 함수
  validateLottoNumbers = (LottoNumbers) => {
    const regex = /^\d{1,2}(,\d{1,2}){5}$/;
    if (!regex.test(LottoNumbers)) {
      throw new Error(Validate.STRUCTURAL_ERROR_MESSAGE);
    }

    const numbers = LottoNumbers.split(",").map(Number);

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== Validate.LOOTO_SIZE) {
      throw new Error(Validate.DUPLICATE_ERROR_MESSAGE);
    }

    for (const num of numbers) {
      if (num < Validate.MIN_LOTTO_NUMBER || num > Validate.MAX_LOTTO_NUMBER) {
        throw new Error(Validate.RANGE_ERROR_MESSAGE);
      }
    }

    return true;
  };

  // 보너스 번호 검증 함수
  validateBonusNumber = (lottoNumber, bonusNumber) => {
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(Validate.RANGE_BONUS_ERROR_MESSAGE);
    }

    if (lottoNumber.includes(bonusNumber)) {
      throw new Error(Validate.DUPLICATE_BONUS_ERROR_MESSAGE);
    }
    if (bonusNumber.length !== 0) {
      throw new Error(Validate.LENGTH_BONUS_ERROR_MESSAGE);
    }
    return true;
  };
}
export default Validate;
