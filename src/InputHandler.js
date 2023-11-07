import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export default class InputHandler {
    static async getPurchaseAmount() {
        while (true) {
            try {
                const input = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
                return Lotto.validatePurchaseAmount(input);
            } catch (error) {
                MissionUtils.Console.print(error.message);
            }
        }
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

    static async getBonusNumbers() {
        let bonusNumber;
        while (true) {
            try {
                const input = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
                bonusNumber = parseInt(input.trim(), 10);
                if (isNaN(bonusNumber)) {
                    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
                }
                if (bonusNumber < 1 || bonusNumber > 45) {
                    throw new Error("[ERROR] 보너스번호는 1에서 45 사이의 숫자여야 합니다.");
                }
                return bonusNumber;

            } catch (error) {
                MissionUtils.Console.print(`[ERROR] ${error.message}`);
            }
        }
    }
}
