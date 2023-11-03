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
        new Lotto(this.purchaseLottoNumbers).userOutputPurchaseLotto();
    };

    createRandomNumber = () => {
        const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(Lottos.MIN_NUMBER, Lottos.MAX_NUMBER, Lottos.NUMBER_LENGTH);
        return RANDOM_NUMBER;
    }

    lottoNumberResultCount = (purchaseLotto, winningNumber, bonusNumber) => {
        const lottoRank = new Lotto(purchaseLotto).resultLottoPrize(winningNumber, bonusNumber);
        console.log(lottoRank);
    };

}

export default Lottos