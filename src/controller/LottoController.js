import { Console, Random } from "@woowacourse/mission-utils";
import { inputMoney } from "../view/input.js";
import User from "../model/User.js";
class LottoController {
	#user;

	async run() {
		await this.getUserMoney();
	}
	async getUserMoney() {
		try {
			const userInput = await inputMoney();
			this.#user = new User(userInput);
		} catch {}
	}
}
export default LottoController;
