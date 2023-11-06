import InputPrintout from "./utils/InputPrintout.js";

class App {
	async play() {
		const a = await InputPrintout.inputAmount();
		console.log(a + "음?");
	}
}

export default App;
