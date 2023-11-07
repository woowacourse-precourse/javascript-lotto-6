import InputPrintout from "./utils/InputPrintout.js";
import OutputPrintout from "./utils/OutputPrintout.js";

class App {
	async play() {
		OutputPrintout.printLottos(await InputPrintout.inputAmount());
		await InputPrintout.inputLottoNumbers();
	}
}

export default App;
