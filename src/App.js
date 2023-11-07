class App {
	async play() {
		const PURCHASE_AMOUNT =
			await Console.readLineAsync('구입금액을 입력해 주세요.');

		const WINNING_NUMBERS =
			await Console.readLineAsync('당첨 번호를 입력해 주세요.');

		const WINNING_NUMBERS_List = WINNING_NUMBERS.split(',').map((str) =>
			Number(str.trim()),
		);
	}
}

export default App;
