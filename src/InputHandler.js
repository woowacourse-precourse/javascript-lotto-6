import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export default class InputHandler {
    static async getPurchaseAmount() {
        let amount;
        while (true) {
            const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
            const sanitizedInput = input.replace(/,/g, '');
            amount = parseInt(sanitizedInput, 10);

            if (!isNaN(amount) && amount > 0 && amount % Lotto.PRICE === 0) {
                break;
            }
            MissionUtils.Console.print("[ERROR] 로또 구입 금액은 1,000원 단위입니다.")
        }
        return amount;
    }

    static async getWinningNumbers() {
        while (true) {
            const input = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
            const numberStrings = input.split(',').map(n => n.trim());

            try {
                const numbers = numberStrings.map(n => parseInt(n, 10));
                new Lotto(numbers);
                return numbers;
            } catch (error) {
                MissionUtils.Console.print(error.message);
            }
        }
    }

    static getBonusNumbers() {
        MissionUtils.Console.print("보너스 번호를 입력해 주세요.");
    }
}
