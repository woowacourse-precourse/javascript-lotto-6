export class LottoController {


    //
    constructor() {
    }

    /**
     *
     * @returns {Promise<void>}
     * @description 입력받는 모든 함수가 async이기 때문에 여기도 async를 넣어줘야함!
     */
    async start() {
        // 1. 입력
        const boughtLottos = await this.#buyLottos();
        const lottoMachine = await this.#createLottoMachine();

        // 2. 실행

        // 3. 출력 - 당첨 통계 출력

    }

    /**
     *
     * @returns {Promise<Lottos>}
     * @description - 로또 구매
     * const lottos = Lottos {lotto: [Lotto, Lotto, ...]}의 구조
     */
    async #buyLottos() {

    }

    /**
     *
     * @returns {Promise<LottoMachine>}
     * @description - 당첨번호, 보너스 번호를 압력받아서 구매한 로또를 추첨할 머신 생성
     */
    async #createLottoMachine() {
        //복잡한 입력을 여기로 빼줌

    }
}