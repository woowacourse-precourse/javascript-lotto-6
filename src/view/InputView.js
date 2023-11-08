import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "../constant/message";

const InputView = {
    async readLottoAmount() {
        const buyLottoAmount = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.buyLottoAmount);
        return buyLottoAmount;
    },

    async readLottoNumbers() {
        const inputLottoNumbers = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.winningLottoNumbers);
        return inputLottoNumbers;
    },

    async readBonusNumber() {
        const inputBonusNumber = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.bonusNumber);
        return inputBonusNumber;
    }
}

export default InputView;