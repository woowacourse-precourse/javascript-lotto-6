import IOUtils from "./IOUties.js";

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
}

export default LottoMachine;