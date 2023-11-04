import {MissionUtils} from "@woowacourse/mission-utils";

const INPUT_MONEY = async () => {
    const MONEY = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
    MONEY_VALIDATE(MONEY);
    return MONEY;
};

const MONEY_VALIDATE = (MONEY) => {
    if (MONEY % 1000 !== 0) throw new Error("[ERROR] 천원 단위만 입력해주세요");
};
export {INPUT_MONEY,MONEY_VALIDATE};