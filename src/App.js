import { Console } from "@woowacourse/mission-utils";

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
                console.log(`value: ${Number(value)}`);
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
    
}

export default App;
