import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/message.js';

const InputView = {
    async readPurchaseAmount() {
        return Number(await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT));
    },

    async readWinningLotto() {
        const winningLotto = await Console.readLineAsync(
            INPUT_MESSAGE.WINNING_NUMBERS
        );

        return winningLotto.split(',').map(Number);
    },

    async readBonusBall() {
        return Number(await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER));
    },
};

export default InputView;