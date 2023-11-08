import { Console } from '@woowacourse/mission-utils';
import MoneyValidator from '../validator/MoneyValidator.js';
import LottoValidator from '../validator/LottoValidator.js';

class InputView {
    static async readMoney() {
        let money = null;
        while (money === null) {
            try {
                const moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
                MoneyValidator.isPositiveInt(moneyInput);
                MoneyValidator.isDivisibleBy1000(moneyInput);
                money = parseInt(moneyInput);
            } catch (err) {
                Console.print(err);
            }
        }
        return money;
    }

    static async readWinNumbers() {
        let winNumbersArr = null;
        while (winNumbersArr === null) {
            try {
                const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
                const winNumbers = input.split(',').map(winNumber => winNumber.trim());
                LottoValidator.isSixLength(winNumbers);
                LottoValidator.isInteger(winNumbers);
                LottoValidator.isValidRange(winNumbers);
                LottoValidator.isDuplicated(winNumbers);
                winNumbersArr = winNumbers.map((num) => parseInt(num));
            } catch (err) {
                Console.print(err);
            }
        }
        return winNumbersArr;
    }

    static async readBonusNumber() {
        let bonusNumber = null;
        while (bonusNumber === null) {
            try {
                const bonusNumberInput = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
                MoneyValidator.isPositiveInt(bonusNumberInput);
                LottoValidator.isValidRange2(bonusNumberInput);
                bonusNumber = bonusNumberInput;
            } catch (err) {
                Console.print(err);
            }
        }
        return bonusNumber;
    }
}

export default InputView;