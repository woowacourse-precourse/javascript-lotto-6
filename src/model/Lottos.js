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
        this.lottoCount = this.amount / 1000;
        this.inputLottoValidate(amount);
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
        const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(Lottos.MIN_NUMBER, Lottos.MAX_NUMBER, Lottos.MINNUMBER_LENGTH_NUMBER);
        this.lotto = new Lotto(RANDOM_NUMBER);
    }

    lottoNumberResultCount = (purchaseLotto, winningNumber, bonusNumber) => {
        const results = [];
        for(const PURCHASE_LOTTO of purchaseLotto){
            const matchedNumbers = this.countMatchingNumbers(PURCHASE_LOTTO, winningNumber);
            results.push(matchedNumbers);
        }
    };

    countMatchingNumbers = (purchaseLotto, winningNumber) => {
        return purchaseLotto.filter(number => winningNumber.includes(number)).length;
    }


}

export default Lottos