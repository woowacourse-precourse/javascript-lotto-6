import {MissionUtils} from "@woowacourse/mission-utils";
import validation from "./validation.js";
import {INPUT_MESSAGE, LOTTO_INFO} from "../constants/Constants.js";

const inputHandler = {
    async getInput(message) {
        return await MissionUtils.Console.readLineAsync(message)
    },

    async getMoney() {
        let moneyInput;
        while (true) {
            moneyInput = await this.getInput(INPUT_MESSAGE.MONEY);
            if (isNaN(moneyInput) || (moneyInput % LOTTO_INFO.LOTTO_PRICE) !== 0) {
                MissionUtils.Console.print("[ERROR] 1000원 단위의 숫자를 입력하셔야 합니다.");
            } else {
                break;
            }
        }
        return moneyInput;
    },

    async getBonusNumber(winningNumbers) {
        const bonusInput = await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
        await validation.isValidBonusNumber(winningNumbers, bonusInput);
    }
}

export default inputHandler;