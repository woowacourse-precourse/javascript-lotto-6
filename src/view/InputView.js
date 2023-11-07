import { MissionUtils } from "@woowacourse/mission-utils";
import { BONUS_NUMBER, BUY_LOTTO_AMOUNT, WINNING_NUMBERS } from "../constant/constant";

const InputView = {
    async readLottoAmount() {
        const buyLottoAmount = await MissionUtils.Console.readLineAsync(BUY_LOTTO_AMOUNT);
        return buyLottoAmount;
    },

    async readLottoNumbers() {
        const inputLottoNumbers = await MissionUtils.Console.readLineAsync(WINNING_NUMBERS);
        return inputLottoNumbers;
    },

    async readBonusNumber() {
        const inputBonusNumber = await MissionUtils.Console.readLineAsync(BONUS_NUMBER);
        return inputBonusNumber;
    }
}

export default InputView;