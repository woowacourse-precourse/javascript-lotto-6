const commonValidator = {
  checkNumberType(input) {
    if (!/^[0-9]+$/.test(input)) {
      throw new Error('숫자 형태로 입력해주세요');
    }
  },

  checkDuplicate(input) {
    if (new Set(input).size !== input.length) {
      throw new Error('번호가 중복되면 안됩니다.');
    }
  },

  checkLottoNumberRange(input) {
    if (Number(input) < 1 || Number(input) > 45) {
      throw new Error('1~45의 숫자를 입력해주세요');
    }
  },
};

export default commonValidator;
