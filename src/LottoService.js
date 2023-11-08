import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoService {
    constructor() {
        this.numbers = []
        this.bonusNumber = null;
        this.db = []
        this.prize = {
            6: 2000000000,
            "b": 300000000,
            5: 1500000,
            4: 50000,
            3: 5000
        }
    }

    buyLotto(money) {
        const amount = Math.floor(money / 1000);
        Console.print(`${amount}개를 구매했습니다.`);
        for(let i=0;i<amount;i++){
            const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
            const lotto = new Lotto(randomNumber);
            this.db.push(lotto);
            Console.print(lotto.toString());
        }
    }

    setNumber(numbers) {
        this.numbers = numbers;
    }

    setBonusNumber(bonusNumber) {
        this.bonusNumber = bonusNumber;
    }
}

export default LottoService