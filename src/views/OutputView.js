import { MissionUtils } from "@woowacourse/mission-utils";

class OutputView {
    printLottoTikets(lottoCount) {
        MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
    }

    printError(message) {
        MissionUtils.Console.print(message);
    }

    printLottoNum(numbers) {
        MissionUtils.Console.print(`[${numbers.join(', ')}]`);
    }

    printMargin(printMargin) {
        MissionUtils.Console.print("당첨 통계");
        MissionUtils.Console.print("---");
        MissionUtils.Console.print(printMargin);
    }
}

export default OutputView;