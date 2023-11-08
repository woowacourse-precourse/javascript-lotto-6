const typeValidator = {
  isValidNumber(value) {
    if (!(typeof value === "number" && !Number.isNaN(value))) {
      throw new Error("[ERROR] 값이 유효한 숫자 형태가 아닙니다");
    }
  },

  isArray(value) {
    if (!Array.isArray(value)) {
      throw new Error("[ERROR] 배열 타입의 값이 아닙니다.");
    }
  },
};

const validateNumberInRange = (number, minInclusive, maxInclusive) => {
  if (!(minInclusive <= number && number <= maxInclusive)) {
    throw new Error(
      `[ERROR] 입력한 값이 ${minInclusive}부터 ${maxInclusive} 사이의 숫자가 아닙니다.`
    );
  }
};

export { typeValidator, validateNumberInRange };
