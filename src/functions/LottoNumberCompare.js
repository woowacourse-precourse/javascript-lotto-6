class LottoNumberCompare {

	constructor(lotto, winNumber, bonusNumber) {
		this.lotto = lotto;
		this.winNumber = winNumber;
		this.bonusNumber = bonusNumber;
	}

	compare() {
		const winNumberIncludeBonus = [...this.winNumber];

		let winRank = [];

		this.lotto.forEach(innerArr => {
			let intersect = innerArr.filter(x => winNumberIncludeBonus.includes(x));
			let intersectLength = intersect.length;

			if (innerArr.includes(this.bonusNumber) && intersectLength === 5) winRank[1] += 1;
			else if (intersectLength === 5) winRank[2] += 1;

			switch (intersectLength) {
				case 3:
					winRank[4] += 1;
					break;

				case 4:
					winRank[3] += 1;
					break;

				case 6:
					winRank[0] += 1;
					break;
			}
		});

		return winRank;
	}
}

export default LottoNumberCompare;