import { Console } from '@woowacourse/mission-utils';
import { REQUEST, DIVIDER } from './constants';
import Lotto from './Lotto';
import { validateMoney, validateBonus } from './Validator';
class View {
	constructor() {
		this.money = View.getMoney();
		this.numbers = View.getNumbers();
		this.bonus = View.getBonus();
	}
	static async getMoney() {
		Console.print(REQUEST.MONEY);
		const moneyInput = await Console.readLineAsync(REQUEST.MONEY);
		const money = validateMoney(moneyInput);
		Console.print(`${money}`);
		return (this.money = money);
	}
	static async getNumbers() {
		Console.print(REQUEST.NUMBERS);
		const numbersInput = await Console.readLineAsync(REQUEST.NUMBERS);
		const numbers = numbersInput.split(DIVIDER).map((num) => +num);
		const lotto = new Lotto(numbers);
		Console.print(lotto.getNumbers());
		return (this.numbers = lotto.getNumbers());
	}
	static async getBonus() {
		Console.print(REQUEST.BONUS);
		const bonusInput = await Console.readLineAsync(REQUEST.BONUS);
		const bonus = validateBonus(bonusInput);
		Console.print(bonus);
		return (this.bonus = bonus);
	}
}
export default View;
