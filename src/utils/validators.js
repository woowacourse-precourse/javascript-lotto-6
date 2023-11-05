const typeValidator = {
  isValidNumber(value) {
    if (!(typeof value === "number" && !Number.isNaN(value))) {
      throw new Error("[ERROR] 값이 유효한 숫자 형태가 아닙니다");
    }
  },
};

export { typeValidator };
