const typeValidator = {
  isValidNumber(value) {
    if (!(typeof value === "number" && !Number.isNaN(value))) {
      throw new Error("[ERROR] 값이 유효한 숫자 형태가 아닙니다");
    }
  },
};

const validateNumberInRange = (number, minInclusive, maxInclusive) => {
  typeValidator.isValidNumber(number);

  if (!(minInclusive <= number && number <= maxInclusive)) {
    throw new Error(
      `[ERROR] 로또 번호는 ${minInclusive}부터 ${maxInclusive} 사이의 숫자여야 합니다.`
    );
  }
};

export { typeValidator, validateNumberInRange };
