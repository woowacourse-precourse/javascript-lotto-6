import { Console, Random } from '@woowacourse/mission-utils';

function generateLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
}

function calculatePrize(matchedNumbers, bonusNumber) {
    const hasBonusNumber = bonusNumber !== null && matchedNumbers.includes(bonusNumber);
    const numMatches = matchedNumbers.length;

    if (numMatches === 6) return hasBonusNumber ? 2 : 1;
    if (numMatches === 5) return hasBonusNumber ? 3 : 4;
    if (numMatches === 4) return 5;
    if (numMatches === 3) return 0;
    return -1;
}
