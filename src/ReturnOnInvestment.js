export default function ReturnOnInvestment(principal, win) {
	const PRIZE = [5000, 50000, 1500000, 30000000, 2000000000];

	const profit = win.reduce((pre, value, idx) => {
		return (pre += value * PRIZE[idx]);
	}, 0);

	const roi = 100 + ((profit - principal) / principal) * 100;
	return parseFloat(roi.toFixed(2));
}
