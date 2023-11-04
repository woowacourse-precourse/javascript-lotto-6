import {LottoGenerator} from "./LottoGenerator.js";
import {Lotto} from "./Lotto.js";
import {Lottos} from "./Lottos.js";

export class LottoSeller {
    /**
     * @type {LottoGenerator}
     */
    #lottoGenerator
    /**
     * @type {number}
     */
    #lottoAmount

    /**
     *
     * @param {LottoGenerator} lottoGenerator
     *
     */
    constructor(lottoGenerator) {
        this.#lottoGenerator = lottoGenerator;
        this.#validateLottoGenerator(lottoGenerator)
        this.buyManyLottos(this.#lottoAmount)
    }

    /**
     *
     * @param {LottoGenerator} lottoGenerator
     * @description
     * 인자 검증: LottoSeller()인자에 lottoGenrator에 제대로 들어갔는가
     *
     * LottoSeller를 생성할 때 인자를 빼먹거나 이상한 타입을 넣으면 제대로 실행되지 않음
     * 자꾸 인자를 빼먹는 실수를 해서 검증을 넣었다!!
     *
     * 주의 ) 검증할 때   `if (!lottoGenerator instanceof LottoGenerator)`로 쓰면
     *         `!lottoGenerator`먼저 연상된다.
     *         그것이 false로 반환되어 `false instanceof LottoGenerator`가 된다
     */
    #validateLottoGenerator(lottoGenerator) {

        if (!(lottoGenerator instanceof LottoGenerator)) {
            throw new Error('LottoSeller의 생성자에 반드시 LottoGenerator를 전달해야한다.')
        }
    }

    /**
     * @return {Lottos[]}
     * @description 전달받은 lottoAmount 수만큼 로또 구매
     *
     * lottos로 갈 것이다
     */
    buyMany() {
        const amount = (money / 1000);
        for (let i = 0; i < amount; i++) {
            // Lottos안에 로또를 하나씩 넣어준다???
            new Lottos(this.buyLotto())
        }
        return Lottos
    }

    /**
     *
     * @return {Lotto}
     * @description 로또 1장 구매
     */
    buy() {
        return new Lotto(this.#lottoGenerator.generate())
    }

}

/**
 * 자바스크립트에서 함수에 인자를 전달하지 않으면 undefined를 전달하는 것과 같다
 * const lottoSeller = new LottoSeller()
 * const lottoSeller = new LottoSeller(undefined)
 *
 * 따라서 위 두 코드는 같음
 */

/**
 * 인자를 받아야하는데 넣지 않으면 undefined가 전달되고
 * 그러면 프로퍼티가 undefined로 초기화되면서 다음 객체가 된다
 * {
 *     [Symbol(#lottoGenerator)]: undefined
 * }
 */