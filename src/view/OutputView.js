import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
    printError(errorMessage) {
        MissionUtils.Console.print(`${errorMessage}`);
    },

    printResult(resultContent) {
        MissionUtils.Console.print(resultContent);
    }
}

export default OutputView;