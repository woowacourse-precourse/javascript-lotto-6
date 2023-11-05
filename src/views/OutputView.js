import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
    printLottoTikets(lottoCount) {
        MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    }

    printLottoNum(numbers) {
        MissionUtils.Console.print(`[${numbers.join(', ')}]`);
    }
}

export default OutputView;