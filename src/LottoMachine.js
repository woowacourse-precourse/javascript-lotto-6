import IOUtils from "./IOUtils.js";
import Lotto from "./Lotto.js";
import GameUtils from "./GameUtils.js";

class LottoMachine {

    async getLottoPurchaseAmount() {
        const purchaseAmount = Number(await IOUtils.input("구입금액을 입력해 주세요.\n"));
        this.#validateLottoPurchaseAmount(purchaseAmount);
        return purchaseAmount;
    }

    #validateLottoPurchaseAmount(purchaseAmount) {
        if (isNaN(purchaseAmount)) {
            throw new Error("로또 구입 금액은 숫자여야 합니다.");
        }

        if (purchaseAmount < 1000) {
            throw new Error("로또 구입 금액은 1000원 이상이어야 합니다.");
        }

        if (purchaseAmount % 1000 !== 0) {
            throw new Error("로또 구입 금액은 1000원 단위여야 합니다.");
        }
    }

    calculateLottoCountFromAmount(purchaseAmount) {
        return purchaseAmount / 1000;
    }

    generateLottoTickets(lottoCount) {
        const lottoTickets = [];

        IOUtils.output(`\n${lottoCount}개를 구매했습니다.`);

        for (let i = 0; i < lottoCount; i++) {
            const lottoTicket = this.#generateLottoTicket();
            IOUtils.output(lottoTicket.numbers.sort((a, b) => a - b));
            lottoTickets.push(lottoTicket);
        }

        return lottoTickets;
    }

    #generateLottoTicket() {
        return new Lotto(GameUtils.getUniqueNumbersInRange(1, 45, 6));
    }


}

export default LottoMachine;