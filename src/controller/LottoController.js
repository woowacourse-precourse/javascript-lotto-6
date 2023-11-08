import { Console, Random } from "@woowacourse/mission-utils";
import { inputMoney } from "../view/input.js";
import User from "../model/User.js";
import { printError, printLottoCount, printLotto } from "./../view/output.js";
import Lotto from "../model/Lotto.js";
class LottoController {
	#user;

	async run() {
		await this.getUserMoney();

		//입력한 금액에 따라 로또 개수 출력
		const userLottoAmount = this.#user.getMoney() / 1000;
		printLottoCount(userLottoAmount);

		//개수에 따라 유저 로또 세팅
		this.setUserLottos(userLottoAmount);

		//세팅 된 유저의 로또 출력
		this.printUserLottos(this.#user.getLottos());
	}
	async getUserMoney() {
		try {
			const userInput = await inputMoney();
			this.#user = new User(userInput);
		} catch (error) {
			printError(error);
			this.getUserMoney();
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
