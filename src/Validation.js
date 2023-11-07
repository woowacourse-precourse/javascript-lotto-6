import MESSAGE from './MESSAGE.js';

const Validation = {
  price: (input) => {
    const price = Number(input);
    if (price === 0) {
      throw new Error(MESSAGE.formatError('에러입니다!'));
    }
    return price;
  },
};
export default Validation;
