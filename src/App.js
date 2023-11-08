import Lotto from "./Lotto.js";
import {MissionUtils} from "@woowacourse/mission-utils";


class App {
    checkInputPurchasedAmount(purchasedAmount) {
        if (isNaN(purchasedAmount) || purchasedAmount % 1000 !== 0)
            throw new Error("[ERROR] 잘못된 숫자를 입력하셨습니다.");
    }


    async buyAmountOfLotto() {
        while (true) {
            try {
                const purchasedAmount = await MissionUtils.Console.readLineAsync("구입금액을 입력해주세요.\n");
                this.checkInputPurchasedAmount(purchasedAmount);햐
                return purchasedAmount / 1000;
            } catch (e) {
                console.log(e.message);
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
        if(number < 1 || number > 45){
            throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.')
        }
    }

    isInputWinningNumberError(lottoNumber) {
        const lottoNumbers = lottoNumber.split(',').map(number => parseInt(number))
        lottoNumbers.forEach(number => this.isInputRangeError(number))
        const checkDuplicated = lottoNumbers.filter((number, index) => lottoNumbers.indexOf(number) !== index)
        if(lottoNumbers.length !== 6 || lottoNumbers.includes(NaN) || checkDuplicated.length !== 0){
            throw new Error(`[ERROR] 잘못된 당첨번호를 입력하셨습니다.`)
        }
    }
    isInputWinningBonusNumberError(lottoNumber, bonusNumber) {
        this.isInputRangeError(bonusNumber)
        if(lottoNumber.includes(bonusNumber) || bonusNumber.length !== 1){
            throw new Error(`[ERROR] 잘못된 보너스 번호를 입력하셨습니다.`)
        }
    }

    async getLottoWinningNumber() {
        while (true) {
            try{
                const lottoWinningNumber = await MissionUtils.Console.readLineAsync(`\n당첨 번호를 입력해 주세요.\n`)
                this.isInputWinningNumberError(lottoWinningNumber);
                const lottoBonusNumber = await MissionUtils.Console.readLineAsync(`\n보너스 번호를 입력해 주세요.\n`)
                this.isInputWinningBonusNumberError(lottoWinningNumber, lottoBonusNumber)
                return `${lottoWinningNumber},${lottoBonusNumber}`.split(',').map(number => parseInt(number))
            }catch (error){
                console.log(error.message)
            }
        }
    }

    async play() {
        const purchasedLottoCount = await this.buyAmountOfLotto()
        const buyLottoNumbers = this.generatingLottoNumbers(purchasedLottoCount)
        this.printingBuyingLottoNumbers(buyLottoNumbers)
        const lottoWinningNumber = await this.getLottoWinningNumber()
    }
}

export default App;
