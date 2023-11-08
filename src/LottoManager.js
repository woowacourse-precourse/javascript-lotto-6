import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class LottoManager {
    #amount;
    #purchaseLottos;
    #winLotto;
    #bonusNumber;

    constructor(amount) {
        this.#amount = amount;
        this.#purchaseLottos = this.#generatePurchaseLottos();
        this.#winLotto;
        this.#bonusNumber;
        this.winCount = [0, 0, 0, 0, 0];
    }

    #generatePurchaseLottos() {
        const lottos = Array.from({ length: this.#amount }, () => {
            const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            numbers.sort((a, b) => a - b);
            return new Lotto(numbers);
        });
        return lottos;
    }

    generateWinLotto(winNumbers) {
        this.#winLotto = new Lotto(winNumbers);
    }

    setBonusNumber(bonusNumber) {
        this.#bonusNumber = bonusNumber;
    }

    getLottos() {
        return this.#purchaseLottos;
    }

    setWinCount(player) {
        const winMatch = Lotto.getMatchCount(this.#winLotto, player);
        let bonusMatch = false;

        if (winMatch === 5 || player.getNumbers().includes(this.#bonusNumber)) {
            bonusMatch = true;
        }

        if (winMatch === 6 || bonusMatch === true) {
            this.winCount[winMatch - 2]++;
        } else if (winMatch >= 3) {
            this.winCount[winMatch - 3]++;
        }
    }

    setAllwinCount() {
        this.#purchaseLottos.forEach((player) => this.setWinCount(player));
    }

    getWinCount() {
        this.setAllwinCount()
        return this.winCount;
    }
}

export default LottoManager;