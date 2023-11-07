import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
class App {
    async play() {
        Console.print("구입금액을 입력해 주세요.");

        const purchaseAmount = await this.getPurchaseAmount();
        Console.print(purchaseAmount);
        const lottoArr = this.lottoVendingMachine(purchaseAmount);
        Console.print(this.renderLottoTickets(lottoArr));
        Console.print("당첨번호를 입력해주세요.");
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
            } catch (err) {
                this.lottoVendingMachine(purchaseAmount);
            }
        }
        return lottoArr;
    }

    renderLottoTickets(lottoArr) {
        const lottoNumberArr = lottoArr.map((el) => el.printLottoNumber());
        const removeArrSpace = lottoNumberArr.map((el) => el.join(", "));
        const lottoText = `${
            lottoArr.length
        }개를 구매했습니다.\n[${removeArrSpace.join("]\n[")}]`;
        return lottoText;
    }

    isValidWinningNumber(input) {
        const inputArr = input.split(",");
        if (inputArr.length !== 6) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        const invalidWinningNumberArr = inputArr.filter(
            (el) => el > 45 || el < 1
        );
        if (invalidWinningNumberArr.length !== 0) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }
}

export default App;
