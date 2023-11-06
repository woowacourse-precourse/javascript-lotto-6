import InputValuePrintout from "./utils/InputValuePrintout.js";

class App {
	async play() {
		const a = await InputValuePrintout.inputAmount();
		console.log(a);
	}
}

export default App;
