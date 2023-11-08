class WinningLotto {
	condition;

	count;

	constructor(condition, count = 0) {
		this.condition = condition;
		this.count = count;
	}

	addCount() {
		this.count += 1;
	}
}

export default WinningLotto;
