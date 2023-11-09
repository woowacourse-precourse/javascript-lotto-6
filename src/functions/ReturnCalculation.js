
export const returnCalculation = (purchaseAmount, winRank) => {
	const result = purchaseAmount + winRank[4] * 5000 + winRank[3] * 50000 + winRank[2] * 1500000 + winRank[1] * 30000000 + winRank[0] * 2000000000;
	const rateOfReturn = ((result / purchaseAmount) * 100).toFixed(1);

	return rateOfReturn;
};

export default returnCalculation;