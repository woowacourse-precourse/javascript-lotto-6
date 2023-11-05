const commonValidator = {
  checkNumberType(input) {
    if (!/^[0-9]+$/.test(input)) {
      throw new Error('숫자 형태로 입력해주세요');
    }
  },

  checkEmpty(input) {
    if (input.trim('') !== '') {
      throw new Error('값을 입력해주세요');
    }
  },

  checkLottoNumberRange(input) {
    if (Number(input) < 1 || Number(input) > 45) {
      throw new Error('1~45의 숫자를 입력해주세요');
    }
  },
};

export default commonValidator;
