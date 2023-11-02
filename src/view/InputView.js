import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../utils/Messages";

class InputView {
    static async getLottoNumbers(){
        try {
            const lottoNumbers = await MissionUtils.Console.readLineAsync(GAME_MESSAGES.ENTER_PURCHASE_AMOUNT);
            return lottoNumbers;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }
}

export default InputView;