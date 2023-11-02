import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

class Lottos{

    constructor(amount){
        this.amount = amount;
        this.purchaseLottoNumbers = [];
        this.lottoCount = this.amount / 1000;
        this.lottoNumbers();
    }

    lottoNumbers = () => {
        for(let i = 0; i < this.lottoCount; i++){
            const CREATE_RANDOM_NUMBER = this.createRandomNumber();
            this.purchaseLottoNumbers.push(CREATE_RANDOM_NUMBER);
        }
    };

    createRandomNumber = () => {
        const RANDOM_NUMBER = Random.pickUniqueNumbersInRange(1, 45, 6);
        this.lotto = new Lotto(RANDOM_NUMBER);
        return RANDOM_NUMBER;
    }

    lottoNumberResultCount = (purchaseLotto, winningNumber, bonusNumber) => {
        const results = [];
        for(const PURCHASE_LOTTO of purchaseLotto){
            const matchedNumbers = this.countMatchingNumbers(PURCHASE_LOTTO, winningNumber);
            results.push(matchedNumbers);
        }
        console.log(results);
    };

    countMatchingNumbers = (purchaseLotto, winningNumber) => {
        console.log(purchaseLotto);
        console.log(winningNumber);
        return purchaseLotto.filter(number => winningNumber.includes(number)).length;
    }


}

export default Lottos