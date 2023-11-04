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
	PROFITS_RATE_IS,
} from './constants';

class App {
	async play() {
		const computer = new Computer();
		const lotto = new Lotto();

		const userMoney = await computer.getInput(ASK_MONEY);
		lotto.amount = computer.calculateHowManyLottos(userMoney);

		Console.print(NEW_LINE + lottoAmount + TELL_HOW_MANY_LOTTOS_BOUGHT);
		for (let i = 0; i < lottoAmount; i += 1) {
			const randomArray = computer.getRandomSixNumbers();
			Console.print(randomArray);
			lotto.randomArraySet.add(randomArray);
		}

		const inputLotto = await computer.getInput(NEW_LINE + ASK_LOTTO_NUMBER, TYPE_LOTTO);
		lotto.numbers = Validator.validateNumbers(inputLotto, TYPE_LOTTO);
		const inputBonus = await computer.getInput(NEW_LINE + ASK_BONUS_NUMBER, TYPE_BONUS);
		lotto.bonus = Validator.validateNumbers(inputBonus, TYPE_BONUS)[0];

		Console.print(NEW_LINE + RESULT + NEW_LINE + DIVISION_LINE);
		// 몇 개 일치하는 지 계산
		const profitsRate = computer.calculateProfitsRate//수익률 계산
		computer.printHowManySameNumber(num1, num2); //결과 출력
		Console.print(PROFITS_RATE_IS(profitsRate));//수익률 출력
	}
}

export default App;
