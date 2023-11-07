import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export default class InputHandler {
    static async getPurchaseAmount() {
        const input = await MissionUtils.Console.readLine("구입금액을 입력해 주세요.");
        const amount = parseInt(input, 10);

        if (isNaN(amount) || amount <= 0 || amount % Lotto.PRICE !== 0) {
            throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위입니다.");
        }
        return amount;
    }
    
}
