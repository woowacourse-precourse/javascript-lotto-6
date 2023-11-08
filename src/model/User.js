import { validateNumber, validateUnit } from "../utils/validation.js";

class User {
	#money;
	#lottos;
	constructor(money) {
		this.#validateInputMoney(money);
		this.#money = money;
		this.#lottos = [];
	}
	#validateInputMoney(money) {
		validateNumber(money);
		validateUnit(money);
	}
	getMoney() {
		return this.#money;
	}
	getLottos() {
		return this.#lottos;
	}
	addLotto(lotto) {
		this.#lottos.push(lotto);
	}
}

export default User;
