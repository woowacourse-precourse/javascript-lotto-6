import { Console } from "@woowacourse/mission-utils";
import Budget from "./Budget.js";
class LottoBudget {

    LOTTO_NUMBER;

    MIN_LOTTO_NUM;
    MAX_LOTTO_NUM;
    LOTTO_PRICE;

    BUDGET;
    ERROR_MESSAGE="[ERROR] 숫자가 잘못된 형식입니다.";
    GET_LOTTO_BUDGET_INPUT_MESSAGE="구입금액을 입력해 주세요.\n";

    constructor(MIN_LOTTO_NUM,MAX_LOTTO_NUM,LOTTO_PRICE) {
        this.MIN_LOTTO_NUM=MIN_LOTTO_NUM;
        this.MAX_LOTTO_NUM=MAX_LOTTO_NUM;
        this.LOTTO_PRICE=LOTTO_PRICE;
        console.log(this.LOTTO_PRICE);
    }

    #isNumberCharacter(ch){
        if( ch < '0' || ch > '9') throw new Error(this.ERROR_MESSAGE);
    }
    #isAllCharacter(str) {
        for(let i = 0 ; i < str.length ; i++) {
            this.#isNumberCharacter(str[i]);
        }
    }
    async getInput() {
        while(true){
            try{
            const LOTTO_BUDGET_INPUT = await Console.readLineAsync(this.GET_LOTTO_BUDGET_INPUT_MESSAGE);
            this.#isAllCharacter(LOTTO_BUDGET_INPUT);
            this.lottoBudget = parseInt(LOTTO_BUDGET_INPUT);
            console.log(this.LOTTO_PRICE);
            this.BUDGET = new Budget(
                this.lottoBudget,
                this.MIN_LOTTO_NUM,
                this.MAX_LOTTO_NUM,
                this.LOTTO_PRICE
                );
            this.LOTTO_NUMBER = (this.BUDGET.budget)/this.LOTTO_PRICE;
            }catch(e){
                Console.print(e.message);
                continue;
            }
            break;
        }
    }
}

export default LottoBudget;
