import checkValue from "./libs/checkValue.js";
import exitWithError from "./libs/error.js";

class BonusNumber {
	constructor(bonusNumber, winningNumbers) {
		this.validate(bonusNumber, winningNumbers);
		this.value = bonusNumber;
	}

	validate(bonusNumber, winningNumbers) {
		const { errorMsg } = checkValue.bonusNumber(
			bonusNumber,
			winningNumbers
		);

		if (errorMsg) exitWithError(errorMsg);
	}
}

export default BonusNumber;
