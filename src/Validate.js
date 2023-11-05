const Validate = {
  checkPurchaseAmount(price) {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(price)) {
      throw new Error('[ERROR] 구입 금액은 숫자여야 합니다.');
    } else if (price < 1000) {
      throw new Error('[ERROR] 구입 금액은 최소 1000원 이상이어야 합니다.');
    } else if (price % 1000) {
      throw new Error('[ERROR] 구입 금액은 1000원 단위여야 합니다.');
    }
  },
  checkDuplicateNumber(numbers) {
    const set = new Set(numbers);
    if (numbers.length !== set.size) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다');
    }
  },
  checkNumberRange(number) {
    const pattern = /^[0-9]+$/;
    if (!pattern.test(number)) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    } else if (number < 1 || number > 45) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  },
  checkIncludeComma(numbers) {
    if (!numbers.includes(',')) {
      throw new Error(
        '[ERROR] 로또 번호는 쉼표(,)를 기준으로 구분해야 합니다.'
      );
    }
  },
};
export default Validate;
