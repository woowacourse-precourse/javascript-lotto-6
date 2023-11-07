import Lotto from "./Lotto.js";
import {MissionUtils} from "@woowacourse/mission-utils";


class App {

    checkInputPurchasedAmount(purchasedAmount) {
        if (isNaN(purchasedAmount) || purchasedAmount % 1000 !== 0)
            throw new Error("[ERROR] 잘못된 숫자를 입력하셨습니다.");
    }


    async play() {

    }
}

export default App;
