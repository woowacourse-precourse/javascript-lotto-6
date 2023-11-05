import LottoController from './controllers/LottoController.js';

class App {
	#lottoController;

	constructor() {
		this.#lottoController = new LottoController();
	}

	async play() {
		this.#lottoController.purchasingLottos();
	}
}

export default App;
