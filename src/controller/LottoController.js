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
     * {LottoMachine}
     */
    #lottoMachine

    /**
     * @param {InputView} inputView
     * @param {OutputView} outputView
     * @param {LottoSeller} lottoSeller
     * @param {LottoMachine} lottoMachine
     */
    constructor(inputView, outputView, lottoSeller, lottoMachine) {
        this.#inputView = inputView
        this.#outputView = outputView
        this.#lottoSeller = lottoSeller
        this.#lottoMachine = lottoMachine
    }

    /**
     *
     * @returns {Promise<void>}
     * @description 로또 구매 -> 로또 출력이라는 2회의 입출력 시스템을 2개의 메서드로 분리
     *
     * [주의] 입력받는 모든 함수가 async이기 때문에 여기도 async를 넣어줘야함!
     */
    async start() {
        //
        // 1. 로또 구매 + 출력 : 한개의 로또가 일급 컬렉션으로 온다
        const boughtLottos = await this.#buyLotto(); // [ [1,2,...],[4,5,...]...]
        // 출력할 때는 항상 DTO로 변환!
        const lottosDto = boughtLottos.makeLottosDto()
        this.#outputView.printLottosDto(lottosDto)

        // 2. 로또 추첨
        // const lottoResult = await this.#drawLotto(boughtLottos);
        await this.#drawLotto(boughtLottos);
        // 최종 결과출력 (당첨 통계)
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
     * @returns {Promise<*>}
     * @description - 로또 추첨하는 과정
     */
    async #drawLotto(boughtLottos) {
        // 2-1. 당첨 번호 입력 받기
        const winningNumbers = await this.#inputView.inputWinningNumbers();
        // console.log('winningNumbers 는!!!!!!!', winningNumbers) // [ 1, 2, 33, 4, 5, 6 ]
        // 2-2. 보너스 번호 입력 받기
        const bonusNumber = await this.#inputView.inputBonusNumber();
        // 2-3. 추첨 돌리기
        const resultArray = this.#lottoMachine.drawing(winningNumbers, bonusNumber, boughtLottos)
        this.#outputView.printResult(resultArray)

    }
}