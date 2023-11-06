import {MissionUtils} from "@woowacourse/mission-utils";
import validator from "../validate/Validator.js";
import InputMessage from "../constants/InputMessage.js";
import Constants from "../constants/Constants.js";

const inputView = {

    async INPUT_ANSWER() {
        const ANSWER = await MissionUtils.Console.readLineAsync(InputMessage.Q_ANSWER);
        validator.inputValidator(ANSWER);
        return ANSWER.split(",").map(v => parseInt(v));
    },

    async INPUT_BONUS() {
        const Bonus = await MissionUtils.Console.readLineAsync(InputMessage.Q_BONUS);
        validator.bonusValidator(Bonus);
        return parseInt(Bonus);
    },

    async INPUT_MONEY() {
        const MONEY = await MissionUtils.Console.readLineAsync(InputMessage.Q_MONEY);
        validator.moneyValidator(MONEY);
        return parseInt(MONEY) / Constants.LOTTO_PRICE;
    },

}

export default inputView;