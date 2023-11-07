import LottoCompany from './LottoCompany.js';

class App {
	async play() {
		const lottoCompany = new LottoCompany();
		await lottoCompany.operate();
	}
}

export default App;