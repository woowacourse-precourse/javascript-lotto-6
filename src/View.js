import { Console } from "@woowacourse/mission-utils";
import { CONSTANT } from "./Constant.js";

class View {
    static showLottoNum(amount, userLottoArray) {
        let output = `${amount}${CONSTANT.PURCHASE_INPUT_RESPONSE}\n`;
        userLottoArray.forEach((lotto) => {
            output += "[" + lotto.getLottoNum().join(", ") + "]\n";
        });
        Console.print(output);
    }
    static showStatisticsResult() {}
    static showRateofReturn() {}
}

export default View;
