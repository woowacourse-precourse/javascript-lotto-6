import {MissionUtils} from "@woowacourse/mission-utils";
import validator from "../validate/Validator.js";

const inputView = {
    async INPUT_ANSWER() {
        const ANSWER = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        validator.inputValidator(ANSWER);
        return ANSWER.split(",").map(v => parseInt(v));
    },
    async INPUT_BONUS() {
        const Bonus = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        validator.bonusValidator(Bonus);
        return parseInt(Bonus);
    },
    async INPUT_MONEY() {

        const MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        validator.moneyValidator(MONEY);
        return parseInt(MONEY) / 1000;
    },

}

export default inputView;