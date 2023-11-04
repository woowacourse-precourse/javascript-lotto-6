const validate = {
  money: (input) => {
    const reg = /[^0-9]/;
    if (reg.test(input)) throw new Error('[ERROR] 정확한 값이 아닙니다.');
    return input;
  },
};

export default validate;
