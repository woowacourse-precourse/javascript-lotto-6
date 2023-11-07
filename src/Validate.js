class Validate {
  static inputUserPay(value) {
    if (/[^0-9]/g.test(value)) {
      throw new Error('[ERROR] 숫자를 입력해 주세요.');
    } else if (value % 1000 !== 0) {
      throw new Error('[ERROR] 1,000단위로 입력해주세요');
    }
  }
}

export default Validate;
