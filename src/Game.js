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

        let winNumInput = "";
        let winNum = [];
        let lotto = null;
        
        while (true) {
            try {
                winNumInput = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
                winNum = winNumInput.split(',').map(n => parseInt(n));
                lotto = new Lotto(winNum);  // 유효성 검사는 Lotto 클래스의 생성자에서 자동으로 실행됩니다.
                break;
            } catch (error) {
                Console.print(error.message);  // Lotto 클래스의 에러 메시지를 출력합니다.
            }
        }

        let bonusNum = 0;
        while (true) {
            try {
                bonusNum = parseInt(await Console.readLineAsync("보너스 번호를 입력해 주세요.\n"));
                if (isNaN(bonusNum) || bonusNum < 1 || bonusNum > 45) {
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