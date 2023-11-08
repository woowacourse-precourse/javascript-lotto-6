import { Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';
import Result from './Result';
import View from './View';
import { validateMoney, validateBonus, validateArr } from './Validator';
import { DIVIDER, REQUEST, RESPONSE, STATISTICS } from './constants';

class App {
	async play() {
		Console.print(REQUEST.MONEY);
		const moneyInput = await Console.readLineAsync(REQUEST.MONEY);
		const money = validateMoney(moneyInput);
		Console.print(`${money}`);

		const amount = Lotto.getLottosAmount(money);
		Console.print(RESPONSE.AMOUNT_IS(amount));
		const map = Lotto.createRandomArrayMap(amount);

		Console.print(REQUEST.NUMBERS);
		const numbersInput = await Console.readLineAsync(REQUEST.NUMBERS);
		const numbers = numbersInput.split(DIVIDER).map((num) => +num);

		// Lotto.validateArr(numbers);
		const lotto = new Lotto(numbers);
		Console.print(lotto.getNumbers());

		Console.print(REQUEST.BONUS);
		const bonusInput = await Console.readLineAsync(REQUEST.BONUS);
		const bonus = validateBonus(bonusInput);
		Console.print(bonus);

		const result = new Result(bonus, map, numbers);

		const resultArr = result.getResultArr();

		const bonusAmount = result.getBonusAmount();

		const profitsRate = result.getProfitsRate(money, resultArr);

		Console.print(STATISTICS.RESULT_IS);
		Console.print(STATISTICS.THREE_SAME(resultArr[0]));
		Console.print(STATISTICS.FOUR_SAME(resultArr[1]));
		Console.print(STATISTICS.FIVE_SAME(resultArr[2]));
		Console.print(STATISTICS.BONUS(bonusAmount));
		Console.print(STATISTICS.SIX_SAME(resultArr[3]));
		Console.print(RESPONSE.PROFITS_RATE_IS(profitsRate));
	}
}

export default App;
