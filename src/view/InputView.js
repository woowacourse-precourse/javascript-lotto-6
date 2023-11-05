import { Console } from '@woowacourse/mission-utils';
import MoneyValidator from '../validator/MoneyValidator.js';

class InputView {
    static async readMoney() {
        const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        MoneyValidator.isPositiveInt(money);
        MoneyValidator.isDivisibleBy1000(money);
        return parseInt(money);
    }
}

export default InputView;