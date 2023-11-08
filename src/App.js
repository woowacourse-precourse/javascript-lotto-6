import { LOTTO_CONSTANTS } from './Constants/LottoContstants.js';
import InputOutputManager from './Models/InoputOutputManager.js';
import VarirficationManager from './Models/VarificationManager.js';
import Computer from './Models/Computer.js';
import { Console } from '@woowacourse/mission-utils';
import VarificationManager from './Models/VarificationManager.js';
import LottoCycle from './Models/LottoCycle.js';
import Lotto from './Lotto.js';
import LottoBonus from './Models/LottoBouns.js';
import StringUtil from './Utils/StringUti.js';

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
		Console.print(`${this.userLottoSheet.length}개를 구매했습니다.`);

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
			'구입 금액을 입력해주세요.\n',
			VarirficationManager.checkPurchaseCost,
		);

		let lottoWinningNumber = await InputOutputManager.getUserInput(
			'\n당첨 번호를 입력해 주세요.\n',
			VarificationManager.checkLottoNumber,
		);
		lottoWinningNumber = StringUtil.stringToNumberArray(lottoWinningNumber);

		const lottoBonusNumber = await InputOutputManager.getUserInput(
			'\n보너스 번호를 입력해 주세요.\n',
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
