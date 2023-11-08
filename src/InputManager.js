import { Console } from "@woowacourse/mission-utils";

class InputManager {
    async enterAmount() {
        const inputAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        const cleanedAmount = this.cleanInput(inputAmount);
        this.validateAmount(cleanedAmount);
        return parseInt(cleanedAmount, 10);
    }

    cleanInput(input) {
        return input.replace(/\s+/g, '');
    }

    validateAmount(amount) {
        if (!/^\d+$/.test(amount)) {
            throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
        }

        const numericAmount = parseInt(amount, 10);
        if (numericAmount % 1000 !== 0) {
            throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        }
    }
}
  
export default InputManager;