import Lotto from '../Lotto.js';
import User from '../User.js';

export default class LottoController {

    #user
    #lotto
    
    createUser(money) {
        this.#user = new User(money);
    }

    createUserLottoNumbers() {
        this.#user.setLottoNumbers();
    }

    getUserNumberOfPurchases() {
        return this.#user.getNumberOfPurchases();
    }

    getUserLottoNumbers() {
        return this.#user.getLottoNumbers();
    }

    createLotto(winningNumbers) {
        this.#lotto = new Lotto(winningNumbers);
    }

    validateBonusNumber(bonusNumber) {
        this.#lotto.validateBonusNumber(bonusNumber);
    }

    getLottoWinningResult(bonusNumber) {
        return this.#getCalculateLottoResult(bonusNumber);
    }

    getEarningsRate(bonusNumber) {
        const results = this.#getCalculateLottoResult(bonusNumber);
        return this.#lotto.calculateEarningsRate(results);
    }

    #getCalculateLottoResult(bonusNumber) {
        return this.#lotto.calculateLottoResult(
            this.#user.getLottoNumbers(), 
            bonusNumber
        );
    }

    getUserPerchaseAmount() {
        return this.#user.getPurchaseAmount();
    }
}