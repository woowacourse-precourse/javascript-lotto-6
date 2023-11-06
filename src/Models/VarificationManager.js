import { isNumber, isDividableWithStandardCost } from '../Utils/Varification.js';

class VarirficationManager {
	static checkPurchasePrice(value) {
		isNumber(value);
		isDividableWithStandardCost(value);
	}
}

export default VarirficationManager;
