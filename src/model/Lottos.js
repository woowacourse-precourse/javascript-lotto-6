import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import UserView from '../view/UserView.js';
import { LOTTO_OUTPUT_RANK, LOTTO_PRIZE_MONEY } from '../comm/Util.js';
import LottoValidate from "../validate/LottoValidate.js";

class Lottos{

    static MIN_NUMBER = 1;
    static MAX_NUMBER = 45;
    static NUMBER_LENGTH = 6;
    static UNIT_PRICE = 1000;

    constructor(amount){
        this.amount = amount;
        this.purchaseLottoNumbers = [];
        this.lottoOutputRank = [];
        this.lottoCount = this.amount / Lottos.UNIT_PRICE;
        this.userView = new UserView();
        this.#validate(amount);
        this.lottoNumbers();
    }

    #validate() {
        new LottoValidate().inputPurchaseAmountValidate(this.amount);
        this.userView.userOutputLottoCount(this.amount);
    }

    lottoNumbers = () => {    
        for(let i = 0; i < this.lottoCount; i++){
            const CREATE_RANDOM_NUMBER = this.createRandomNumber();
            this.purchaseLottoNumbers.push(CREATE_RANDOM_NUMBER);
        }
        new Lotto(this.purchaseLottoNumbers).userOutputPurchaseLotto();
    };

    createRandomNumber = () => {
        const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(Lottos.MIN_NUMBER, Lottos.MAX_NUMBER, Lottos.NUMBER_LENGTH);
        return RANDOM_NUMBER;
    }

    lottoNumberResultCount = (purchaseLotto, winningNumber, bonusNumber) => {
        const LOTTO_RANK = new Lotto(purchaseLotto).resultLottoPrize(winningNumber, bonusNumber);
        this.lottoOutputRank = [
            LOTTO_OUTPUT_RANK.FIFTH_RANK,
            LOTTO_OUTPUT_RANK.FOURTH_RANK,
            LOTTO_OUTPUT_RANK.THIRD_RANK,
            LOTTO_OUTPUT_RANK.SECOND_RANK,
            LOTTO_OUTPUT_RANK.FIRST_RANK            
        ];
        return LOTTO_RANK;
    };

    lottoYieldResult = (lottoRank) => {
        let moeny = 0;
        const PRIZE_MOENY = [
            LOTTO_PRIZE_MONEY.FIRST_RANK,
            LOTTO_PRIZE_MONEY.SECOND_RANK,
            LOTTO_PRIZE_MONEY.THIRD_RANK,
            LOTTO_PRIZE_MONEY.FOURTH_RANK,
            LOTTO_PRIZE_MONEY.FIFTH_RANK
        ]
        PRIZE_MOENY.forEach((data, idx) => {
            moeny += data*lottoRank[idx];
        })
        return moeny/this.amount*100
    }

}

export default Lottos