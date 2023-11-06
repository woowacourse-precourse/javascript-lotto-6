import InputOutputManager from './Models/InoputOutputManager.js';
import VarirficationManager from './Models/VarificationManager.js';

class App {
	async initialService() {
		const purchasePrice = InputOutputManager.getUserInput(
			'구입 금액을 입력해주세요.\n',
			VarirficationManager.checkPurchasePrice(),
		);
	}

	async play() {
		this.initialService();
	}
}

export default App;
