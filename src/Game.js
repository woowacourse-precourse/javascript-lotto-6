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

        const count = purchaseAmount / 1000;
        Console.print(`${count}개를 구매했습니다.`);

        let numList = [];
        let lottoList = [];

        for (let i = 0; i < count; i++) {
            const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            numList.push(numbers);
            lottoList.push(new Lotto(numbers));
            Console.print(`[${numbers.join(", ")}]`);
        }

    }
}

export default Game;