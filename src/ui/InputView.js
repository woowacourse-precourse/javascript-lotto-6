import {MissionUtils} from "@woowacourse/mission-utils";
import validator from "../validate/Validator.js";
import InputMessage from "../constants/InputMessage.js";
import Constants from "../constants/Constants.js";
import ErrorMessage from "../constants/ErrorMessage.js";

const inputView = {

    async INPUT_ANSWER() {
        try {
            const ANSWER = await MissionUtils.Console.readLineAsync(InputMessage.Q_ANSWER);
            validator.inputValidator(ANSWER);
            return ANSWER.split(",").map(v => parseInt(v));
        } catch (e) {
            MissionUtils.Console.print(ErrorMessage.LAST_MESSAGE);
            return this.INPUT_ANSWER();
        }

    },

    async INPUT_BONUS() {
        try {
            const Bonus = await MissionUtils.Console.readLineAsync(InputMessage.Q_BONUS);
            validator.bonusValidator(Bonus);
            return parseInt(Bonus);
        } catch (e) {
            MissionUtils.Console.print(ErrorMessage.LAST_MESSAGE);
            return this.INPUT_BONUS();
        }

    },

    async INPUT_MONEY() {
        try {
            const MONEY = await MissionUtils.Console.readLineAsync(InputMessage.Q_MONEY);
            validator.moneyValidator(MONEY);
            return parseInt(MONEY) / Constants.LOTTO_PRICE;
        } catch (e) {
            MissionUtils.Console.print(ErrorMessage.LAST_MESSAGE);
            return this.INPUT_MONEY();
        }

    },

}

export default inputView;