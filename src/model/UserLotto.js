class UserLotto {
	#purchaseAmount;
	#numberOfPurchase;
	#userLottoNumbers = [];

	constructor(purchaseAmount) {
		try {
			this.#validate(purchaseAmount);
			this.#setPurchaseVariable(purchaseAmount);
		}catch (error) {
			throw error;
		}

		for (let i = 0; i < this.#numberOfPurchase; i++) {
			this.#userLottoNumbers.push(new UserLottoNumber());
		}
	}
}