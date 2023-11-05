import {MissionUtils} from "@woowacourse/mission-utils";
import {LOTTO_INFO} from "./constants/Constants.js";

class ResultBoard {

    constructor(myNumbers) {
        this.myLottoNumbers = myNumbers;
        this.resultFromLastPrize = [];
    }

    decideWinning(winningNumbers, bonusNumber) {
        this.myLottoNumbers.map((numbers) => {
            let winNumberCount = 0;
            let hasBonusNumber = false;
            console.log('numbers', numbers);
            numbers.forEach((number) => {
                winningNumbers.includes(number) && winNumberCount++;
                hasBonusNumber = bonusNumber === number && true;
            })
            this.decideRank(winNumberCount, hasBonusNumber);
        })
    }

    decideRank(winNumberCount, isBonusNumber) {
        this.resultFromLastPrize = Array.from({length: 5}).fill(0);
        LOTTO_INFO.REQUIREMENTS_NUMBERS.forEach((requirement, index) => {
            if (requirement === 5) {
                if (isBonusNumber) {
                    return this.resultFromLastPrize[1]++;
                }
                this.resultFromLastPrize[2]++;
            }
            if (winNumberCount === requirement) return this.resultFromLastPrize[index]++;
        })
    }

    printResultTable() {
        MissionUtils.Console.print(
            `당첨 통계\n---\n`);
        LOTTO_INFO.PRIZES.map((prize, index) => {
            console.log('prize', this.formatNumbersWithComma(prize));
            MissionUtils.Console.print(`${LOTTO_INFO.REQUIREMENTS_NUMBERS[index]}개 일치 (${this.formatNumbersWithComma(prize)}원) - ${this.resultFromLastPrize[index]}개`);
        });
    }

    //util 함수로 분리
    formatNumbersWithComma(numberString) {
        console.log('string', numberString);
        const splitArr = [];
        let number = numberString;
        while (number.length > 0) {
            const splitNumbers = number.slice(-3);
            number = number.slice(0, -3);
            splitArr.unshift(splitNumbers);
        }
        return splitArr.join(',');
    }

    calculateEarning(ticketCost) {
        const inputCost = ticketCost * LOTTO_INFO.LOTTO_PRICE;
        const outputCost = Array.from({length: 5}).fill((_, i) => i).reduce((acc, cur) => {
            acc += this.resultFromLastPrize[cur] * LOTTO_INFO.PRIZES[cur]
            return acc;
        }, 0)
        console.log('input', inputCost);
        console.log('ou[ut', outputCost);
    }
}

export default ResultBoard;