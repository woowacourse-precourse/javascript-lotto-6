import { Console } from "@woowacourse/mission-utils";
class LottoBudget {
    lottoBudget;
    MIN_LOTTO_NUM=0;
    MAX_LOTTO_NUM=10;
    LOTTO_PRICE=1000;
    ERROR_MESSEGE="[ERROR] 숫자가 잘못된 형식입니다.";
    GET_LOTTO_BUDGET_INPUT="구입금액을 입력해 주세요.\n";

    isValid(inputNumber){
        if(inputNumber < this.MIN_LOTTO_NUM*this.LOTTO_PRICE || inputNumber > this.MAX_LOTTO_NUM*this.LOTTO_PRICE){
            throw new Error(this.ERROR_MESSEGE);
        }

        if(inputNumber % this.LOTTO_PRICE!==0){
            throw new Error(this.ERROR_MESSEGE);
        }
    }

    async getInput() {
        this.lottoBudget = parseInt(await Console.readLineAsync(this.GET_LOTTO_BUDGET_INPUT));
        this.isValid(this.lottoBudget);
    }

}

export default LottoBudget;
