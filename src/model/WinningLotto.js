import Lotto from "./Lotto.js";
import { isMadeWithUniqueNumber } from "../validator/lottoValidate.js";

class WinningLotto {
    #winningNumbers;

    #bonusNumber;

    constructor(winningNumbers, bonusNumber){
        this.#winningNumbers = new Lotto(winningNumbers);
        this.#validate(winningNumbers, bonusNumber);
        this.#bonusNumber = bonusNumber;
    }

    #validate(winningNumbers, bonusNumber){
        isMadeWithUniqueNumber(winningNumbers, bonusNumber);
    }
}

export default WinningLotto;