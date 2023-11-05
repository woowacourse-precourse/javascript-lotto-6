import { Console } from '@woowacourse/mission-utils';
import { INPUT } from './constants/messages';

const InputView = {
    getPurchaseAmount(callback) {
        Console.readLine(INPUT.MONEY, callback);
    },

    getWinningNumbers(callback) {
        Console.readLine(INPUT.LOTTO, callback);
    },

    getBonusNumber(callback) {
        Console.readLine(INPUT.BONUS, callback);
    }
};

export default InputView;