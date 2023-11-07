import { Console } from "@woowacourse/mission-utils";
class LottoBudget {
    lottoBudget;
    LOTTO_NUMBER;
    ERROR_MESSEGE="[ERROR] 숫자가 잘못된 형식입니다.";
    GET_LOTTO_BUDGET_INPUT="구입금액을 입력해 주세요.\n";

    constructor(MIN_LOTTO_NUM,MAX_LOTTO_NUM,LOTTO_PRICE) {
        this.MIN_LOTTO_NUM=MIN_LOTTO_NUM;
        this.MAX_LOTTO_NUM=MAX_LOTTO_NUM;
        this.LOTTO_PRICE=LOTTO_PRICE;
    }

    isValid(lottoBudget){
        if(lottoBudget < this.MIN_LOTTO_NUM*this.LOTTO_PRICE || lottoBudget > this.MAX_LOTTO_NUM*this.LOTTO_PRICE){
            throw new Error(this.ERROR_MESSEGE);
        }

        this.LOTTO_NUMBER = lottoBudget/LOTTO_PRICE;
        const CHANGE = lottoBudget%LOTTO_PRICE

        if(CHANGE!==0){
            throw new Error(this.ERROR_MESSEGE);
        }
    }

    async getInput() {
        this.lottoBudget = parseInt(await Console.readLineAsync(this.GET_LOTTO_BUDGET_INPUT));
        this.isValid(this.lottoBudget);
    }

}

export default LottoBudget;
