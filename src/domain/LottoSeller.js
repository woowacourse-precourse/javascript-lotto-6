import {LottoGenerator} from "./LottoGenerator.js";
import {Lotto} from "./Lotto.js";
import {Lottos} from "./Lottos.js";

export class LottoSeller {
    /**
     * @type {LottoGenerator}
     */
    #lottoGenerator

    /**
     *
     * @param {LottoGenerator} lottoGenerator
     *
     */
    constructor(lottoGenerator) {
        this.#lottoGenerator = lottoGenerator;
        this.#validateLottoGenerator(lottoGenerator)

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
     * @param {Money} money
     * @return {Lottos}
     * @description
     * 돈 차감하고 로또까지 만들어준다 -> 추상화가 된 것!
     *
     * lottos로 갈 것이다
     */
    buyMany(money) {
        /**
         *
         * @type {Lotto[]}
         */
        const lottos = []
        //돈 떨어질때까지 0원될때까지 구매해서 lottos에 넣음!! 게터는 프로퍼티라서 함수로 호출x
        while (!money.isZero) {
            const lotto = this.#buy(money)
            lottos.push(lotto)
        }
        return new Lottos(lottos)
    }


    /**
     *
     * @param {Money} money
     * @return {Lotto}
     * @description 로또 1장 구매 = money 객체 내부를 쭉 바꿀 수 읶음
     */
    #buy(money) {
        //로또 금액만큼 잔액 차감
        money.subtract(Lotto.PRICE)
        //새로운 로또 발행해서 넘기기!
        return this.#lottoGenerator.generate()
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