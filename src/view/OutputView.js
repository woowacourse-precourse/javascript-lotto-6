import { MissionUtils } from "@woowacourse/mission-utils";

const OutputView = {
    printError(errorMessage) {
        MissionUtils.Console.print(`${errorMessage}`);
    },

    printResult(resultContent) {
        MissionUtils.Console.print(resultContent);
    },

    printBuyAmount(amount) {
        MissionUtils.Console.print(amount);
    },

    printRandomNumbersJoin(numbers) {
        MissionUtils.Console.print(`[${numbers.join(', ')}]`);
    }
}

export default OutputView;