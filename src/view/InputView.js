import { MissionUtils } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/Messages";

class InputView {
    static async getLottoNumbers(){
        try {
            const lottoNumbers = await Console.readLineAsync(GAME_MESSAGES.ENTER_PURCHASE_AMOUNT);
            return lottoNumbers;
        } catch (error) {
            throw new Error("[ERROR]");
        }
    }
}

export default InputView;