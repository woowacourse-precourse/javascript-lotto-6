import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/messages';

const InputView = {
    async getPurchaseAmount() {
        const amount = await Console.readLineAsync(INPUT.MONEY);
        return Number(amount);
    },

    async getWinningNumbers() {
        const winningNumbers =  await Console.readLineAsync(INPUT.LOTTO);
        return winningNumbers.split(',').map(Number);
    },

    async getBonusNumber() {
        const bonusNumber = await Console.readLineAsync(INPUT.BONUS);
        return Number(bonusNumber);
    }
};

export default InputView;