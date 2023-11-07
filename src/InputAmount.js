import { Console } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

class InputAmount {

    constructor() {
        amount : this.inputAmount();
    }

    inputAmount = async() => {
        const input = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
        const validate = new Validate();
        try {
          validate.amountInput(input);
        } catch {
          Console.print(this.WARNING.AMOUNT);
          return new InputAmount();
        }
        return input;
    }
}

const input = new InputAmount();

export default InputAmount;