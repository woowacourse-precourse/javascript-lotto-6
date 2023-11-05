import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class LottoGame {
    #lottos;
    #purchaseNumber;
    constructor (purchaseAmount) {
        this.#lottos = [];
        this.#purchaseNumber = purchaseAmount/1000;
        this.#issueLotto();
    }

    #validate(purchaseAmount) {
        if (purchaseAmount % 1000 !== 0) {
          throw new Error("[ERROR]");
        }
      }

    #issueLotto() {
        for(let i=0; i<this.#purchaseNumber; i++) {
            const LOTTO = new Lotto(this.generateRandomNumbers());
            this.#lottos.push(LOTTO);
        }
    }
    getLottoNumbers() {
        const LOTTO_NUMBERS = []
        for (let i=0; i<this.#lottos.length; i++){
            LOTTO_NUMBERS.push(this.#lottos[i].getNumbers());
        }
        return LOTTO_NUMBERS;
    }

    generateRandomNumbers() {
        const RANDOM_NUMBERS = [];
        for (let i=0; i<6; i++) {
            RANDOM_NUMBERS.push(MissionUtils.Random.pickNumberInRange(1,45));      
        }
        return RANDOM_NUMBERS;
    }
 
}
export default LottoGame;