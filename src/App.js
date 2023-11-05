import { MissionUtils, Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
    async play() {
        const purchaseAmount = await this.getValidPurchaseAmount();
    }

    async getValidPurchaseAmount() {
        while (true) {
            const purchaseAmount = await this.getInputNumber(
                "구입 금액을 입력해 주세요."
            );
            if (this.isPurchaseAmountValid(purchaseAmount)) {
                return purchaseAmount;
            }
        }
    }
    async getInputNumber(prompt) {
        const input = await MissionUtils.Console.readLineAsync(prompt);
        const number = parseInt(input);

        if (!isNaN(number)) {
            return number;
        } else {
            return this.handleInvalidInput();
        }
    }

    async handleInvalidInput() {
        MissionUtils.Console.print("[ERROR] 숫자가 잘못된 형식입니다.");
        return NaN;
    }
    isPurchaseAmountValid(purchaseAmount) {
        if (purchaseAmount % 1000 === 0) {
            return true;
        } else {
            Console.print("[ERROR] 1,000원 단위로 입력해 주세요.");
            return false;
        }
    }
}

export default App;
