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
                lotto = new Lotto(winNum);  
                break;
            } catch (error) {
                Console.print(error.message); 
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

        Console.print("\n당첨 통계\n---\n")
        // 일치 검사 로직 추가
        let matchCount = {
            3: 0,
            4: 0,
            5: 0,
            51: 0,
            6: 0
        };

        numList.forEach((numbers, i) => {
            const matchResult = lottoList[i].checkWinningNumbers(winNum, bonusNum);
            matchCount[matchResult]++;
        });

        Console.print(`3개 일치 (5,000원) - ${matchCount[3]}개`);
        Console.print(`4개 일치 (50,000원) - ${matchCount[4]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${matchCount[5]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchCount[51]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${matchCount[6]}개`);

        // 수익률 계산 및 출력
        const totalPrize = matchCount[3] * 5000 + matchCount[4] * 50000 + matchCount[5] * 1500000 + matchCount[51] * 30000000 + matchCount[6] * 2000000000;
        const profitRate = (totalPrize - purchaseAmount) / purchaseAmount * 100;
        Console.print(`총 수익률은 ${+100 + +profitRate.toFixed(2)}%입니다.`);
    }
}

export default Game;