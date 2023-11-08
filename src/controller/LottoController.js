import { Console, Random } from "@woowacourse/mission-utils";
import { inputMoney } from "../view/input.js";
import User from "../model/User.js";
import { printError, printLottoCount } from "./../view/output.js";
class LottoController {
	#user;

	async run() {
		await this.getUserMoney();

		//입력한 금액에 따라 로또 개수 출력
		printLottoCount(this.#user.getMoney() / 1000);
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
}
export default LottoController;
