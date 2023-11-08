import { Random } from '@woowacourse/mission-utils';
import {
    DEMICAL_POINT,
    INIT_ZERO,
    LOTTO_NUMBER_COUNT,
    MAX_LOTTO_NUMBER, 
    MIN_LOTTO_NUMBER,
    PERCENTAGE, 
    PRIZE_MAP, 
    RADIX_TEN, 
    ZERO,
} from './Define';
import Lotto from '../Lotto';

export const calculateEarnings = (results, purchaseAmount) => {
    const totalPrize = Object.keys(results).reduce((acc, matchCount) => {
        const prize = PRIZE_MAP[parseInt(matchCount, RADIX_TEN)] || ZERO;
        return acc + (results[matchCount] * prize);
    }, INIT_ZERO);

    const earnings = ((totalPrize / purchaseAmount) * PERCENTAGE);
    return earnings.toFixed(DEMICAL_POINT);
};

export const generateLotto = () => {
    const numbers = Random.pickUniqueNumbersInRange(
        MIN_LOTTO_NUMBER,
        MAX_LOTTO_NUMBER,
        LOTTO_NUMBER_COUNT
    );
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return new Lotto(sortedNumbers);
};

export const calculateMatchCount = (lotto, winningNumbers) => (
    lotto.checkNumbers(winningNumbers)
);