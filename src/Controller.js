import { CONSTANT } from "./Constant.js";
import { Random, Console } from "@woowacourse/mission-utils";

class Controller {
    static async userInputMoney() {
        const MONEY = await Console.readLineAsync(CONSTANT.MONEY_INPUT_ASK);
        return Number(MONEY);
    }

    // 발행 번호와 당첨 번호를 비교해 일치 결과 반환
    static compareLottoNum(userLotto, winningLotto, bonusNum) {
        let result = 0;
        winningLotto.getLottoNum().forEach((element) => {
            if (userLotto.getLottoNum().includes(element)) result += 1;
        });
        if (result == 5 && userLotto.getLottoNum().includes(bonusNum))
            result = "b" + result;
        return result;
    }

    // 수익률 계산
    static rateOfReturnCal(money, lottoResult) {
        let price = 0;
        Object.entries(lottoResult).forEach((element) => {
            price += CONSTANT.WINNER_PRICE.get(element[0]) * element[1];
        });
        return ((price * 100) / money).toFixed(1);
    }
}

export default Controller;
