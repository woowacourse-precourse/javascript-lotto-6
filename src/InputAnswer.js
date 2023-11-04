import {MissionUtils} from "@woowacourse/mission-utils";

const INPUT_ANSWER = async () => {
    const ANSWER = await MissionUtils.Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    return ANSWER.split(",").map(v => parseInt(v));
};
export default INPUT_ANSWER;