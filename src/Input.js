import { Console } from '@woowacourse/mission-utils';
import Validate from './Validate.js';
import MESSAGE from './constants/Message.js';

const Input = {
  async getLottoPrice() {
    const price = await Console.readLineAsync(MESSAGE.inputPrice);
    Validate.checkPurchaseAmount(price);

    return +price;
  },
  async getLottoNumber() {
    const numbers = await Console.readLineAsync(MESSAGE.inputAnswerNum);
    Validate.checkIncludeComma(numbers);

    const NumberList = numbers.split(',');
    Validate.checkDuplicateNumber(NumberList);
    Validate.checkNumberCount(NumberList);

    NumberList.forEach((number) => Validate.checkNumberRange(number));

    return NumberList.map((number) => Number(number));
  },
  async getLottoBonusNumber(answers) {
    const number = await Console.readLineAsync(MESSAGE.inputBonusNum);
    Validate.checkNumberRange(number);
    Validate.checkDuplicateNumber([...answers, Number(number)]);

    return Number(number);
  },
};

export default Input;
