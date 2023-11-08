import { Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class LottoResult {
    DEFAULT_WINNING_LOTTO;
    BONUS_WINNING_LOTTO;
    GENERATED_LOTTOS;
    LOTTO_BUDGET;

    LOTTO_RESULT_OUTPUT_MESSESGE = '당첨 통계\n---\n';
    MATCHING_NUMBER_COUNT_MESSEGE = '개 일치';
    BONUS_OUTPUT_MESSEGE = '보너스 볼 일치';
    PRIZES_INFO_ERROR_MESSEGE = '[ERROR] 잘못된 수상 정보입니다. 관리자에게 문의하세요.';

    PRIZES_ORDER = {};
    PRIZES = {
        1 : {
            'n' : 6,
            'bonus' : false,
            'amount' : 2000000000,
            'count' : 0
        },
        2 : {
            'n' : 5,
            'bonus' : true,
            'amount' : 30000000,
            'count' : 0
        },
        3 : {
            'n' : 5,
            'bonus' : false,
            'amount' : 1500000,
            'count' : 0,
        },
        4 : {
            'n' : 4,
            'bonus' : false,
            'amount' : 50000,
            'count' : 0
        },
        5 : {
            'n' : 3,
            'bonus' : false,
            'amount' : 5000,
            'count' : 0
        }
    };

    TOTAL_AMOUNT = 0;

    constructor(
        defaultWinningLotto,
        bonusWinningLotto,
        generatedLottos,
        lottoBudget
        ){
        this.#validate();
        this.DEFAULT_WINNING_LOTTO = defaultWinningLotto;
        this.BONUS_WINNING_LOTTO = bonusWinningLotto;
        this.GENERATED_LOTTOS = generatedLottos;
        this.LOTTO_BUDGET = lottoBudget;
        }

    #validate(){
        this.PRIZES_ORDER = Object.keys(this.PRIZES);
        for(let i = 1 ; i <= this.PRIZES_ORDER ; i += 1 ){
            if(this.PRIZES_ORDER[i-1] !== i) throw new Error(this.PRIZES_INFO_ERROR_MESSEGE);
        }
    }

    #formatNumberWithCommas(number) {
        const numberWithCommas = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return `(${numberWithCommas}원)`;
    }

    #countMatchingNumbers(lotto,defaultNumbers,bonusNumber) {
        const LOTTO_COPY = new Set(lotto);
        const MATCHING_NUMBERS = defaultNumbers.filter( number => LOTTO_COPY.has(number));
        
        const N = MATCHING_NUMBERS.length;
        const M = lotto.includes(bonusNumber);

        for(const key in this.PRIZES){
            if(this.PRIZES[key].n === N && this.PRIZES[key].bonus === M ) {
                this.PRIZES[key].count += 1;
                this.TOTAL_AMOUNT = this.TOTAL_AMOUNT + this.PRIZES[key].amount;
            }
        }
        return MATCHING_NUMBERS.length;
    }
    #calculateWinningLottoCount() {
        const DEFAULT_NUMBERS = (this.DEFAULT_WINNING_LOTTO).numbers;
        const BONUS_NUMBER = (this.BONUS_WINNING_LOTTO).number;

        const LOTTOS = this.GENERATED_LOTTOS;

        for(let i = 0 ; i < LOTTOS.length ; i += 1 ){
            const LOTTO = LOTTOS[i];
            this.#countMatchingNumbers(LOTTO.getNumbers(),DEFAULT_NUMBERS,BONUS_NUMBER);
        }
    }

    #showEachWinningLottoCount(prizeInfo) {
        let OUTPUT_MESSEGE;
        if(prizeInfo.bonus) OUTPUT_MESSEGE = `${prizeInfo.n}${this.MATCHING_NUMBER_COUNT_MESSEGE}, ${this.BONUS_OUTPUT_MESSEGE} ${this.#formatNumberWithCommas(prizeInfo.amount)} - ${prizeInfo.count}개`;
        if(!prizeInfo.bonus) OUTPUT_MESSEGE = `${prizeInfo.n}${this.MATCHING_NUMBER_COUNT_MESSEGE} ${this.#formatNumberWithCommas(prizeInfo.amount)} - ${prizeInfo.count}개`;
        console.log(typeof OUTPUT_MESSEGE);
        Console.print(OUTPUT_MESSEGE);
    }
    #showWinningLottoCount() {
        for(let i = 0 ; i < this.PRIZES_ORDER.length ; i += 1) {
            const key = this.PRIZES_ORDER[this.PRIZES_ORDER.length - 1 - i];
            this.#showEachWinningLottoCount(this.PRIZES[key]);
        }
    }
    
    #calculateProfitRate() {
        return Math.round((this.TOTAL_AMOUNT * 100/this.LOTTO_BUDGET) * 10) / 10;
    }
    #showProfitRate() {
        const PROFIT_RATE = this.#calculateProfitRate();
        const PROFIT_OUTPUT_MESSEGE = `총 수익률은 ${PROFIT_RATE}%입니다.`;
        Console.print(PROFIT_OUTPUT_MESSEGE);
    }

    showLottoResult() {
        Console.print(this.LOTTO_RESULT_OUTPUT_MESSESGE);
        const TOTAL_AMOUNT = this.#calculateWinningLottoCount();
        this.#showWinningLottoCount();
        this.#showProfitRate();
    }
    
}
export default LottoResult;