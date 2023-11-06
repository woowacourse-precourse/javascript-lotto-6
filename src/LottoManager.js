import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from './Lotto.js';

class LottoManager {
    #amount;
    #lottos;
    #winLotto;
    #bonusNumber;

    constructor(amount) {
        this.#amount = amount;
        this.#lottos = [];
        this.#winLotto;
        this.#bonusNumber;
        this.winCount = [0, 0, 0, 0, 0];
    }

    generateLottos() {
        for (let i = 0; i < this.#amount; i++) {
            const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
            this.#lottos.push(new Lotto(numbers));
        }
    }

    generateWinLotto(winNumbers) {
        this.#winLotto = new Lotto(winNumbers);
    }

    setBonusNumber(bonusNumber) {
        this.#bonusNumber = bonusNumber;
    }

    getLottos() {
        return this.#lottos;
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
        this.#lottos.forEach((player) => this.setWinCount(player));
    }

    getWinCount() {
        this.setAllwinCount()
        console.log(this.winCount);
    }
}

export default LottoManager;