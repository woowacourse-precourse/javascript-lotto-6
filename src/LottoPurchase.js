import Lotto from "./Lotto.js";
import { Random } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";
class LottoPurchase {
    LOTTO_NUMBER;
    GENERATED_LOTTOS = [];
    LOTTO_NUMBER_OUTPUT_MESSEGE="개를 구매했습니다.";

    constructor(LOTTO_NUMBER) {
        this.LOTTO_NUMBER = LOTTO_NUMBER;
    }
    
    #generateRandomNumbers() {
        const NUMBERS = Random.pickUniqueNumbersInRange(1,45,6);
        return NUMBERS;
    }

    #generateLottos(number){
        for(let i = 0 ; i < number ; i += 1) {
            const NUMBERS = this.#generateRandomNumbers();
            const LOTTO = new Lotto(NUMBERS);
            this.GENERATED_LOTTOS.push(LOTTO);
        }
    }

    #printLottoNumber(number){
        const numberCopy = `${number}`;
        Console.print([numberCopy,this.LOTTO_NUMBER_OUTPUT_MESSEGE].join(''));
    }

    #printLottos(Lottos){
        Lottos.forEach(Lotto => 
            {   const numbers = Lotto.getNumbers();
                const MESSAGE = `[${numbers.join(', ')}]`;
                Console.print(MESSAGE);
            })
    }

    async showPurchaseResult(){
        this.#printLottoNumber(this.LOTTO_NUMBER);
        this.#generateLottos(this.LOTTO_NUMBER);
        this.#printLottos(this.GENERATED_LOTTOS);
    }
}

export default LottoPurchase;