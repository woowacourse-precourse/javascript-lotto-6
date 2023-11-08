import { Console } from '@woowacourse/mission-utils';
import Validate from './Validate.js';
import MESSAGE from './constants/Message.js';

const Input = {
  async getLottoPrice() {
    try {
      const price = await Console.readLineAsync(MESSAGE.inputPrice);
      Validate.checkPurchaseAmount(price);
      return +price;
    } catch (error) {
      Console.print(error.message);
      return this.getLottoPrice();
    }
  },
  async getLottoNumber() {
    try {
      const numbers = await Console.readLineAsync(MESSAGE.inputAnswerNum);
      Validate.checkIncludeComma(numbers);

      const NumberList = numbers.split(',');
      Validate.checkDuplicateNumber(NumberList);
      NumberList.forEach((number) => Validate.checkNumberRange(number));

      return NumberList.map((number) => Number(number));
    } catch (error) {
      Console.print(error.message);
      return this.getLottoNumber();
    }
  },
  async getLottoBonusNumber(answers) {
    try {
      const number = await Console.readLineAsync(MESSAGE.inputBonusNum);
      Validate.checkNumberRange(number);
      Validate.checkDuplicateNumber([...answers, Number(number)]);

      return Number(number);
    } catch (error) {
      Console.print(error.message);
      return this.getLottoBonusNumber(answers);
    }
  },
};

export default Input;
