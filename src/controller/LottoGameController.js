import LottoGame from '../domain/LottoGame.js'
import LottoGameView from '../view/LottoGameView.js'
import LottoGameValidator from '../validation/LottoGameValidator.js'

const Validator = LottoGameValidator;

class LottoGameController {

	/** @type {LottoGame} : 로또게임 Domain */
	#lottoGame = null;

	/** @type {InputView} : 입출력 View */
	#view = null;

	/** 컨트롤러 생성 시 model, view 객체를 생성한다. */
	constructor() {
		this.#lottoGame = new LottoGame();
		this.#view = new LottoGameView();
	}

	/** 티켓의 구입 로직을 담당한다. */
	async handlePurchaseTickets() {
		await this.#handleInputPurchaseAmount();
		this.#handlePublishTickets();
	}

	/** 구입 금액을 입력 받는 로직을 담당한다. */
	async #handleInputPurchaseAmount() {
		let purchaseAmount = await this.#view.inputPurchaseAmount();
		Validator.validatePurchaseAmount(purchaseAmount);
		// TODO: 도메인에 전달
	}

	/** 티켓의 발행 로직을 담당한다. */
	#handlePublishTickets() {
		// TODO:
	}
}

export default LottoGameController;
