import { LOTTO_CONSTANTS } from './Constants/LottoContstants.js';
import InputOutputManager from './View/InoputOutputManager.js';
import VarirficationManager from './Models/VarificationManager.js';
import Computer from './Models/Computer.js';
import { Console } from '@woowacourse/mission-utils';
import VarificationManager from './Models/VarificationManager.js';
import LottoCycle from './Models/LottoCycle.js';
import Lotto from './Lotto.js';
import LottoBonus from './Models/LottoBouns.js';
import StringUtil from './Utils/StringUti.js';
import { SYSTEM_MESSAGE } from './Constants/MessageConstants.js';

class App {
	userLottoSheet;
	lottoCycle;

	constructor() {
		this.userLottoSheet = [];
	}

	generateUserLottos(purchaseCost) {
		const userLottoCount = Number(purchaseCost) / LOTTO_CONSTANTS.standartLottoCost;

		for (let count = 0; count < userLottoCount; count += 1) {
			const lottoNumber = Computer.getRandomNumbers(LOTTO_CONSTANTS.lottoNumberCount);
			this.userLottoSheet.push(lottoNumber);
		}
	}

	showUserLottoInfo() {
		Console.print(SYSTEM_MESSAGE.numberOfTicket(this.userLottoSheet.length));

		this.userLottoSheet.forEach((lottoNumber) => {
			const lottoText = `[${lottoNumber.join(', ')}]`;
			Console.print(lottoText);
		});
	}

	initialUserLotto(purchaseCost) {
		this.generateUserLottos(purchaseCost);
		this.showUserLottoInfo();
	}

	async getUserLottoValues() {
		const purchaseCost = await InputOutputManager.getUserInput(
			SYSTEM_MESSAGE.askPurchaseCost,
			VarirficationManager.checkPurchaseCost,
		);

		let lottoWinningNumber = await InputOutputManager.getUserInput(
			SYSTEM_MESSAGE.askWinnerLottoNumber,
			VarificationManager.checkLottoNumber,
		);
		lottoWinningNumber = StringUtil.stringToNumberArray(lottoWinningNumber);

		const lottoBonusNumber = await InputOutputManager.getUserInput(
			SYSTEM_MESSAGE.askBonusLottoNumber,
			(value) => VarificationManager.checkBonusLottoNumber(value, lottoWinningNumber),
		);

		return { purchaseCost, lottoWinningNumber, lottoBonusNumber };
	}

	async initialLottoCycle() {
		const { purchaseCost, lottoWinningNumber, lottoBonusNumber } = await this.getUserLottoValues();

		this.initialUserLotto(purchaseCost);

		const lotto = new Lotto(lottoWinningNumber);
		const bonusLotto = new LottoBonus(Number(lottoBonusNumber), lottoWinningNumber);

		this.lottoCycle = new LottoCycle({
			purchaseCost: purchaseCost,
			userLottos: this.userLottoSheet,
			winnerLotto: lotto,
			bonusLotto: bonusLotto,
		});
	}

	async play() {
		await this.initialLottoCycle();

		this.lottoCycle.checkLottosRank();

		this.lottoCycle.printLottoResult();
	}
}

export default App;
