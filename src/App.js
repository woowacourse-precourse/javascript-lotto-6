import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto';

class App {
	static async inputMoney() {
		const money = await this.getValidMoney();
		Console.print('');
		return money;
	}

	static async getValidMoney() {
		Console.print('구입금액을 입력해 주세요.');
		const money = +(await Console.readLineAsync(''));

		if (money % 1000) {
			Console.print('[ERROR] 구입금액은 1000 단위로 나누어 떨어져야 합니다.');
			return this.getValidMoney();
		}
		if (Number.isNaN(money) || money < 0 || !Number.isInteger(money)) {
			Console.print('[ERROR] 구입금액은 자연수여야 합니다.');
			return this.getValidMoney();
		}
		return money;
	}

	static issueLottery(money = 0) {
		const ea = +(money / 1000);
		Console.print(`${ea}개를 구매했습니다.`);
		const userNumbers = Array(ea)
			.fill()
			.map(() => Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
		userNumbers.forEach((e) => Console.print(`[${e.join(', ')}]`));
		Console.print('');
		return userNumbers;
	}

	static async inputWinningNumbers() {
		const lotto = await this.getValidWinningNumbers();
		Console.print('');
		return lotto;
	}

	static async getValidWinningNumbers() {
		Console.print('당첨 번호를 입력해주세요.');
		const input = await Console.readLineAsync('');
		const numbers = input.split(',').map(Number);
		const lotto = new Lotto(numbers);
		return lotto;
	}

	// async play() {}
}

export default App;
