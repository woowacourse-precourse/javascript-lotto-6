import { Console } from '@woowacourse/mission-utils';
import { DIVIDER, REQUEST, RESPONSE, STATISTICS } from './constants';
import Validator from './Validator';
import Computer from './Computer';

class App {
	async play() {
		Console.print(REQUEST.MONEY);
		const moneyInput = await Console.readLineAsync(REQUEST.MONEY);
		const money = Validator.validateMoney(moneyInput);
		Console.print(`${money}`);
		const amount = Computer.calculateAmount(money);
		Console.print(RESPONSE.AMOUNT_IS(amount));
		const map = Computer.createRandomArraysMap(amount);
		Console.print(REQUEST.NUMBERS);
		const numbersInput = await Console.readLineAsync(REQUEST.NUMBERS);
		const numbersArr = numbersInput.split(DIVIDER).map((number) => +number);
		const numbers = Validator.validateArr(numbersArr);
		Console.print(numbers);
		Console.print(REQUEST.BONUS);
		const bonusInput = await Console.readLineAsync(REQUEST.BONUS);
		const bonus = Validator.validateBonus(bonusInput);
		Console.print(bonus);
		const [amountArr, bonusAmount] = Computer.getAmountArrayAndBonus(map, numbers, bonus);
		const result = Computer.getResultArr(amountArr);
		Console.print(STATISTICS.RESULT_IS);
		Console.print(STATISTICS.THREE_SAME(result[0]));
		Console.print(STATISTICS.FOUR_SAME(result[1]));
		Console.print(STATISTICS.FIVE_SAME(result[2]));
		Console.print(STATISTICS.BONUS(bonusAmount));
		Console.print(STATISTICS.SIX_SAME(result[3]));
		const profitsRate = Computer.calculateProfitsRate(result, bonusAmount, money);
		Console.print(`총 수익률 ${profitsRate}%입니다`);
		return;
	}
}

export default App;
