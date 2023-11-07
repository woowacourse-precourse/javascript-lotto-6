import {MissionUtils} from "@woowacourse/mission-utils";
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

    static async getBonusNumbers(winningNumbers) {
        while (true) {
            const input = await MissionUtils.Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
            try {
                return Lotto.validateBonusNumber(input, winningNumbers);
            } catch (error) {
                MissionUtils.Console.print(`[ERROR] ${error.message}`);
            }
        }
    }
}
