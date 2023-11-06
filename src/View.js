import { Console } from "@woowacourse/mission-utils";
import { CONSTANT } from "./Constant.js";

class View {
    static moneyInputAsk() {
        Console.print(CONSTANT.MONEY_INPUT_ASK);
    }
    static lottoNumInputAsk() {
        Console.print(CONSTANT.LOTTO_NUM_INPUT_ASK);
    }
    static bonusNumInputAsk() {
        Console.print(CONSTANT.BONUS_NUM_INPUT_ASK);
    }

    static showLottoNum(amount, userLottoArray) {
        let output = `${amount}${CONSTANT.MONEY_INPUT_RESPONSE}\n`;
        userLottoArray.forEach((lotto) => {
            output += `[${lotto.getLottoNum().join(", ")}]\n`;
        });
        Console.print(output);
    }

    static showStatisticsResult(lottoResult, rateOfReturn) {
        let output = CONSTANT.STATISTICS_RESPONSE;
        CONSTANT.WINNER_PRICE.forEach((value, key) => {
            let tmp = `${key}개 일치 `;
            if (key == "b5") tmp = "5개 일치, 보너스 볼 일치 ";
            tmp += `(${value.toLocaleString()}원) - ${lottoResult[key]}개\n`;
            output += tmp;
        });
        output += `총 수익률은 ${rateOfReturn}%입니다.`;
        Console.print(output);
    }
}

export default View;
