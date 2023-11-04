import {MissionUtils} from "@woowacourse/mission-utils";

const OUT_MY_LOTTO_ARR = (NUMBER, LOTTO_ARR) => {
    MissionUtils.Console.print(`\n${NUMBER}개를 구입했습니다.`);
    LOTTO_ARR.forEach(v => {
        MissionUtils.Console.print(v);
    });
};
export default OUT_MY_LOTTO_ARR;