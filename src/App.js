import Lotto from "./Lotto.js";
import {MissionUtils} from "@woowacourse/mission-utils";


class App {
    checkInputPurchasedAmount(purchasedAmount) {
        if (isNaN(purchasedAmount) || purchasedAmount % 1000 !== 0) {
            throw new Error("[ERROR] 잘못된 숫자를 입력하셨습니다.");
        }
    }


    async buyAmountOfLotto() {
        while (true) {
            try {
                const purchasedAmount = await MissionUtils.Console.readLineAsync("구입금액을 입력해주세요.\n");
                this.checkInputPurchasedAmount(purchasedAmount);
                return purchasedAmount / 1000;
            } catch (error) {
                MissionUtils.Console.print(error.message)
            }
        }
    }

    generatingLottoNumbers(count) {
        let lottoNumbers = []
        for (let i = 0; i < count; i++) {
            const lottoNumber = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
            lottoNumbers.push(lottoNumber.getNumbers())
        }
        return lottoNumbers
    }

    printingBuyingLottoNumbers(lottoNumbers) {
        MissionUtils.Console.print(`${lottoNumbers.length}개를 구매했습니다.`)
        lottoNumbers.forEach((lottoNumber) => {
            lottoNumber.sort((a, b) => a - b)
            MissionUtils.Console.print(`[${lottoNumber[0]}, ${lottoNumber[1]}, ${lottoNumber[2]}, ${lottoNumber[3]}, ${lottoNumber[4]}, ${lottoNumber[5]}]`)
        })
    }

    isInputRangeError(number) {
        if (number < 1 || number > 45) {
            throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.')
        }
    }

    isInputWinningNumberError(lottoNumber) {
        const lottoNumbers = lottoNumber.split(',').map(number => parseInt(number))
        lottoNumbers.forEach(number => this.isInputRangeError(number))
        const checkDuplicated = lottoNumbers.filter((number, index) => lottoNumbers.indexOf(number) !== index)
        if (lottoNumbers.length !== 6 || lottoNumbers.includes(NaN) || checkDuplicated.length !== 0) {
            throw new Error(`[ERROR] 잘못된 당첨번호를 입력하셨습니다.`)
        }
    }

    isInputWinningBonusNumberError(lottoNumber, bonusNumber) {
        this.isInputRangeError(bonusNumber)
        if (lottoNumber.includes(bonusNumber) || bonusNumber.length !== 1) {
            throw new Error(`[ERROR] 잘못된 보너스 번호를 입력하셨습니다.`)
        }
    }

    async getLottoWinningNumber() {
        while (true) {
            try {
                const lottoWinningNumber = await MissionUtils.Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`)
                this.isInputWinningNumberError(lottoWinningNumber);
                const lottoBonusNumber = await MissionUtils.Console.readLineAsync(`\n보너스 번호를 입력해 주세요.\n`)
                this.isInputWinningBonusNumberError(lottoWinningNumber, lottoBonusNumber)
                return `${lottoWinningNumber},${lottoBonusNumber}`.split(',').map(number => parseInt(number))
            } catch (error) {
                MissionUtils.Console.print(error.message)
            }
        }
    }

    checkingWinningLottoNumber(lottoWinningNumber, buyLottoNumber) {
        const [winningNumber, bonusNumber] = [lottoWinningNumber.slice(0, 6), lottoWinningNumber.slice(6)]
        return buyLottoNumber.reduce((result, lotto) => {
            const matchCount = winningNumber.filter(matchedNumber => lotto.includes(matchedNumber)).length
            if (matchCount === 3) result.matchedThree++; else if (matchCount === 4) result.matchedFour++; else if (matchCount === 5) result.matchedFive++; else if (matchCount === 5 && bonusNumber.some(matchedNumber => lotto.includes(matchedNumber))) result.matchedFiveBonus++; else if (matchCount === 6) result.matchedFull++;
            return result
        }, {
            matchedThree: 0,
            matchedFour: 0,
            matchedFive: 0,
            matchedFiveBonus: 0,
            matchedFull: 0,
            lottoPurchasedAmount: buyLottoNumber.length * 1000
        })
    }

    calculateProfitablity(resultObj) {
        return (((5000 * resultObj.matchedThree + 50000 * resultObj.matchedFour + 1500000 * resultObj.matchedFive + 30000000 * resultObj.matchedFiveBonus + resultObj.matchedFull * 2000000000) / resultObj.lottoPurchasedAmount) * 100).toFixed(1)
    }

    printWinningLottoResult(resultObj) {
        const profitability = this.calculateProfitablity(resultObj)
        MissionUtils.Console.print('\n당첨 통계')
        MissionUtils.Console.print(`---`)
        MissionUtils.Console.print(`3개 일치 (5,000원) - ${resultObj.matchedThree}개`)
        MissionUtils.Console.print(`4개 일치 (50,000원) - ${resultObj.matchedFour}개`)
        MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${resultObj.matchedFive}개`)
        MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultObj.matchedFiveBonus}개`)
        MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${resultObj.matchedFull}개`)
        MissionUtils.Console.print(`총 수익률은 ${profitability}%입니다.`)
    }

    async play() {
        const purchasedLottoCount = await this.buyAmountOfLotto()
        const buyLottoNumbers = this.generatingLottoNumbers(purchasedLottoCount)
        this.printingBuyingLottoNumbers(buyLottoNumbers)
        const lottoWinningNumber = await this.getLottoWinningNumber()
        const winningLottoResult = this.checkingWinningLottoNumber(lottoWinningNumber, buyLottoNumbers)
        this.printWinningLottoResult(winningLottoResult)

    }
}

export default App;
