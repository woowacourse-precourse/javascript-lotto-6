import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class Game {
    async gameRun() {

        let purchaseAmount = 0;
        while (true) {
            try {
                purchaseAmount = Number(await Console.readLineAsync("구입금액을 입력해 주세요 "));
                if (purchaseAmount % 1000 !== 0 || isNaN(purchaseAmount) || purchaseAmount < 1) {
                    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
                }
                break;
            } catch (error) {
                Console.print(error.message);
            }
        }

    }
}

export default Game;