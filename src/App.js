import InputPrintout from "./view/InputPrintout.js";
import OutputPrintout from "./view/OutputPrintout.js";

class App {
	async play() {
		OutputPrintout.printLottos(await InputPrintout.inputAmount());

		let a = await InputPrintout.inputLottoNumbers();
		console.log("당첨번호 ", a.getNumbers());

		let b = await InputPrintout.inputBonusNum();
		console.log("보너스", b);

		OutputPrintout.printMathingNumberList(a.getNumbers(), b);
	}
}

export default App;
