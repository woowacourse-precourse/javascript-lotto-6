import { Console } from '@woowacourse/mission-utils';

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

	// async play() {}
}

export default App;
