import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
    answer;
    lottos;
    bonus;
    threeCorrect;
    fourCorrect;
    fiveCorrect;
    fiveOneCorrect;
    sixCorrect;

    constructor() {
        this.answer = [];
        this.lottos = [];
        this.bonus = null;
        this.threeCorrect = 0;
        this.fourCorrect = 0;
        this.fiveCorrect = 0;
        this.fiveOneCorrect = 0;
        this.sixCorrect = 0;
    }

    async play() {
        //가격 입력 받음
        let price;
        try {
            price = Number(
                await MissionUtils.Console.readLineAsync(
                    "구입금액을 입력해주세요.\n"
                )
            );
            if (isNaN(price) || price % 1000 !== 0) {
                throw new Error("[ERROR]");
            }
        } catch (e) {
            MissionUtils.Console.print("[ERROR]");
            this.play();
            return;
        }

        // 입력받은 가격에 대해 로또 생성
        this.buyLottos(price);

        // 당첨번호(직접 입력하는 번호) 입력 받음
        this.answer = (
            await MissionUtils.Console.readLineAsync(
                "당첨 번호를 입력해 주세요.\n"
            )
        )
            .split(",")
            .map(Number);

        //보너스 번호 입력 받음
        await this.BonusInput();

        //당첨 결과 실행
        this.calResult();

        //당첨 결과 발표 실행
        this.printResult();

        //수익률 결과 발표 실행
        this.calProfitRate(
            price,
            this.threeCorrect,
            this.fourCorrect,
            this.fiveCorrect,
            this.fiveOneCorrect,
            this.sixCorrect
        );
    }

    //로또 구매 및 장수만큼 로또 번호 생성
    buyLottos(price) {
        const numOfLottos = Math.floor(price / 1000);
        MissionUtils.Console.print(`${numOfLottos}개를 구매했습니다.`);
        this.generateNumbers(numOfLottos);
    }

    //내가 선택하는 복권 번호
    generateNumbers(numOfLottos) {
        for (let i = 0; i < numOfLottos; i++) {
            const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6
            ).sort((a, b) => a - b);
            this.lottos.push(new Lotto(numbers));

            let str = "[";
            for (let i = 0; i < numbers.length; i++) {
                if (i === numbers.length - 1) {
                    str += String(numbers[i]) + "]";
                } else {
                    str += String(numbers[i]) + ", ";
                }
            }
            MissionUtils.Console.print(str);
        }
    }

    //결과 계산 함수
    calResult() {
        for (const ticket of this.lottos) {
            let count = ticket.answerCount(this.answer);
            if (count === 3) {
                this.threeCorrect++;
            } else if (count === 4) {
                this.fourCorrect++;
            } else if (count === 5) {
                if (ticket.bonusMatch(this.bonus)) {
                    this.fiveOneCorrect++;
                } else {
                    this.fiveCorrect++;
                }
            } else if (count === 6) {
                this.sixCorrect++;
            }
        }
    }

    //결과 출력 함수
    printResult() {
        MissionUtils.Console.print("당첨 통계");
        MissionUtils.Console.print("---");
        MissionUtils.Console.print(
            `3개 일치 (5,000원) - ${this.threeCorrect}개`
        );
        MissionUtils.Console.print(
            `4개 일치 (50,000원) - ${this.fourCorrect}개`
        );
        MissionUtils.Console.print(
            `5개 일치 (1,500,000원) - ${this.fiveCorrect}개`
        );
        MissionUtils.Console.print(
            `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.fiveOneCorrect}개`
        );
        MissionUtils.Console.print(
            `6개 일치 (2,000,000,000원) - ${this.sixCorrect}개`
        );
    }

    //보너스 번호 입력
    async BonusInput() {
        try {
            this.bonus = Number(
                await MissionUtils.Console.readLineAsync(
                    "보너스 번호를 입력해 주세요.\n"
                )
            );
            if (isNaN(this.bonus)) {
                throw new Error("[ERROR]");
            }
        } catch (e) {
            MissionUtils.Console.print("[ERROR]");
            this.BonusInput();
            return;
        }
    }

    //수익률 계산 함수
    calProfitRate(
        price,
        threeCorrect,
        fourCorrect,
        fiveCorrect,
        fiveOneCorrect,
        sixCorrect
    ) {
        const prizeResult =
            5000 * threeCorrect +
            50000 * fourCorrect +
            1500000 * fiveCorrect +
            300000000 * fiveOneCorrect +
            2000000000 * sixCorrect;
        const ProfitRate = ((prizeResult / price) * 100).toFixed(1);
        MissionUtils.Console.print(`총 수익률은 ${ProfitRate}%입니다.`);
    }
}

export default App;
