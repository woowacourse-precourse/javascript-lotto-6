import Lotto from "./Lotto.js";
import {MissionUtils} from "@woowacourse/mission-utils";


class App {
    checkInputPurchasedAmount(purchasedAmount) {
        if (isNaN(purchasedAmount) || purchasedAmount % 1000 !== 0)
            throw new Error("[ERROR] 잘못된 숫자를 입력하셨습니다.");
    }

    generatingLottoNumbers(count) {
        let lottoNumbers = []
        for (let i = 0; i < count; i++) {
            const lottoNumber = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))
            lottoNumbers.push(lottoNumber.getNumbers())
        }
        return lottoNumbers
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




    async play() {
        const purchasedLottoCount = await this.buyAmountOfLotto()
        const buyLottoNumbers = this.generatingLottoNumbers(purchasedLottoCount)
        console.log(buyLottoNumbers)
    }
}

export default App;
