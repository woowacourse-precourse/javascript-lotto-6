import { Console } from "@woowacourse/mission-utils";
import { CONSTANT } from "./Constant.js";

class View {
    static showLottoNum(amount, userLotto) {
        let output = `${amount}${CONSTANT.MONEY_INPUT_RESPONSE}\n`;
        userLotto.forEach((lotto) => {
            output += `[${lotto.getNum().join(", ")}]\n`;
        });
        Console.print(output);
    }

    static showStatisticsResult(result, rateOfReturn) {
        let output = `\n${CONSTANT.STATISTICS_RESPONSE}`;
        [3, 4, 5, "b5", 6].forEach((key) => {
            let tmp = `${key}개 일치 `;
            if (key == "b5") tmp = "5개 일치, 보너스 볼 일치 ";
            tmp += `(${CONSTANT.WINNER_PRICE[key].toLocaleString()}원) - ${
                typeof result[key] == "undefined" ? 0 : result[key]
            }개\n`;
            output += tmp;
        });
        output += `총 수익률은 ${rateOfReturn}%입니다.`;
        Console.print(output);
    }
}

export default View;
