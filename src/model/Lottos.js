import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import LottoValidate from "../validate/LottoValidate.js";

class Lottos{

    static MIN_NUMBER = 1;
    static MAX_NUMBER = 45;
    static NUMBER_LENGTH = 6;
    static UNIT_PRICE = 1000;

    constructor(amount){
        this.amount = amount;
        this.purchaseLottoNumbers = [];
        this.matchingNumberCount = [];
        this.matchingBonusNumberCount = [];
        this.lottoCount = this.amount / Lottos.UNIT_PRICE;
        this.inputLottoValidate(amount);
        this.lottoNumbers();
    }

    inputLottoValidate = (amount) => {
        new LottoValidate().inputPurchaseAmountValidate(amount);
    }

    lottoNumbers = () => {    
        for(let i = 0; i < this.lottoCount; i++){
            const CREATE_RANDOM_NUMBER = this.createRandomNumber();
            this.purchaseLottoNumbers.push(CREATE_RANDOM_NUMBER);
        }
    };

    createRandomNumber = () => {
        const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(Lottos.MIN_NUMBER, Lottos.MAX_NUMBER, Lottos.NUMBER_LENGTH);
        this.lotto = new Lotto(RANDOM_NUMBER);
        return RANDOM_NUMBER;
    }

    lottoNumberResultCount = (purchaseLotto, winningNumber, bonusNumber) => {
        for(const LOTTO_ARR of purchaseLotto){
            const COMPARE_LOTTO_COUNT = this.compareLottoNumber(LOTTO_ARR, winningNumber);
            this.matchingNumberCount.push(COMPARE_LOTTO_COUNT);
            this.matchingBonusNumberCount.push(LOTTO_ARR.filter(number => number === Number(bonusNumber)).length);
        }
    };

    compareLottoNumber = (purchaseLotto, winningNumber) => {
        return purchaseLotto.filter(
            number => winningNumber.includes(number)
        ).length;
    }


}

export default Lottos