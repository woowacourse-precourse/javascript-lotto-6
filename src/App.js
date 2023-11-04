import { Console } from '@woowacourse/mission-utils';
import Computer from './Computer';
import Validator from './Validator';
import Lotto from './Lotto';
import {
	NEW_LINE,
	ASK_MONEY,
	TELL_HOW_MANY_LOTTOS_BOUGHT,
	ASK_LOTTO_NUMBER,
	TYPE_LOTTO,
	TYPE_BONUS,
	ASK_BONUS_NUMBER,
	RESULT,
	DIVISION_LINE,
	PROFITS_RATE_IS
} from './constants';

class App {
	async play() {
		const computer = new Computer();
		const randomArrayArr = [];

		const userMoney = await computer.getInput(ASK_MONEY);
		const amount = computer.calculateLottosAmount(+userMoney);

		Console.print(`${NEW_LINE}${amount}${TELL_HOW_MANY_LOTTOS_BOUGHT}`);
		for (let i = 0; i < amount; i += 1) {
			const randomArray = await computer.getRandomSixNumbers();
			Console.print(randomArray);
			randomArrayArr.push(randomArray);
		}

		const inputLotto = await computer.getInput(ASK_LOTTO_NUMBER);
		const numbers = Validator.validateNumbers(inputLotto, TYPE_LOTTO);
		const inputBonus = await computer.getInput(ASK_BONUS_NUMBER);
		const bonus = Validator.validateNumbers(inputBonus, TYPE_BONUS)[0];
		const lotto = new Lotto(numbers, randomArrayArr, bonus);

		Console.print(`${RESULT}${NEW_LINE}${DIVISION_LINE}`);
		computer.compareLottoArrays(lotto); // 몇 개 일치하는 지 계산
		const profitsRate = computer.calculateProfitsRate; //수익률 계산
		await computer.printHowManySameNumbers(); //결과 출력
		Console.print(PROFITS_RATE_IS(profitsRate)); //수익률 출력
	}
}

export default App;
