import Lotto from "./Lotto.js";
import LottoNumber from "./LottoNumber.js";
import DefaultWinningLotto from "./DefaultWinningLotto.js";
class BonusWinningLotto {
    NUMBER;
    DEFAULT_WINNING_LOTTO;
    ERROR_MESSEGE_ALREADY_CHOSEN = '[ERROR] 이미 존재하는 숫자입니다.';
    constructor(defaultWinningLotto,bonusNumber) {
        this.#validate(defaultWinningLotto,bonusNumber);
        this.NUMBER = bonusNumber;
        this.DEFAULT_WINNING_LOTTO = defaultWinningLotto;
    }

    #validate(defaultWinningLotto,bonusNumber) {
        const LOTTO_NUMBER = new LottoNumber(bonusNumber);
        if((defaultWinningLotto.numbers).includes(bonusNumber)){
            throw new Error(this.ERROR_MESSEGE_ALREADY_CHOSEN);
        }
    }
}
export default BonusWinningLotto;