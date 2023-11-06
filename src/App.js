import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
    async play() {}

    async inputPurchaseAmount() {
        const purchaseAmount = await Console.readLineAsync(
            "구입금액을 입력해 주세요."
        );
        if (purchaseAmount % 1000 !== 0 || purchaseAmount < 1000) {
            throw new Error(
                "[ERROR] 구입금액은 1000원 이상이어야 하며, 1000원 단위로 입력해야 합니다."
            );
        }
        return purchaseAmount;
    }
}

export default App;
