import { Random } from "@woowacourse/mission-utils";
import {
	inputBonusNumber,
	inputMoney,
	inputWinningNumber,
} from "../view/input.js";
import User from "../model/User.js";
import {
	printError,
	printLottoCount,
	printLotto,
	printResultIntro,
	printRanking,
	printIncomeRate,
} from "./../view/output.js";
import Lotto from "../Lotto.js";
import WinningLotto from "../model/WinningLotto.js";
class LottoController {
	#user;
	#winningLotto;
	#rankCount = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};
	async run() {
		await this.getUserMoney();

		//입력한 금액에 따라 로또 개수 출력
		const userLottoAmount = this.#user.getMoney() / 1000;
		printLottoCount(userLottoAmount);

		//개수에 따라 유저 로또 세팅
		this.setUserLottos(userLottoAmount);

		//세팅 된 유저의 로또 출력
		this.printUserLottos(this.#user.getLottos());

		//유저로부터 당첨 번호 입력받음
		await this.getWinningNumbers();

		//유저로부터 보너스 번호 입력받음
		await this.getBonusNumber();

		//결과 출력
		printResultIntro();
		this.printResult();
	}
	async getUserMoney() {
		while (true) {
			try {
				const userInput = await inputMoney();
				this.#user = new User(userInput);
				break;
			} catch (error) {
				printError(error);
			}
		}
	}
	async getWinningNumbers() {
		while (true) {
			try {
				const userInput = await inputWinningNumber();
				const userInputNumbers = userInput.split(",");
				this.#winningLotto = new WinningLotto(userInputNumbers);
				break;
			} catch (error) {
				printError(error);
			}
		}
	}
	async getBonusNumber() {
		while (true) {
			try {
				const userInput = await inputBonusNumber();
				this.#winningLotto.setBonusNumber(parseInt(userInput));
				break;
			} catch (error) {
				printError(error);
			}
		}
	}
	setUserLottos(lottoAmount) {
		for (let i = 0; i < lottoAmount; i++) {
			const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
			this.#user.addLotto(new Lotto(numbers));
		}
	}
	printUserLottos(userLotto) {
		userLotto.forEach((lotto) => {
			printLotto(lotto.getNumber());
		});
	}
	printResult() {
		const userLottos = this.#user.getLottos();
		const winningLottoNumber = this.#winningLotto.getWinningNumbers();
		const bonusNumber = this.#winningLotto.getBonusNumber();

		userLottos.forEach((lotto) => {
			const lottoRank = this.getLottoRanking(
				lotto.getNumber(),
				winningLottoNumber,
				bonusNumber
			);
			this.#rankCount[lottoRank]++;
		});
		this.printResultStatus(this.#rankCount);
		this.printReturnRate();
	}
	printResultStatus(rankCount) {
		Object.keys(rankCount).forEach((rank) => {
			if (!isNaN(rank)) printRanking(rank, rankCount[rank]);
		});
	}
	printReturnRate() {
		const totalIncome = this.getTotalIncome();
		const spendMoney = this.#user.getMoney();
		const totalIncomeRate = (totalIncome / spendMoney) * 100;
		printIncomeRate(
			totalIncomeRate.toLocaleString("ko-KR", { minimumFractionDigits: 1 })
		);
	}
	getTotalIncome() {
		return (
			5000 * this.#rankCount[5] +
			50000 * this.#rankCount[4] +
			1500000 * this.#rankCount[3] +
			30000000 * this.#rankCount[2] +
			2000000000 * this.#rankCount[1]
		);
	}
	getLottoRanking(lotto, winnerNumber, bonusNumber) {
		const matchCount = this.getMatchCount(lotto, winnerNumber);
		if (matchCount === 6) {
			return 1;
		} else if (matchCount === 5 && lotto.includes(bonusNumber)) {
			return 2;
		} else if (matchCount === 5) {
			return 3;
		} else if (matchCount === 4) {
			return 4;
		} else if (matchCount === 3) {
			return 5;
		}
	}
	getMatchCount(lotto, winnerNumber) {
		const matchCount = lotto.filter((number) =>
			winnerNumber.includes(number)
		).length;
		return matchCount;
	}
}
export default LottoController;
