import {MissionUtils} from "@woowacourse/mission-utils";

const INPUT_MONEY = async () => {
    return await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
};