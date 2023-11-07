import InputPrintout from "./utils/InputPrintout.js";
import OutputPrintout from "./utils/OutputPrintout.js";

class App {
	async play() {
		OutputPrintout.printLottos(await InputPrintout.inputAmount());
		let a = await InputPrintout.inputLottoNumbers();

		console.log("밖에 값 ", a.split(","));
	}
}

export default App;
