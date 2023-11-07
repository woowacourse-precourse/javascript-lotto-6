import { MissionUtils } from "@woowacourse/mission-utils";
import CheckMoney from "./Validation/Purchase.js";
import Lotto from './Lotto.js'

export default class Lottos {
    constructor(money) {
        this.validate(money);
        this.value = money
        this.count = money / 1000
        this.list = []
        this.createLottoNumberArray();
    }

    validate(money) {
        CheckMoney.checkPurchaseMoney(money);
    }
    

    createLottoNumberArray() {
        for (let i = 0 ; i < this.count ; i++) {
            const newLottoNumbers = this.createLottoNumber()
            this.list.push(newLottoNumbers)
        }
    }

    createLottoNumber() {
        let lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        return new Lotto(lottoNumbers)
    }

    printCount() {
        MissionUtils.Console.print(`\n${this.count}개를 구매했습니다.`)
    }

    printLottoList() {
        this.list.forEach((lotto) => {
            lotto.printLottoNumber();
        });
    }
}