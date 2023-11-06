import { Console } from '@woowacourse/mission-utils';
import MoneyValidator from '../validator/MoneyValidator.js';
import LottoValidator from '../validator/LottoValidator.js';

class InputView {
    static async readMoney() {
        const money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        MoneyValidator.isPositiveInt(money);
        MoneyValidator.isDivisibleBy1000(money);
        return parseInt(money);
    }

    static async readWinNumbers() {
        const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const winNumbers = input.split(',').map(winNumber => winNumber.trim());
        LottoValidator.isSixLength(winNumbers);
        LottoValidator.isInteger(winNumbers);
        LottoValidator.isValidRange(winNumbers);
        LottoValidator.isDuplicated(winNumbers);
        return winNumbers.map((num) => parseInt(num));
    }

    static async readBonusNumber() {
        const bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        MoneyValidator.isPositiveInt(bonusNumber);
        LottoValidator.isValidRange2(bonusNumber);
        return bonusNumber;
    }
}

export default InputView;