import {InputView} from "../view/InputView.js";
import {LottoSeller} from "../domain/LottoSeller.js";
import {Lottos} from "../domain/Lottos.js";

export class LottoController {
  /**
   * @type {InputView}
   */
  #inputView;
  /**
   * @type {OutputView}
   */
  #outputView;

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
    this.#inputView = inputView;
    this.#outputView = outputView;
    this.#lottoSeller = lottoSeller;
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
    // 1. 로또 구매 : 한개의 로또가 일급 컬렉션으로 온다
    const boughtLottos = await this.#buyLotto();
    // 1-3. [출력]  출력할 때는 항상 DTO로 변환해서 출력
    const lottosDto = boughtLottos.makeLottosDto();
    this.#outputView.printLottosDto(lottosDto);

    // 2. 로또 추첨
    await this.#drawLotto(boughtLottos);
  }

  /**
   *
   * @returns {Promise<Lottos>}
   * @description 1. 로또 구매하는 과정
   *
   * const lottos = Lottos {lotto: [Lotto, Lotto, ...]}의 구조
   */
  async #buyLotto() {
    // 1-1. [입력] 구입 금액 입력받고 잔액을 받아옴
    const money = await this.#inputView.inputMoney();
    // 1-2. [실행] 로또 구매해서 Lottos 가져오기
    return this.#lottoSeller.buyMany(money);
  }

  /**
   * @param{Lottos} boughtLottos
   * @returns {Promise<void>}
   * @description 2. 로또 추첨하는 과정
   */
  async #drawLotto(boughtLottos) {
    // 2-1. [입력] 인풋에서 만든 로또 머신 작동시키기
    // 당첨 번호, 보너스 번호를 입력 받아서 그것을 토대로 로또머신 새로 만들기 (실제와 다르게 사용자가 만드는 게임이라!)
    const lottoMachine = await this.#inputView.inputLottoMachine();
    // 2-2. [실행] 구매한 로또들을 로또머신에 넣어서 추첨
    const drawResultDto = lottoMachine.drawAll(boughtLottos);
    // 2-3. [출력] 당첨 통계의 최종결과 출력
    this.#outputView.printDrawResult(drawResultDto);
  }
}
