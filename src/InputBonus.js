import {MissionUtils} from "@woowacourse/mission-utils";

const INPUT_BONUS = async () => {
    return await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.");
};
export default INPUT_BONUS;