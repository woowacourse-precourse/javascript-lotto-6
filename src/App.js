import { Console } from "@woowacourse/mission-utils";

class App {
    async play() {
        Console.print("구입금액을 입력해 주세요.");
    }
    async getPurchaseAmount() {
        const purchaseAmount = await Console.readLineAsync().then((value) =>
            Number(value)
        );

        this.isValidPurchaseAmount(purchaseAmount);

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
}

export default App;
