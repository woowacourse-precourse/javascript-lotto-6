import {MissionUtils} from "@woowacourse/mission-utils";
import validator from "../validate/Validator.js";

const inputView = {
    async INPUT_ANSWER() {
        const ANSWER = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
        return ANSWER.split(",").map(v => parseInt(v));
    },
    async INPUT_BONUS() {
        return await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    },
    async INPUT_MONEY() {

        const MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
        validator(MONEY);
        return parseInt(MONEY) / 1000;
    },

}

export default inputView;