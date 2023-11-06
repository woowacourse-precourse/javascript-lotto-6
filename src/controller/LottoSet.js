import { PRIZE_CRITERIA, PRIZE_MONEY } from "../constants/PrizeConstant.js";
import Output from "../view/Output.js";

class LottoSet {
    #lottoSet;

    #scoreboard;

    #prizeMoney;

    constructor(lottoSet){
        this.#lottoSet = lottoSet;
        this.#prizeMoney = 0;
        this.#scoreboard = {
            '1st' : 0,
            '2nd' : 0,
            '3rd' : 0,
            '4th' : 0,
            '5th' : 0
        }
    }

    printLottoSet(){
        this.#lottoSet.forEach(lotto => {
            lotto.printLotto();
        });
    }

    calculatePrizeResult(winningLotto, bonusNumber){
        let point; 
        let place;
        this.#lottoSet.forEach(lotto => {
            point = lotto.compareToWinningLotto(winningLotto, bonusNumber);
            if(point > 2){
            place = PRIZE_CRITERIA[point];
            this.#scoreboard[place] += 1;
            this.#prizeMoney += PRIZE_MONEY[place];
            }
        })
    }

    printResult(){
        const format = `당첨 통계
----
3개 일치 (5,000원) - ${this.#scoreboard['5th']}개
4개 일치 (50,000원) - ${this.#scoreboard['4th']}개
5개 일치 (1,500,000원) - ${this.#scoreboard['3rd']}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.#scoreboard['2nd']}개
6개 일치 (2,000,000,000원) - ${this.#scoreboard['1st']}개
        `;
        Output.outputMessage(format);
        return this.#prizeMoney;
    }
}

export default LottoSet;