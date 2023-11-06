import {MissionUtils} from "@woowacourse/mission-utils";
import {INPUT_MESSAGE, LOTTO_INFO} from "./constants/Constants.js";
import InputHandler from "./utils/inputHandler.js";

class LottoSeller {
    constructor() {
        this.money = null;
        this.lottoTickets = null;
    }

    async getValidMoney() {
        const moneyInput = await InputHandler.getInput(INPUT_MESSAGE.MONEY);
        if (this.#validate(moneyInput))
            return this.money = moneyInput
        return await this.getValidMoney();
    }

    #validate(moneyInput) {
        if (isNaN(moneyInput) || (moneyInput % LOTTO_INFO.LOTTO_PRICE) !== 0) {
            MissionUtils.Console.print("[ERROR] 1000원 단위의 숫자를 입력하셔야 합니다.");
            return false;
        } else {
            return true
        }
    }

    async buyLotto() {
        await this.getValidMoney();
        this.lottoTickets = await this.money / LOTTO_INFO.LOTTO_PRICE;
        this.#printTicketsNumber(this.lottoTickets)
    }

    #printTicketsNumber(lottoTickets) {
        MissionUtils.Console.print(`${lottoTickets}개를 구매했습니다.`);
    }

    get lottoTicketsNumber() {
        return this.lottoTickets;
    }
}

export default LottoSeller;