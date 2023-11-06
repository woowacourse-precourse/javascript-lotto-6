import InputPrintout from "./utils/InputPrintout.js";
import OutputPrintout from "./utils/OutputPrintout.js";

class App {
	async play() {
		OutputPrintout.printLottos(await InputPrintout.inputAmount());
	}
}

export default App;
