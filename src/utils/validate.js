const validate = {
  isInteger(value) {
    if (!Number.isInteger(Number(value))) {
      throw new Error('[ERROR] 특수문자, 영문자, 소수는 입력할 수 없습니다.');
    }
  },

  startZero(value) {
    if (value.length !== Number(value).toString().length) {
      throw new Error('[ERROR] 0으로 시작하는 숫자는 입력 수 없습니다.');
    }
  },

  isCount(value) {
    if (value.length !== 6) {
      throw new Error('[ERROR] 번호는 6개 이어야 합니다.');
    }
  },

  isDuplication(value) {
    if ([...new Set(value)].length !== 6) {
      throw new Error('[ERROR] 번호는 중복될 수 없습니다.');
    }
  },

  isNumberRange(number) {
    if (Number(number) > 45 || Number(number) < 1) {
      throw new Error('[ERROR] 번호는 1~45 사이의 수 이여야 합니다.');
    }
  },
};

export { validate };
