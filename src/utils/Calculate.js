import { Random } from '@woowacourse/mission-utils';

export const calculateEarnings = (results, purchaseAmount) => {
    const totalPrize = Object.keys(results).reduce((acc, matchCount) => {
        const prize = PRIZE_MAP[parseInt(matchCount, 10)] || 0;
        return acc + (results[matchCount] * prize);
    }, 0);

    const earnings = ((totalPrize / purchaseAmount) * 100);
    return earnings.toFixed(1);
};

export const generateLotto = () => {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return new Lotto(sortedNumbers);
};

export const calculateMatchCount = (lotto, winningNumbers) => (
    lotto.checkNumbers(winningNumbers)
);