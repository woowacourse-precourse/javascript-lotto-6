import { Console } from "@woowacourse/mission-utils";
import { CONSTANT } from "./Constant.js";

class View {
    static showLottoNum(amount, userLottoArray) {
        let output = `${amount}${CONSTANT.PURCHASE_INPUT_RESPONSE}\n`;
        userLottoArray.forEach((lotto) => {
            output += `[${lotto.getLottoNum().join(", ")}]\n`;
        });
        Console.print(output);
    }

    static showStatisticsResult(lottoResult) {
        let output = CONSTANT.STATISTICS_RESPONSE;
        CONSTANT.WINNER_PRICE.forEach((value, key) => {
            let tmp = `${key}개 일치 `;
            if (key == "b5") tmp = "5개 일치, 보너스 볼 일치 ";
            tmp += `(${value.toLocaleString()}) - ${lottoResult[key]}개\n`;
            output += tmp;
        });
        Console.print(output);
    }

    static showRateofReturn(rateOfReturn) {
        const OUTPUT = `총 수익률은 ${rateOfReturn}%입니다.`;
        Console.print(OUTPUT);
    }
}

export default View;
