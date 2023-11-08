const LottoCheck = {
	checkCorrectNumber(winnerLotto, userLotto) {
		let count = 0;

		winnerLotto.forEach((number) => {
			if (userLotto.includes(number)) count += 1;
		});

		return count;
	},
};

export default LottoCheck;
