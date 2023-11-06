import IOUtils from "./IOUties.js";

class LottoMachine {

    async getLottoPurchaseAmount() {
        const purchaseAmount = await IOUtils.input("구입금액을 입력해 주세요.\n");
        this.#validateLottoPurchaseAmount(purchaseAmount);
        return Number(purchaseAmount);
    }

    #validateLottoPurchaseAmount() {
    }
}

export default LottoMachine;