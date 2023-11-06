import {MissionUtils} from "@woowacourse/mission-utils";
import {LOTTO_INFO} from "./constants/Constants.js";

class ResultBoard {
    constructor(myNumbers) {
        this.myLottoNumbers = myNumbers;
        this.resultFromLastPrize = Array.from({length: 5}).fill(0);
        this.hasBonusNumer = false;
    }

    decideWinning(winningNumbers, bonusNumber) {
        this.myLottoNumbers.forEach((numbers) => {
            let winNumberCount = 0;
            numbers.forEach((number) => {
                winningNumbers.includes(number) && winNumberCount++;
                this.hasBonusNumer = parseInt(bonusNumber) === parseInt(number) && true;
                MissionUtils.Console.print(this.hasBonusNumer)
            })
            this.decideRank(winNumberCount);
        })
    }

    decideRank(winNumberCount) {
        if (winNumberCount === LOTTO_INFO.REQUIREMENT_NUMBER[2] && this.hasBonusNumer === true) return this.resultFromLastPrize[3]++
        if (winNumberCount === LOTTO_INFO.REQUIREMENT_NUMBER[2]) return this.resultFromLastPrize[2]++
        if (winNumberCount === LOTTO_INFO.REQUIREMENT_NUMBER[0]) return this.resultFromLastPrize[0]++;
        if (winNumberCount === LOTTO_INFO.REQUIREMENT_NUMBER[1]) return this.resultFromLastPrize[1]++;
        if (winNumberCount === LOTTO_INFO.REQUIREMENT_NUMBER[4]) return this.resultFromLastPrize[4]++;
    }

    printResultTable() {
        MissionUtils.Console.print(
            `당첨 통계\n---`);
        LOTTO_INFO.PRIZES.map((prize, index) => {
            if (index === 3)
                return MissionUtils.Console.print(`${LOTTO_INFO.REQUIREMENT_NUMBER[index]}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${this.resultFromLastPrize[index]}개`);
            return MissionUtils.Console.print(`${LOTTO_INFO.REQUIREMENT_NUMBER[index]}개 일치 (${prize.toLocaleString()}원) - ${this.resultFromLastPrize[index]}개`);
        });
    }

    calculateEarning(ticketCost) {
        const inputCost = ticketCost * LOTTO_INFO.LOTTO_PRICE;
        let outputEarning = 0;
        LOTTO_INFO.PRIZES.forEach((prize, index) => {
            outputEarning += prize * this.resultFromLastPrize[index]
        })
        const returnRate = ((outputEarning / inputCost) * 100).toFixed(1)
        ;
        MissionUtils.Console.print(`총 수익률은 ${returnRate}%입니다.`)
    }
}

export default ResultBoard;