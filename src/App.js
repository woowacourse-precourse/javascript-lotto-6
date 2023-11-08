import InputPrintout from "./view/InputPrintout.js";
import OutputPrintout from "./view/OutputPrintout.js";

class App {
	async play() {
		const amount = await InputPrintout.inputAmount();
		OutputPrintout.printLottos(amount);

		const winningNumber = await InputPrintout.inputLottoNumbers();
		const bonusNumber = await InputPrintout.inputBonusNum(winningNumber.getNumbers());

		OutputPrintout.printMathingNumberList(winningNumber.getNumbers(), bonusNumber);
		OutputPrintout.printRate(Number(amount));
	}
}

export default App;
