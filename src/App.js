import LOTTO_CONSTANTS from './Constants/LottoContstants.js';
import InputOutputManager from './Models/InoputOutputManager.js';
import VarirficationManager from './Models/VarificationManager.js';
import Computer from './Models/Computer.js';
import { Console } from '@woowacourse/mission-utils';

class App {
	userLottoSheet;

	constructor() {
		this.userLottoSheet = [];
	}

	generateLottoNumber() {
		const lottoNumbers = [];
		for (let count = 0; count < LOTTO_CONSTANTS.lottoNumberCount; count += 1) {
			const randomNumber = Computer.getRandomNumber();
			lottoNumbers.push(randomNumber);
		}

		return lottoNumbers;
	}

	showUserLottoInfo() {
		Console.print(`\n${this.userLottoSheet.length}개를 구매했습니다.`);
		this.userLottoSheet.forEach((lottoNumber) => {
			Console.print(lottoNumber);
		});
	}

	initialUserLotto(purchasePrice) {
		const userLottoCount = Number(purchasePrice) / LOTTO_CONSTANTS.standartLottoCost;

		for (let count = 0; count < userLottoCount; count += 1) {
			const lottoNumber = this.generateLottoNumber();
			this.userLottoSheet.push(lottoNumber);
		}

		this.showUserLottoInfo();
	}

	async initialService() {
		const purchasePrice = await InputOutputManager.getUserInput(
			'구입 금액을 입력해주세요.\n',
			VarirficationManager.checkPurchasePrice,
		);

		this.initialUserLotto(purchasePrice);
	}

	async play() {
		await this.initialService();
	}
}

export default App;
