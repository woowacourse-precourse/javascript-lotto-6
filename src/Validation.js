const validate = {
  money: (input) => {
    const reg = /[^0-9]/;
    if (reg.test(input)) throw new Error('[ERROR] 정확한 값이 아닙니다.');
    if (input % 1000 !== 0) throw new Error('[ERROR] 금액은 1000원 단위로 입력해주세요.');
    return input;
  },
  winningNumbers: (input) => {
    const inputArray = input.split(',');
    if (!inputArray) throw new Error('[ERROR] 정확한 값을 입력해주세요.');
    if (inputArray.length !== 6) throw new Error('[ERROR] 6개의 숫자를 입력해주세요');
    return inputArray.sort((a, b) => a - b);
  },
};

export default validate;
