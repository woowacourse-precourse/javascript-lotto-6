import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Purchase from "./Purchase.js";
import WinningNumbers from "./WinningNumbers.js";
class App {
    async play() {
        const purchase = new Purchase(await this.inputPurchaseAmount());
        Console.print(purchase.getAmount() / 1000 + "개를 구매했습니다.");

        const lottoTickets = this.generateLottoTickets(purchase);

        this.printLottoTickets(lottoTickets);

        const winningNumbersInput = await this.inputWinningNumbers();
        const bonusNumberInput = await this.inputBonusNumber(
            winningNumbersInput
        );
        const winningNumbers = new WinningNumbers(
            winningNumbersInput,
            bonusNumberInput
        );

        const matchingCounts = this.calculateMatchingCounts(
            lottoTickets,
            winningNumbers
        );
        this.calculateTotalProfit(matchingCounts, purchase.getAmount());
    }

    async inputPurchaseAmount() {
        while (true) {
            try {
                const purchaseAmount = await Console.readLineAsync(
                    "구입금액을 입력해 주세요.\n"
                );
                new Purchase(purchaseAmount);
                return purchaseAmount;
            } catch (error) {
                Console.print(error.message);
            }
        }
    }

    generateLottoTickets(purchase) {
        const ticketCount = purchase.getAmount() / 1000;
        const lottoTickets = [];

        for (let i = 0; i < ticketCount; i++) {
            const lottoNumbers = this.generateLottoNumbers();
            const lottoTicket = new Lotto(lottoNumbers);
            lottoTickets.push(lottoTicket);
        }

        return lottoTickets;
    }

    generateLottoNumbers() {
        const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
            1,
            45,
            6
        );
        return lottoNumbers.sort((a, b) => a - b);
    }

    printLottoTickets(lottoTickets) {
        for (const lottoTicket of lottoTickets) {
            Console.print(`[${lottoTicket.getNumbers().join(", ")}]`);
        }
    }

    async inputWinningNumbers() {
        while (true) {
            try {
                const winningNumbers = await Console.readLineAsync(
                    "당첨 번호를 입력해 주세요.\n"
                ).then((numbers) => numbers.split(",").map(Number));
                new Lotto(winningNumbers);
                return winningNumbers;
            } catch (error) {
                Console.print(error.message);
            }
        }
    }

    async inputBonusNumber(winningNumbers) {
        while (true) {
            try {
                const bonusNumber = await Console.readLineAsync(
                    "보너스 번호를 입력해 주세요.\n"
                ).then(Number);
                new WinningNumbers(winningNumbers, bonusNumber);
                return bonusNumber;
            } catch (error) {
                Console.print(error.message);
            }
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

    calculateMatchingCounts(lottoTickets, winningNumbers) {
        const matchingCounts = this.initializeMatchingCounts();

        const winningNumbersArray = winningNumbers.getNumbers();
        const bonusNumber = winningNumbers.getBonusNumber();

        for (const lottoTicket of lottoTickets) {
            const matchingNumbers = lottoTicket
                .getNumbers()
                .filter((number) => winningNumbersArray.includes(number));

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
        } else if (matchingCount === 5 && bonusNumber !== null) {
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
