import { Console } from "@woowacourse/mission-utils";

class User {
	#money;
	#lottos;
	constructor(money) {
		this.validateInputMoney(money);
		this.#money = money;
		this.#lottos = [];
	}
	validateInputMoney(money) {}
}

export default User;
