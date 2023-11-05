import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
    printLottoTikets(lottoCount) {
        MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    }
}

export default OutputView;