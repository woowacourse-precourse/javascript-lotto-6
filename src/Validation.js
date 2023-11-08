import MESSAGE from './MESSAGE.js';

const Validation = {
  price: (input) => {
    const price = Number(input);
    if (price === 0) {
      throw new Error(MESSAGE.formatError('에러입니다!'));
    }
    return price;
  },
  winNumbers: (input) => {
    const numbers = input.split(',').map((num) => Number(num));
    if (numbers.length !== 6) {
      throw new Error(MESSAGE.formatError('6개가 아닙니다!'));
    }
    return numbers;
  },
  bonusNumber: (input) => {
    const number = Number(input);
    if (number < 1 || number > 45) {
      throw new Error(MESSAGE.formatError('1~45 사이의 숫자를 입력해주세요.'));
    }
    return number;
  },
};
export default Validation;
