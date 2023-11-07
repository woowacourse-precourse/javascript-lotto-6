import { MissionUtils } from "@woowacourse/mission-utils";
import CheckMoney from "./Validation/Purchase.js";

export default class Lottos {
    constructor(money) {
        this.validate(money);
        this.value = money
        this.count = money / 1000
    }

    validate(money) {
        CheckMoney.checkPurchaseMoney(money);
    }

    printCount() {
        MissionUtils.Console.print(`\n${this.count}개를 구매했습니다.`)
    }
}