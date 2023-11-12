import { Console } from '@woowacourse/mission-utils';
import { ERROR, AMOUNT, INPUT } from './constant';
import Lotto from './Lotto';
import Bonus from './Bonus';


/**
 * @param {number} amount
 */
export function validatePurchaseAmount(amount) {
    if (isNaN(amount)) throw new Error(ERROR.PURCHASE);
    if (amount % AMOUNT.UNIT !== 0) throw new Error(ERROR.PURCHASE);
}

export async function getPurchaseAmount() { //구매 금액 입력
    while(true) {
        try {
            const amount = Number(await Console.readLineAsync(`${INPUT.MONEY}\n`));
            validatePurchaseAmount(amount);
            return amount;
        }
        catch(error) {
            Console.print(error.message);
        }

    }
}
//사용자 값 입력받기 input 
export async function getWinningNumbers() {
    /** @type {string} */
    const number = await Console.readLineAsync(`${INPUT.LOTTO}\n`);
    Console.print('');
    return number.split(',').map(Number);
}

export async function getBonusNumber() {
    const bonusNumber = await Console.readLineAsync(`${INPUT.BONUS}\n`);
    Console.print('');
    return Number(bonusNumber);
}

export async function validateLottoNumbers() {
    let winningNumbers;
    while (true) {
        try {
            const numbers = await getWinningNumbers();
            winningNumbers = new Lotto(numbers);
            break;
        }
        catch(error) {
            Console.print(error.message);
        }
    }
    while (true) {
        try {
            const bonusNumber = await getBonusNumber();
            const bonus = new Bonus(winningNumbers, bonusNumber);
            return bonus;
        }
        catch(error) {
            Console.print(error.message);
        }
    }

}