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

    static async getWinningNumbers(){
        try {
            const winnigNumbers = await MissionUtils.Console.readLineAsync(GAME_MESSAGES.ENTER_WINNING_NUMBERS);
            return winnigNumbers;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }

    static async getBonusNumbers(){
        try {
            const bonusNumbers = await MissionUtils.Console.readLineAsync(GAME_MESSAGES.ENTER_BONUS_NUMBER);
            return bonusNumbers;
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }
}

export default InputView;