import {MissionUtils} from "@woowacourse/mission-utils";

const OUT_MY_LOTTO_ARR = (NUMBER, LOTTO_ARR) => {
    let StringForOut = `\n${NUMBER}개를 구매했습니다.`;
    LOTTO_ARR.forEach(v => {
        StringForOut += `\n[${v.join(', ')}]`
    });
    MissionUtils.Console.print(StringForOut);
};
export default OUT_MY_LOTTO_ARR;