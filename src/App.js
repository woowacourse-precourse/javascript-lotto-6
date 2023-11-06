import LottoController from './controllers/LottoController.js';

class App {
	#lottoController;

	constructor() {
		this.#lottoController = new LottoController();
	}

	async play() {
		await this.#lottoController.purchasingLottos();
		await this.#lottoController.assignLottoWinningNumber();
	}
}

export default App;
