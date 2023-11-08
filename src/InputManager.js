import { Console } from "@woowacourse/mission-utils";

class InputManager {
    async enterAmount() {
        const inputAmount = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        const cleanedAmount = this.cleanInput(inputAmount);
        return this.validateAmount(cleanedAmount);
    }

    cleanInput(input) {
        return input.replace(/\s+/g, '').replace(/,/g, '');
    }

    validateAmount(amount) {
        const numericAmount = Number(amount);

        if (isNaN(numericAmount)) {
            throw new Error("[ERROR] 구입 금액은 숫자여야 합니다.");
        }

        if (numericAmount <= 0) {
            throw new Error("[ERROR] 구입 금액은 양수여야 합니다.");
        }

        if (numericAmount % 1000 !== 0) {
            throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.");
        }

        return numericAmount;
    }
}
  
export default InputManager;
