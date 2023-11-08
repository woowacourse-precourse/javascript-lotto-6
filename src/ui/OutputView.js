import {MissionUtils} from "@woowacourse/mission-utils";

const outputView = {
    PrintMyLotto(OutputString) {
        MissionUtils.Console.print(OutputString);
    },

    PrintMyScore(RESULT, EARNING) {
        MissionUtils.Console.print(`
당첨 통계
---
3개 일치 (5,000원) - ${RESULT[4]}개
4개 일치 (50,000원) - ${RESULT[3]}개
5개 일치 (1,500,000원) - ${RESULT[2]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${RESULT[1]}개
6개 일치 (2,000,000,000원) - ${RESULT[0]}개
총 수익률은 ${EARNING}%입니다.
`);
    }
};

export default outputView;