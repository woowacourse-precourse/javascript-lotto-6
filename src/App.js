import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
class App {
    async play() {
        Console.print("구입금액을 입력해 주세요.");

        const purchaseAmount = await this.getPurchaseAmount();
        Console.print(purchaseAmount);
    }

    async getPurchaseAmount() {
        const purchaseAmount = await Console.readLineAsync()
            .then((value) => {
                this.isValidPurchaseAmount(Number(value));
                return Number(value);
            })
            .catch((err) => {
                return this.getPurchaseAmount();
            });
        return purchaseAmount;
    }

    isValidPurchaseAmount(input) {
        if (isNaN(input)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if (input % 1000 !== 0) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    lottoVendingMachine(purchaseAmount) {
        const lottoAmount = purchaseAmount / 1000;
        const lottoArr = [];
        while (lottoArr.length < lottoAmount) {
            try {
                const lottoNumberArr = Random.pickUniqueNumbersInRange(
                    1,45,6
                ).sort((a, b) => a - b);
                lottoArr.push(new Lotto(lottoNumberArr));
                console.log(lottoArr);
            } catch (err) {
                this.lottoVendingMachine(purchaseAmount);
            }
        }
        return lottoArr;
    }
}

export default App;
