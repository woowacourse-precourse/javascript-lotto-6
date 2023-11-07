import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGES, ERROR_MESSAGES } from '../utils/Messages.js';
import { isDivisibleByThousand, isNumber, isNumberInRange, isNumberLengthValid } from '../utils/Validation.js';

class InputView {
    static async getLottoNumbers(){
        try {
            const lottoNumbers = await Console.readLineAsync(GAME_MESSAGES.ENTER_PURCHASE_AMOUNT);
            if (!isDivisibleByThousand(lottoNumbers)){
                throw new Error(ERROR_MESSAGES.INVALID_LOTTO_PRICE);
            }
            if (!isNumber(lottoNumbers)){
                throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
            }
            return lottoNumbers;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }

    static async getWinningNumbers(){
        try {
            const winningNumbers = await Console.readLineAsync(GAME_MESSAGES.ENTER_WINNING_NUMBERS);
            if (!isNumberLengthValid(winningNumbers)){
                throw new Error(ERROR_MESSAGES.INVALID_LOTTO_NUMBER);
            }
            return winningNumbers;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }

    static async getBonusNumbers(){
        try {
            const bonusNumbers = await Console.readLineAsync(GAME_MESSAGES.ENTER_BONUS_NUMBER);
            if (!isNumber(bonusNumbers)){
                throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
            }
            if (!isNumberInRange(bonusNumbers)){
                throw new Error(ERROR_MESSAGES.INVALID_RANGE);
            }
            return bonusNumbers;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }
}

export default InputView;