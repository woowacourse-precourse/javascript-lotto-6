import { Console } from "@woowacourse/mission-utils";

function compare(lotto, winNumber) {
	let NumberCount = 0;

	winNumber.forEach(number => {
		if (lotto.includes(Number(number))) {
			NumberCount += 1;
		}
	});
	return NumberCount
}

function rank(bonusNumber, lotto, NumberCount, winRank) {
	switch (NumberCount) {
		case 3:
			winRank[4] += 1;
			break;

		case 4:
			winRank[3] += 1;
			break;

		case 5:
			if (lotto.includes(bonusNumber)) {
				winRank[1] += 1;
			}
			winRank[2] += 1;
			break;

		case 6:
			winRank[0] += 1;
			break;
	}

	return winRank;
}

export function lottoNumberCompare(lotto, winNumber, bonusNumber) {

	let winRank = new Array(5).fill(0);

	lotto.map(innerArr => {
		const numberCount = compare(lotto, winNumber);
		winRank = rank(bonusNumber, innerArr, numberCount, winRank);
	});

	Console.print(winRank);

	return winRank;
};