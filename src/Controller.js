import { CONSTANT } from "./Constant.js";
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Controller {
    static generateRandomLotto() {
        return new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6));
    }

    // 발행 번호와 당첨 번호를 비교해 일치 결과 반환
    static compare(userLotto, winningLotto, bonusNum) {
        let result = 0;
        winningLotto.getNum().forEach((element) => {
            if (userLotto.getNum().includes(element)) result += 1;
        });
        if (result == 5 && userLotto.getNum().includes(bonusNum))
            result = "b" + result;
        return result;
    }

    static compare(userLotto, winningLotto, bonusNum) {
        let result = 0;
        winningLotto.getNum().forEach((element) => {
            if (userLotto.getNum().includes(element)) result += 1;
        });
        if (result == 5 && userLotto.getNum().includes(bonusNum))
            result = "b" + result;
        return result;
    }

    // 수익률 계산
    static rateOfReturnCal(money, result) {
        let price = 0;
        [3, 4, 5, "b5", 6].forEach((key) => {
            price +=
                CONSTANT.WINNER_PRICE[key] *
                (typeof result[key] == "undefined" ? 0 : result[key]);
        });
        return ((price * 100) / money).toFixed(1);
    }
}

export default Controller;
