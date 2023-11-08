import Lotto from "./Lotto.js";
import LottoBonusValidator from "../validator/lotto-bonus-validator.js";

class WinningLotto extends Lotto {
    #bonusNumber;

    constructor(winningNumbers, bonusNumber) {
        super(winningNumbers);
        this.#bonusValidate(bonusNumber);
        this.#bonusNumber = bonusNumber;
    }

    #bonusValidate(bonusNumber){
        LottoBonusValidator.bonusLengthValidation(bonusNumber);
        LottoBonusValidator.bonusRangeValidation(bonusNumber);
        LottoBonusValidator.bonusTypeValidation(bonusNumber[0]);
    }

    getBonusNumber() {
        return this.#bonusNumber[0];
    }
}

export default WinningLotto;