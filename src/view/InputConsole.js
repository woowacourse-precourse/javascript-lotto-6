import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../controller/InputValidator';

export class InputConsole {
    /**
     * 금액 입력 받는 함수
     * @param {string} message 
     * @returns 
     */
    static async inputPrice(message = '') {
        try {
            const priceString = await Console.readLineAsync(message);
            const price = Number(priceString);
            InputValidator.validPrice(price);
            return price;
        }
        catch (err) {
            Console.print(err.message);
            return this.inputPrice(message);
        }
    }
    /**
     * 당첨번호 입력하는 함수
     * @param {string} message 
     * @returns 
     */
    static async inputWinningNumberList(message = '') {
        try {
            let inputStringNumbers = await Console.readLineAsync(message);
            const winningNumbers = inputStringNumbers.split(',').map(value => parseInt(value.trim()));
            InputValidator.validWinningNumbers(winningNumbers);
            return winningNumbers;
        }
        catch (err) {
            Console.print(err.message);
            return this.inputWinningNumberList(message);
        }
    }
    /**
     * 보너스 번호 입력하는 함수
     * @param {string} message 
     * @returns 
     */
    static async inputBonusNumber(message) {
        try {
            const bonusNumberString = await Console.readLineAsync(message = '');
            const bonusNumber = Number(bonusNumberString);
            InputValidator.validBonusNumber(bonusNumber);
            return bonusNumber;
        }
        catch (err) {
            Console.print(err.message);
            return this.inputBonusNumber(message);
        }
    }
}