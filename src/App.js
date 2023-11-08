import Lottos from "./Lottos.js";
import WinningNumbers from "./WinningNumber.js";
import BonusNumber from "./BonusNumber.js";
import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./libs/constants.js";

class App {
	constructor() {
		this.lottos = null;
		this.winningNumbers = null;
		this.bonusNumber = null;
	}

	async play() {
		await this.requestMoney();
	}

	async requestMoney() {
		const money = await Console.readLineAsync(MESSAGE.REQUEST_MONEY);
		this.lottos = new Lottos(money);

		this.lottos.printCount();
		this.lottos.printList();

		await this.requestWinningNumbers();
	}

	async requestWinningNumbers() {
		const winningNumbers = await Console.readLineAsync(
			MESSAGE.REQUEST_WINNING_NUMBERS
		);
		this.winningNumbers = new WinningNumbers(
			winningNumbers.split(",").map((item) => Number(item))
		);

		await this.requestBonusNumber();
	}

	async requestBonusNumber() {
		const bonusNumber = await Console.readLineAsync(
			MESSAGE.REQUEST_BONUS_NUMBER
		);
		this.bonusNumber = new BonusNumber(
			bonusNumber,
			this.winningNumbers.value
		);

		this.printWinningStats();
	}

	printWinningStats() {
		Console.print(MESSAGE.WINNING_STATS);

		const lottoRanks = this.lottos.getRanks(
			this.winningNumbers.value,
			this.bonusNumber.value
		);

		this.lottos.printWinningDetails(lottoRanks);
		this.lottos.printRate(lottoRanks);
	}
}
const app = new App();
app.play();

export default App;
