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
                this.checkInputPurchasedAmount(purchasedAmount);
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

    async play() {
        const purchasedLottoCount = await this.buyAmountOfLotto()
        const buyLottoNumbers = this.generatingLottoNumbers(purchasedLottoCount)
        this.printingBuyingLottoNumbers(buyLottoNumbers)
    }
}

export default App;
