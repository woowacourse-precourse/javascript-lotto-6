import {MissionUtils} from "@woowacourse/mission-utils";
import {LOTTO_INFO} from "./constants/Constants.js";

class LottoSeller {
    constructor(money) {
        this.money = money;
        this.lottoTickets = null;
        this.#validate(parseInt(money));
    }

    async buyLotto() {
        this.lottoTickets = this.money / LOTTO_INFO.LOTTO_PRICE;
        this.#printTicketsNumber()
    }

    get lottoTicketsNumber() {
        return this.lottoTickets;
    }

    #printTicketsNumber() {
        MissionUtils.Console.print(`\n${this.lottoTickets}개를 구매했습니다.`);
    }


    #validate(money) {
        console.log(money);
        if (money % LOTTO_INFO.LOTTO_PRICE !== 0 || isNaN(money))
            throw new Error("[ERROR] 유효한 숫자가 아닙니다.");
    }
}

export default LottoSeller;