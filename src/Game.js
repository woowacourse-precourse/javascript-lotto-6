import{
    Console,
    Random,
} from "@woowacourse/mission-utils";
import {validate} from "./validation.js";
import {Lotto} from "./Lotto.js";

export class Game {
    constructor(money) {
        this.validate(money)
        this.quantity = money / 1000;
        this.list = [];
        this.generateWinningNumberList();
    }

    validate(input) {
        validate.moneyInput(input);
    }

    generateWinningNumberList() {
        for (let i = 0; i < this.quantity; i++) {
            const winningNumber = new Lotto(
                Random.pickUniqueNumbersInRange(1, 45, 6)
            );
            this.list.push(winningNumber);
        }
    }

    quantityOfPurchase() {
        Console.print(`${this.quantity}개를 구매했습니다.\n`);
    }

    printWinningNumberList() {
        this.list.forEach((el) => {
            el.printWinningNumber();
        });
    }

    getLottoResult(winningNumbers, bonusNumber) {
        let lottoResultList = [];
        this.list.forEach((el) => {
            lottoResultList.push(el.getResult(winningNumbers, bonusNumber));
        });
        return lottoResultList.filter((el) => el <= 5);
    }

    printWinningHistory(result) {
        const winningHistoryList = [
            "3개 일치 (5,000원)",
            "4개 일치 (50,000원)",
            "5개 일치 (1,500,000원)",
            "5개 일치, 보너스 볼 일치 (30,000,000원)",
            "6개 일치 (2,000,000,000원)",
        ];
        winningHistoryList.forEach((el, i) => {
            const correctCount = this.getWinningCount(result, i);
            Console.print(`${el} - ${correctCount}개`);
        });
    }

    getResultRate(winningNumbers) {
        const lotto = [5000, 50000, 1500000, 30000000, 2000000000];
        const result = lotto.reduce((acc, cur, i) => {
            const correctCount = this.getWinningCount(winningNumbers, i);
            return acc + cur * correctCount;
        }, 0);
        const rate = (result / (this.quantity * 1000) * 100).toFixed(1);
        Console.print(`총 수익률은 ${rate}%입니다.`);
    }

    getWinningCount(result, i) {
        return result.filter((el) => el === 5 - i).length;
    }
}