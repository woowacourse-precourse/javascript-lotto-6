import { Console } from '@woowacourse/mission-utils';
import MoneyValidator from '../validator/MoneyValidator.js';
import LottoValidator from '../validator/LottoValidator.js';

class InputView {
    static async readMoney() {
        let money = null;
        while (money === null) {
            try {
                const moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
                MoneyValidator.isValidMoney(moneyInput);
                money = parseInt(moneyInput);
            } catch (err) {
                Console.print(err.message);
            }
        }
        return money;
    }

    static async readWinNumbers() {
        let winNumbersArr = null;
        while (winNumbersArr === null) {
            try {
                const numbersInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
                const winNumbers = numbersInput.split(',').map(winNumber => winNumber.trim());
                LottoValidator.isValidNumbers(winNumbers);
                winNumbersArr = winNumbers.map((num) => parseInt(num));
            } catch (err) {
                Console.print(err.message);
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
                LottoValidator.isValidRange(bonusNumberInput);
                bonusNumber = bonusNumberInput;
            } catch (err) {
                Console.print(err.message);
            }
        }
        return bonusNumber;
    }
}

export default InputView;