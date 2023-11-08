import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
    async play() {
        try {
            const lottoPrice = await this.getLottoPrice();
            const purchasedLottos = await this.getLottoBuy(lottoPrice);
            this.displayPurchasedLottos(purchasedLottos);
            const { winningNumbers, bonusNumber } =
                await this.getWinningNumbers();
            this.checkResults(purchasedLottos, winningNumbers, bonusNumber);
        } catch (error) {
            console.error(error.message);
        }
    }

    async getLottoPrice() {
        await MissionUtils.Console.print("로또 구입 금액을 입력해주세요.");
        const lottoPrice = await MissionUtils.Console.readLineAsync();
        if (lottoPrice % 1000 !== 0 || lottoPrice < 1000) {
            throw new Error("[ERROR] 올바른 금액을 입력하세요.");
        }
        return Math.floor(lottoPrice / 1000);
    }

    async getLottoBuy(lottoPrice) {
        const purchasedLottos = [];
        for (let i = 0; i < lottoPrice; i++) {
            const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
                1,
                45,
                6
            );
            purchasedLottos.push(new Lotto(randomNumbers));
        }
        return purchasedLottos;
    }
    async displayPurchasedLottos(purchasedLottos) {
        await MissionUtils.Console.print(
            `${purchasedLottos.length}개를 구매했습니다.`
        );
        for (const purchasedLotto of purchasedLottos) {
            await MissionUtils.Console.print(
                purchasedLotto.getNumbers().sort((a, b) => a - b)
            );
        }
    }
    async getWinningNumbers() {
        await MissionUtils.Console.print(
            "당첨 번호를 입력해 주세요 (쉼표로 구분):"
        );
        const winningNumbersString = await MissionUtils.Console.readLineAsync();
        const winningNumbers = winningNumbersString.split(",").map(Number);
        const bonusNumber = await this.getWinningNumber("보너스 번호: ");
        return { winningNumbers, bonusNumber };
    }

    async getWinningNumber(prompt) {
        await MissionUtils.Console.print(prompt);
        const number = await MissionUtils.Console.readLineAsync();
        if (isNaN(number) || number < 1 || number > 45) {
            throw new Error(
                "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다."
            );
        }
        return Number(number);
    }

    checkResults(purchasedLottos, winningNumbers, bonusNumber) {
        const results = [0, 0, 0, 0, 0];
        for (const purchasedLotto of purchasedLottos) {
            const matchedNumbers =
                purchasedLotto.getMatchedNumbers(winningNumbers);
            const matchedBonusNumber =
                purchasedLotto.containsNumber(bonusNumber);
            if (matchedNumbers.length === 6) {
                results[0]++;
            } else if (matchedNumbers.length === 5 && matchedBonusNumber) {
                results[1]++;
            } else if (matchedNumbers.length === 5) {
                results[2]++;
            } else if (matchedNumbers.length === 4) {
                results[3]++;
            } else if (matchedNumbers.length === 3) {
                results[4]++;
            }
        }
        this.displayResults(results);
    }

    async displayResults(results) {
        await MissionUtils.Console.print("당첨 내역");
        await MissionUtils.Console.print(
            `3개 일치 (5,000원) - ${results[4]}개`
        );
        await MissionUtils.Console.print(`4개 일치 (50,000원) - 0개`);
        await MissionUtils.Console.print(`5개 일치 (1,500,000원) - 0개`);
        await MissionUtils.Console.print(
            `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개`
        );
        await MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - 0개`);
        this.displayTotalProfit(results);
    }

    async displayTotalProfit(results) {
        const totalInvestment = purchasedLottos.length * 1000;
        const totalPrize = results[4] * 5000;
        const profitRate =
            ((totalPrize - totalInvestment) / totalInvestment) * 100;
        await MissionUtils.Console.print(
            `총 수익률은 ${profitRate.toFixed(1)}%입니다.`
        );
    }
}

export default App;
