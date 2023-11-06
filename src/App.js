import InputValuePrintout from "./utils/InputValuePrintout.js";

class App {
	async play() {
		const a = await InputValuePrintout.inputAmount();
	}
}

export default App;
