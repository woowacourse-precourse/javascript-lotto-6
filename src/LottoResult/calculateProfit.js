export default function calculateProfit(winResult, lottoCount) {
    const TotalProfit =
        winResult[3] * 5000 +
        winResult[4] * 50000 +
        winResult[5] * 1500000 +
        winResult[6] * 30000000 +
        winResult[7] * 2000000000;
    return Math.round((TotalProfit / (lottoCount * 1000)) * 100 * 10) / 10;
}
