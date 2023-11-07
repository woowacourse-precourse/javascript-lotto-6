class App {
	async play() {
		const PURCHASE_AMOUNT =
			await Console.readLineAsync('구입금액을 입력해 주세요.');

		const WINNING_NUMBERS =
			await Console.readLineAsync('당첨 번호를 입력해 주세요.');

		const WINNING_NUMBERS_List = WINNING_NUMBERS.split(',').map((str) =>
			Number(str.trim()),
		);
		const BONUS_NUMBER_INPUT =
			await Console.readLineAsync('보너스 번호를 입력해 주세요.');

		const BONUS_NUMBER = Number(BONUS_NUMBER_INPUT);
	}
}

export default App;
