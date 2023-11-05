import {MissionUtils} from "@woowacourse/mission-utils";
import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";
import validation from "./utils/valiidation.js";

class LottoManager {
    constructor() {
        this.myLottoNumbers = null;
        this.count = null;
        this.bonusNumber = null;
        this.result = {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0,
        };
    }

    makeNumbersAndPrint(lottoTickets) {
        this.count = 0;
        while (this.count < lottoTickets) {
            const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6,
            );
            this.#setAndPrintNumbers(randomNumbers);
            this.count++;
        }
    }

    #setAndPrintNumbers(numbers) {
        const sortedNumbers = numbers.sort((a, b) => a - b);
        if (this.count === 0) {
            this.myLottoNumbers = [sortedNumbers]
        } else {
            this.myLottoNumbers = [this.myLottoNumbers, sortedNumbers];
        }
        MissionUtils.Console.print(sortedNumbers);
    }

    async getBonusNumber(winningNumbers) {
        const bonusNumber =
            await inputHandler.getInput(INPUT_MESSAGE.BONUS_NUMBER);
        validation.isValidBonusNumber(winningNumbers, bonusNumber)
        this.bonusNumber = bonusNumber;
    }

    decideWinning(winningNumbers) {
        this.myLottoNumbers.map((numbers) => {
            let winNumberCount = 0;
            let hasBonusNumber = false;
            console.log('numbers', numbers);
            numbers.forEach((number) => {
                winningNumbers.includes(number) && winNumberCount++;
                hasBonusNumber = this.bonusNumber === number && true;
            })
            this.decideRank(winNumberCount, hasBonusNumber);
        })
    }

    decideRank(winNumberCount, isBonusNumber) {
        if (winNumberCount === 6) return this.result.first++;
        if (winNumberCount === 5 && isBonusNumber) return this.result.second++;
        if (winNumberCount === 5) return this.result.third++;
        if (winNumberCount === 4) return this.result.fourth++;
        if (winNumberCount === 3) return this.result.fifth++;
    }

    printResultTable() {
        MissionUtils.Console.print(
            `3개 일치 (5,000원) - ${this.result.fifth}개
             4개 일치 (50,000원) - ${this.result.fourth}개
             5개 일치 (1,500,000원) - ${this.result.third}개
             5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.second}개
             6개 일치 (2,000,000,000원) - ${this.result.first}개
        `)
    }
}

export default LottoManager