import InputPrintout from "./view/InputPrintout.js";
import OutputPrintout from "./view/OutputPrintout.js";

class App {
	async play() {
		const amount = await InputPrintout.inputAmount();
		OutputPrintout.printLottos(amount);

		let a = await InputPrintout.inputLottoNumbers();
		console.log("당첨번호 ", a.getNumbers()); // winningnum

		let b = await InputPrintout.inputBonusNum(a.getNumbers());
		// console.log("보너스", b);

		OutputPrintout.printMathingNumberList(a.getNumbers(), b);
		OutputPrintout.printRate(Number(amount));
	}
}

export default App;
