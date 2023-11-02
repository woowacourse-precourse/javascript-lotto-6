class CheckLotto {
	static fivePlace(lottoNumberList, winningNumberList) {
		let correctCount = 0;
		lottoNumberList.forEach(lottoNumber => {
			if (winningNumberList.includes(lottoNumber)) {
				correctCount += 1;
			}
		});
		if ()
	}
}

export default CheckLotto;