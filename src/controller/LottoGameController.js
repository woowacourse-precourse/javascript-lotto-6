import LottoGame from '../domain/LottoGame.js'
import LottoGameView from '../view/LottoGameView.js'
import LottoGameValidator from '../validation/LottoGameValidator.js'
import { MESSAGES as MSG } from '../constant/Messages.js';
import { LOTTO_GAME_OPTIONS as OPT } from '../constant/Options.js';
import { Console } from '@woowacourse/mission-utils';

const Validator = LottoGameValidator;

class LottoGameController {

	/** @type {LottoGame} : 로또게임 Domain */
	#lottoGame = null;

	/** @type {LottoGameView} : 입출력 View */
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
		while (true) {
			try {
				const purchaseAmount = await this.#view.inputPurchaseAmount();
				Validator.validatePurchaseAmount(purchaseAmount);
				this.#lottoGame.setPurchaseAmount(purchaseAmount);
				break;
			} catch ({ message }) {
				this.#view.print(message);
			}
		}
	}

	/** 티켓의 발행 로직을 담당한다. */
	#handlePublishTickets() {
		this.#lottoGame.calculatePurchaseQuantity();
		this.#lottoGame.generateTickets();
		this.#view.breakLine();
		this.#view.displayPurchaseQuantity(this.#lottoGame.getPurchaseQuantity());
		this.#view.displayTickets(this.#lottoGame.getTickets());
	}

	/** 당첨/보너스 번호의 입력 로직을 담당한다. */
	async handleSetWinningNumbers() {
		await this.#handleInputWinningNumbers();
		await this.#handleInputBonusNumber();
	}

	/** 당첨 번호의 입력 로직을 담당한다. */
	async#handleInputWinningNumbers() {
		while (true) {
			try {
				this.#view.breakLine();
				let winningNumbers = await this.#view.inputWinningNumbers();
				winningNumbers = this.#preprocessWinningNumbers(winningNumbers);
				this.#lottoGame.setWinningNumbers(winningNumbers);
				break;
			} catch ({ message }) {
				this.#view.print(message);
			}
		}
	}

	/**
	 * 당첨 번호(사용자 입력)에 대하여 전처리 및 유효성검사를 수행한다.
	 * @param {string} winningNumbers 쉼표로 구분된 당첨 번호 목록
	 * @returns 전처리, 유효성검사가 완료된 당첨 번호 배열
	 */
	#preprocessWinningNumbers(winningNumbers) {
		let newWinningNumbers = winningNumbers
			.split(OPT.number_input_seperator)
			.map(item => item.trim())
			.filter(item => item !== MSG.null);
		Validator.validateWinningNumbers(newWinningNumbers);
		return newWinningNumbers.map(item => Number(item));
	}

	/** 보너스 번호의 입력 로직을 담당한다. */
	async #handleInputBonusNumber() {
		while (true) {
			try {
				this.#view.breakLine();
				let bonusNumber = await this.#view.inputBonusNumber();
				bonusNumber = this.#preprocessBonusNumber(bonusNumber);
				this.#lottoGame.setBonusNumber(bonusNumber);
				break;
			} catch ({ message }) {
				this.#view.print(message);
			}
		}
	}

	/**
	 * 보너스 번호(사용자 입력)에 대하여 전처리 및 유효성검사를 수행한다.
	 * @param {string} bonusNumber 보너스 번호
	 * @returns 전처리, 유효성검사가 완료된 보너스 번호
	 */
	#preprocessBonusNumber(bonusNumber) {
		let newBonusNumber = bonusNumber.trim();
		const winningNumbers = this.#lottoGame.getWinningNumbers();
		Validator.validateBonusNumber(newBonusNumber, winningNumbers);
		return parseInt(newBonusNumber);
	}

	/**  */
	handleGameResult() {
		this.#handleAnalyzeResult();
		this.#handleDisplayResult();
	}

	/** 게임 결과 분석 로직을 담당한다. */
	#handleAnalyzeResult() {
		this.#lottoGame.evaluateTickets();
		this.#lottoGame.calculateTotalPrizeAmount();
		this.#lottoGame.calculateEarningsRate();
	}

	/** 게임 결과 출력 로직을 담당한다. */
	#handleDisplayResult() {
		this.#view.displayPrizeStats(
			this.#lottoGame.getPrizeStats(),
			this.#lottoGame.getEarningsRate()
		)
	}
}

export default LottoGameController;
