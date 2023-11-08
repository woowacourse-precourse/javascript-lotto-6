import { Console, Random } from "@woowacourse/mission-utils";
import {
	inputBonusNumber,
	inputMoney,
	inputWinningNumber,
} from "../view/input.js";
import User from "../model/User.js";
import { printError, printLottoCount, printLotto } from "./../view/output.js";
import Lotto from "../model/Lotto.js";
import WinningLotto from "../model/WinningLotto.js";
class LottoController {
	#user;
	#winningLotto;
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

		await this.getBonusNumber();
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
				this.#winningLotto.setBonusNumber(userInput);
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
}
export default LottoController;
