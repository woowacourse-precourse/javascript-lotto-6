export const calculateEarnings = (results, purchaseAmount) => {
    const totalPrize = Object.keys(results).reduce((acc, matchCount) => {
        const prize = PRIZE_MAP[parseInt(matchCount, 10)] || 0;
        return acc + (results[matchCount] * prize);
    }, 0);

    const earnings = ((totalPrize / purchaseAmount) * 100);
    return earnings.toFixed(1);
};