import {MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class LottoModel {
    generateLottos(purchaseAmount) {
        const maxTickets = Math.floor(purchaseAmount / 1000);
        return Array.from({length: maxTickets}, () => new Lotto(this.generateRandomNumbers()));
    }

    calculateResults(lottos, winningNumbers, bonusNumber, purchaseAmount) {
        const results = this.countResults(lottos, winningNumbers, bonusNumber);
        results.totalPrize = this.calculateTotalPrize(results);
        results.totalEarningsRate = this.calculateTotalEarningsRate(results.totalPrize, purchaseAmount);
        return results;
    }

    countResults(lottos, winningNumbers, bonusNumber) {
        const countResults = {3: 0, 4: 0, 5: 0, 5.1: 0, 6: 0};

        for (const lotto of lottos) {
            const matchCount = lotto.winningNumbersCount(winningNumbers);
            const hasBonusMatch = lotto.bonusMatch(bonusNumber);

            if (matchCount === 5 && hasBonusMatch) {
                countResults[5.1] += 1;
            } else if (matchCount >= 3) {
                countResults[matchCount] += 1;
            }
        }
        return countResults;
    }

    calculateTotalPrize(countResults) {
        return countResults[3] * 5000 + countResults[4] * 50000 + countResults[5] * 1500000 + countResults[5.1] * 30000000 + countResults[6] * 2000000000;
    }

    calculateTotalEarningsRate(totalPrize, purchaseAmount) {
        return (totalPrize / purchaseAmount) * 100;
    }

    generateRandomNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    }
}

export default LottoModel;