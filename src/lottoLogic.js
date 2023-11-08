import { Lotto } from './Lotto.js';

export function generateLottoTickets(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
        lottos.push(new Lotto(generateLottoNumbers()));
    }
    return lottos;
}

export function checkResults(lottos, winningNumbers, bonusNumber) {
    const results = [0, 0, 0, 0, 0];
    for (const lotto of lottos) {
        const matchedNumbers = lotto.getMatchedNumbers(winningNumbers);
        const result = calculatePrize(matchedNumbers, bonusNumber);
        if (result !== -1) {
            results[result]++;
        }
    }
    return results;
}

export function calculateProfitRate(purchaseAmount, results) {
    const totalWinning = results.reduce((total, value, index) => total + value * PRIZE_TABLE[index], 0);
    return ((totalWinning - purchaseAmount) / purchaseAmount) * 100;
}
