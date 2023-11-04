import {InputView} from "../view/InputView.js";
import {LottoSeller} from "../domain/LottoSeller.js";
import {Lottos} from "../domain/Lottos.js";

export class LottoController {

    /**
     * @type {InputView}
     */
    #inputView
    /**
     * @type {OutputView}
     */
    #outputView

    /**
     * @type {LottoSeller}
     */
    #lottoSeller;

    /**
     * @param {InputView} inputView
     * @param {OutputView} outputView
     * @param {LottoSeller} lottoSeller
     */
    constructor(inputView, outputView, lottoSeller) {
        this.#inputView = inputView
        this.#outputView = outputView
        this.#lottoSeller = lottoSeller
    }

    /**
     *
     * @returns {Promise<void>}
     * @description 입력받는 모든 함수가 async이기 때문에 여기도 async를 넣어줘야함!
     */
    async start() {
        // 1. 로또 구매 + 출력 : 한개의 로또가 일급 컬렉션으로 온다
        const boughtLottos = await this.#buyLotto();
        // 출력할 때는 항상 DTO로 변환!
        const lottosDto = boughtLottos.makeLottosDto()
        this.#outputView.printLottosDto(lottosDto)

        // 2. 로또 추첨
        // const lottoResult = await this.#drawingLotto(boughtLottos);
        // 3. 최종 결과출력 (당첨 통계)
        // const resultDto = this.#Result.makeResultDto()
        // this.#outputView.printFinalResult(resultDto)
    }

    /**
     *
     * @returns {Promise<Lottos>}
     * @description - 로또 구매하는 과정
     *
     * const lottos = Lottos {lotto: [Lotto, Lotto, ...]}의 구조
     */
    async #buyLotto() {
        // 1-1. [입력] 구입 금액 입력받고 잔액을 받아옴 ✅
        const money = await this.#inputView.inputMoney()
        // 1-2. [실행] 로또 구매해서 Lottos 가져오기 ✅
        return this.#lottoSeller.buyMany(money)

    }

    /**
     *
     * @returns {Promise<LottoResults[]>}
     * @description - 로또 추첨하는 과정
     */
    // async #drawingLotto(boughtLotto) {
    //     // 2-1. 당첨 번호 입력 받기
    //     const winningNumbers = await this.#inputView.inputWinningNumbers();
    //     // 2-2. 보너스 번호 입력 받기
    //     const bonusNumber = await this.#inputView.inputBonusNumber();
    //
    //     // 2-3. 추첨 돌려서 LottosResults[] 가져오기
    //     //      구매한 로또들인 boughtLottos(Lottos[])도 필요
    //     return this.#lottoMachine(winningNumbers, bonusNumber, boughtLotto);
    // }
}