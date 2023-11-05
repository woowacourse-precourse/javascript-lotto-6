import LottoController from './Controller/LottoController.js';

class App {
	#lottoController = new LottoController();

	constructor() {}

	play() {
		this.#lottoController.start();
	}
}

export default App;
