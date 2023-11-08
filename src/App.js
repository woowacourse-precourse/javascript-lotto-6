import { LottoMaker } from './LottoMaker.js';

class App {
	async play() {
		try {
			const lotto = new LottoMaker();
			await lotto.play();
		} catch (error) {
			throw new Error(error);
		}
	}
}

export default App;
