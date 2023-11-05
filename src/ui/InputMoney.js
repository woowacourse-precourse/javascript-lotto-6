import {MissionUtils} from "@woowacourse/mission-utils";

const INPUT_MONEY = async () => {

    const MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    MONEY_VALIDATE(MONEY);
    return parseInt(MONEY) / 1000;


};

const MONEY_VALIDATE = (MONEY) => {
    const MONEY_ARR = MONEY.split("");
    MONEY_ARR.forEach(v => {
        if (isNaN(v)) throw new Error("[ERROR] 문자열입력 금지");
    })
    if (parseInt(MONEY) % 1000 !== 0) throw new Error("[ERROR] 천원 단위만");
};
export {INPUT_MONEY, MONEY_VALIDATE};