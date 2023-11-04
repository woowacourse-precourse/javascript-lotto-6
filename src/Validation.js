const validate = {
  money: (input) => {
    const reg = /[^0-9]/;
    if (reg.test(input)) throw new Error('숫자를 입력해주세요.');
    return input;
  },
};

export default validate;
