import { Console, Random } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

class InputAmount {
  Published = {
    numbers : [],
    rank : [0, 0, 0, 0, 0], // [1등, 2등, 3등, 4등, 5등],
    GAIN : [2e9, 3e7, 15e5, 5e4, 5e3],
  }
  
  inputAmount = async() => {
    const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const validate = new Validate();
    try {
      validate.amountInput(input);
    } catch {
      Console.print(validate.WARNING.AMOUNT);
      return this.inputAmount();
    }
    return input;
  }

  publishLotto = (count) => {
    for (let i = 0; i < count; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      this.Published.numbers.push(numbers);
    }
  }  
}

export default InputAmount;