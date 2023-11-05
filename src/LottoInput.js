import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from './Messages.js';

export async function lottoBuyAmount() {
    const buyAmount = await MissionUtils.Console.readLineAsync(`${MESSAGES.LOTTO_BUY_AMOUNT}\n`);

    checkLottoAmount(buyAmount);

    return buyAmount;
}

export function checkLottoAmount(buyAmount) {
    if (parseInt(buyAmount, 10) % 1000 !== 0) {
        throw new Error(MESSAGES.AMOUNT_ERROR);
    }
}