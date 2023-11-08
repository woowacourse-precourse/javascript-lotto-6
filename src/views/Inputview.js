import { Console } from "@woowacourse/mission-utils";
import ErrorMessage from "../constant/ErrorMessage.js";
import WinningLotto from "../models/WinningLotto.js";

class Inputview {
    validateAmount(amount) {
        if (amount % 1000 !== 0 || amount <= 0) {
            throw new Error(ErrorMessage.PURCHASE_UNIT_IS_1000);
        }
    }

    async readAmount() {
        try {
            let amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
            amount = parseInt(amount);
            this.validateAmount(amount);
            return amount / 1000;
        } catch (error) {
            Console.print(error.message);
            return this.readAmount(); 
        }
    }

    async readWinningNumbers() {
        try {
            const winningnumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
            const numbers = winningnumbers.split(',').map(Number);
            return new WinningLotto(numbers);
        } catch (error) {
            Console.print(error.message);
            return this.readWinningNumbers(); 
        }
    }

    async readBonusNumber(winningnumbers) {
        try {
            const bonusNumber = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
            return WinningLotto.validate_bonus(winningnumbers, parseInt(bonusNumber));
        } catch (error) {
            Console.print(error.message);
            return this.readBonusNumber(winningnumbers); 
        }
    }
}

export default Inputview;
