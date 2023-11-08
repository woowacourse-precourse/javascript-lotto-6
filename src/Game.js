import Lotto from "./Lotto";
import { MissionUtils, Console } from '@woowacourse/mission-utils';
import { GetTotalInfo } from "./controller/GetTotalInfo";
import { MATCHED_NUMBER_3, MATCHED_NUMBER_4, MATCHED_NUMBER_5, MATCHED_NUMBER_5_BONUS, MATCHED_NUMBER_6 } from './static/static';

export class Game {
    #tickets;
    #lottoList;
    #winningNumbers;
    #bonusNumber;
    #results;
    #profitRate;

    constructor(price, winningNumbers, bonusNumber) {
        this.#tickets = price / 1000;
        this.#winningNumbers = winningNumbers;
        this.#bonusNumber = bonusNumber;
        this.#lottoList = [];
        this.#results = {
            [MATCHED_NUMBER_3]: 0,
            [MATCHED_NUMBER_4]: 0,
            [MATCHED_NUMBER_5]: 0,
            [MATCHED_NUMBER_5_BONUS]: 0,
            [MATCHED_NUMBER_6]: 0
        };
    }

    start() {
        this.generateLottos();

        Console.print(`${this.#tickets}개를 구매했습니다.`);

        this.printLottos();
        this.calculateResult();
        this.printResult();
    }

    generateLottos() {
        for (let i = 0; i < this.#tickets; i++) {
            const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            this.#lottoList.push(new Lotto(numbers));
        }
    }

    printLottos() {
        this.#lottoList.forEach(lotto => {
            Console.print(`[${lotto.getNumbers().join(', ')}]`);
        });
    }

    calculateResult() {
        this.#lottoList.forEach(lotto => {
            const matchedNumbers = GetTotalInfo.getMatchedNumber(lotto, this.#winningNumbers);

            if (matchedNumbers === 3) this.#results[MATCHED_NUMBER_3]++;
            else if (matchedNumbers === 4) this.#results[MATCHED_NUMBER_4]++;
            else if (matchedNumbers === 5 && lotto.getNumbers().includes(this.#bonusNumber)) this.#results[MATCHED_NUMBER_5_BONUS]++;
            else if (matchedNumbers === 5) this.#results[MATCHED_NUMBER_5]++;
            else if (matchedNumbers === 6) this.#results[MATCHED_NUMBER_6]++;
        });

        this.#profitRate = GetTotalInfo.getProfitRate(this.#results, this.#tickets);
    }

    printResult() {
        Console.print("당첨 통계");
        Console.print("---");
        Console.print(`3개 일치 (5,000원) - ${this.#results[MATCHED_NUMBER_3]}개`);
        Console.print(`4개 일치 (50,000원) - ${this.#results[MATCHED_NUMBER_4]}개`);
        Console.print(`5개 일치 (1,500,000원) - ${this.#results[MATCHED_NUMBER_5]}개`);
        Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#results[MATCHED_NUMBER_5_BONUS]}개`);
        Console.print(`6개 일치 (2,000,000,000원) - ${this.#results[MATCHED_NUMBER_6]}개`);
        Console.print(`총 수익률은 ${this.#profitRate.toFixed(1)}%입니다.`);
    }


}