import { MissionUtils } from "@woowacourse/mission-utils";
import { PRIZE_TEXT_BY_MATCH_COUNT } from './constants/index.js';
import Lotto from './Lotto.js';

class LottoManager {
    #amount;
    #purchaseLottos;
    #winLotto;
    #bonusNumber;
    #prizeCount;

    constructor(amount) {
        this.#amount = amount;
        this.#purchaseLottos = this.#generatePurchaseLottos();
        this.#winLotto;
        this.#bonusNumber;
        this.#prizeCount = this.#initializePrizeCount();
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

    #initializePrizeCount() {
        const prizeCount = {
            first: 0,
            second: 0,
            third: 0,
            fourth: 0,
            fifth: 0
        };

        return prizeCount;
    }

    getLottos() {
        return this.#purchaseLottos;
    }

    setBonusNumber(bonusNumber) {
        this.#bonusNumber = bonusNumber;
    }

    #setPrizeCount(purchaseLotto) {
        const matchCount = Lotto.getMatchCount(this.#winLotto, purchaseLotto);
        const matchBonus = matchCount === 5 && purchaseLotto.isIncludeBonus(this.#bonusNumber);
        if (matchBonus) {
            this.#prizeCount['second'] += 1;
        } else if (matchCount in PRIZE_TEXT_BY_MATCH_COUNT) {
            this.#prizeCount[PRIZE_TEXT_BY_MATCH_COUNT[matchCount]] += 1;
        }
    }

    #setAllPrizeCount() {
        this.#purchaseLottos.forEach((lotto) => this.#setPrizeCount(lotto));
    }

    getPrizeCount() {
        this.#setAllPrizeCount()
        return this.#prizeCount;
    }
}

export default LottoManager;