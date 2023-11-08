import { Console, Random } from "@woowacourse/mission-utils";
import { inputMoney } from "../view/input.js";
import User from "../model/User.js";
import { printError } from "./../view/output.js";
class LottoController {
	#user;

	async run() {
		await this.getUserMoney();
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
