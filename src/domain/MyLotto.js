import Lotto from "./Lotto.js";
import lottoNumberGenerator from "../util/lotto-number-generator.js";

class MyLotto {
    #lottos;

    constructor(purchaseAmount) {
        this.#lottos = this.#generate(purchaseAmount);
    }

    #generate(purchaseAmount) {
        let generator = [];
        for (let i = 0; i < purchaseAmount; i++) {
            generator.push(new Lotto(lottoNumberGenerator()));
        }
        return generator;
    }

    getMyLottos() {
        return this.#lottos;
    }

    getLottoSize() {
        return this.#lottos.length;
    }
}

export default MyLotto;