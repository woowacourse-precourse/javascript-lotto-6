import { Console } from '@woowacourse/mission-utils';

class PrintConsole {
	showLottoNumbers(numbers) {
		this.print(`${numbers.length}개를 구매했습니다.`);
		numbers.forEach((number) => this.print(number));
	}

	print(message) {
		Console.print(message);
	}
}

export default PrintConsole;
