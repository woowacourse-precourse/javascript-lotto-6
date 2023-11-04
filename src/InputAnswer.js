import {MissionUtils} from "@woowacourse/mission-utils";

const INPUT_ANSWER = async () => {
    return await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.");
};
export default INPUT_ANSWER;