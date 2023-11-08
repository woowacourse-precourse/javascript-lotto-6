import LottoController from './Controller/LottoController.js';

class App {
	#lottoController = new LottoController();

	constructor() {}

	async play() {
		await this.#lottoController.start();
	}
}

export default App;
