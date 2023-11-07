import LottoGame from '../domain/LottoGame.js'
import LottoGameView from '../view/LottoGameView.js'

class LottoGameController {

	/** @type {LottoGame} : 로또게임 Domain */
	#lottoGame = null;

	/** @type {InputView} : 입출력 View */
	#view = null;

	/** 컨트롤러 생성 시 model, view 객체를 생성한다. */
	constructor() {
		console.log('컨트롤러 생성');
		this.#lottoGame = new LottoGame();
		this.#view = new LottoGameView();
	}

}

export default LottoGameController;
