import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
    async play() {
        const purchaseAmount = await this.inputPurchaseAmount();
        Console.print(purchaseAmount / 1000 + "개를 구매했습니다.");

        const lottoTickets = [];
        for (let i = 0; i < purchaseAmount / 1000; i++) {
            const lottoNumbers = this.generateLottoNumbers();
            const lottoTicket = new Lotto(lottoNumbers);
            lottoTickets.push(lottoTicket);
        }

        for (const lottoTicket of lottoTickets) {
            Console.print(`[${lottoTicket.getNumbers().join(", ")}]`);
        }
        const winningNumbers = await this.inputWinningNumbers();
        const bonusNumber = await this.inputBonusNumber();
        this.checkDuplicate(winningNumbers, bonusNumber);

        const matchingCounts = this.calculateMatchingCounts(
            lottoTickets,
            winningNumbers,
            bonusNumber
        );
        this.calculateTotalProfit(matchingCounts, purchaseAmount);
    }

    async inputPurchaseAmount() {
        while (true) {
            try {
                const purchaseAmount = await Console.readLineAsync(
                    "구입금액을 입력해 주세요.\n"
                );
                if (!this.isValidAmount(purchaseAmount)) {
                    throw new Error("[ERROR] 유효한 구입금액을 입력해주세요.");
                }
                return purchaseAmount;
            } catch (error) {
                Console.print(error.message);
            }
        }
    }

    isValidAmount(amount) {
        return (
            !isNaN(amount) &&
            amount >= 1000 &&
            amount <= 1000000 &&
            amount % 1000 === 0
        );
    }

    generateLottoNumbers() {
        const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
            1,
            45,
            6
        );
        return lottoNumbers.sort((a, b) => a - b);
    }

    async inputWinningNumbers() {
        while (true) {
            try {
                const winningNumbers = await Console.readLineAsync(
                    "당첨 번호를 입력해 주세요.\n"
                ).then((winningNumbers) =>
                    winningNumbers.split(",").map(Number)
                );
                if (!new Lotto(winningNumbers)) {
                    throw new Error("[ERROR] 유효한 당첨 번호를 입력해주세요.");
                }
                return winningNumbers;
            } catch (error) {
                Console.print(error.message);
            }
        }
    }

    async inputBonusNumber() {
        while (true) {
            try {
                const bonusNumber = await Console.readLineAsync(
                    "보너스 번호를 입력해 주세요.\n"
                );
                if (!this.isValidBonusNumber(bonusNumber)) {
                    throw new Error(
                        "[ERROR] 유효한 보너스 번호를 입력해주세요."
                    );
                }
                return bonusNumber;
            } catch (error) {
                Console.print(error.message);
            }
        }
    }

    isValidBonusNumber(bonusNumber) {
        return !isNaN(bonusNumber) && bonusNumber >= 1 && bonusNumber <= 45;
    }

    checkDuplicate(winningNumbers, bonusNumber) {
        if (winningNumbers.includes(bonusNumber)) {
            throw new Error("[ERROR] 당첨 번호와 보너스 번호가 중복됩니다.");
        }
    }

    initializeMatchingCounts() {
        return {
            "3개 일치": 0,
            "4개 일치": 0,
            "5개 일치": 0,
            "5개 일치, 보너스 볼 일치": 0,
            "6개 일치": 0,
        };
    }

    calculateMatchingCounts(lottoTickets, winningNumbers, bonusNumber) {
        const matchingCounts = this.initializeMatchingCounts();

        for (const lottoTicket of lottoTickets) {
            const matchingNumbers = lottoTicket
                .getNumbers()
                .filter((number) => winningNumbers.includes(number));

            this.updateMatchingCounts(
                matchingCounts,
                matchingNumbers.length,
                bonusNumber
            );
        }

        return matchingCounts;
    }

    updateMatchingCounts(matchingCounts, matchingCount, bonusNumber) {
        if (matchingCount === 6) {
            matchingCounts["6개 일치"]++;
        } else if (
            matchingCount === 5 &&
            matchingNumbers.includes(bonusNumber)
        ) {
            matchingCounts["5개 일치, 보너스 볼 일치"]++;
        } else if (matchingCount === 5) {
            matchingCounts["5개 일치"]++;
        } else if (matchingCount === 4) {
            matchingCounts["4개 일치"]++;
        } else if (matchingCount === 3) {
            matchingCounts["3개 일치"]++;
        }
    }

    calculateTotalProfit(matchingCounts, purchaseAmount) {
        const prizeMoney = [5000, 50000, 1500000, 30000000, 2000000000];
        const totalPrize = this.calculateTotalPrize(matchingCounts, prizeMoney);
        const totalSpent = purchaseAmount;
        const totalProfitPercentage = this.calculateTotalProfitPercentage(
            totalPrize,
            totalSpent
        );

        this.printStatistics(matchingCounts, prizeMoney);
        this.printTotalProfit(totalProfitPercentage);
    }

    calculateTotalPrize(matchingCounts, prizeMoney) {
        return Object.keys(matchingCounts).reduce((acc, key, index) => {
            return acc + matchingCounts[key] * prizeMoney[index];
        }, 0);
    }

    calculateTotalProfitPercentage(totalPrize, totalSpent) {
        return (totalPrize / totalSpent) * 100;
    }

    printStatistics(matchingCounts, prizeMoney) {
        Console.print("당첨 통계");
        Console.print("---");

        const prizeLevels = [
            "3개 일치",
            "4개 일치",
            "5개 일치",
            "5개 일치, 보너스 볼 일치",
            "6개 일치",
        ];
        for (let i = 0; i < prizeLevels.length; i++) {
            const key = prizeLevels[i];
            const count = matchingCounts[key];
            Console.print(
                `${key} (${prizeMoney[
                    i
                ].toLocaleString()}원) - ${count.toLocaleString()}개`
            );
        }
    }

    printTotalProfit(totalProfitPercentage) {
        Console.print(
            `총 수익률은 ${totalProfitPercentage.toFixed(1)}%입니다.`
        );
    }
}

export default App;
