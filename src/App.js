import inputPurchaseAmount from "./inputPurchaseAmount.js";
import getLottoTickets from "./getLottoTickets.js";
import inputWinningNumbers from "./inputWinningNumbers.js";
import inputBonusNumber from "./inputBonusNumber.js";
import compareNumber from "./compareNumber.js";
import countWinning from "./countWinning.js";
import getWinningStatistics from "./getWinningStatistics.js";
import getRoundedProfit from "./getRoundedProfit.js";

class App {
  async play() {
    const purchaseAmount = await inputPurchaseAmount();
    const purchaseCount = purchaseAmount / 1000;
    const lottoTickets = getLottoTickets(purchaseCount);
    const { winningNumbers, bonusNumber } = await getWinningInfo();
    const WinningStatistics = calculateWinningStatistics(purchaseCount, lottoTickets, winningNumbers, bonusNumber);
    printWinningStatistics(WinningStatistics);
    printRoundedProfit(WinningStatistics, purchaseAmount);
  }
}

async function getWinningInfo() {
  const winningNumbers = await inputWinningNumbers();
  const bonusNumber = await inputBonusNumber(winningNumbers);
  return { winningNumbers, bonusNumber };
}

function calculateWinningStatistics(purchaseCount, lottoTickets, winningNumbers, bonusNumber) {
  let WinningStatistics = {
    three: 0,
    four: 0,
    five: 0,
    fiveBonus: 0,
    six: 0
  };
  for (let i = 0; i < purchaseCount; i++) {
    let matchCount = 0;
    const eachLottoTicket = lottoTickets[i];
    for (let j = 0; j < 6; j++) {
      const pickedWinningNumber = winningNumbers[j];
      matchCount = compareNumber(pickedWinningNumber, eachLottoTicket, matchCount);
    }
    WinningStatistics = countWinning(matchCount, WinningStatistics, bonusNumber, eachLottoTicket);
  }
  return WinningStatistics;
}

function printWinningStatistics(WinningStatistics) {
  getWinningStatistics(WinningStatistics);
}

function printRoundedProfit(WinningStatistics, purchaseAmount) {
  getRoundedProfit(WinningStatistics, purchaseAmount);
}

export default App;
