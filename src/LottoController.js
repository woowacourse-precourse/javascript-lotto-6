import {MissionUtils} from "@woowacourse/mission-utils";

class LottoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async play() {
        const purchaseAmount = await this.buyLottoTickets();
        const lottos = this.model.generateLottos(purchaseAmount);
        this.view.displayLottoNumbers(lottos);

        const winningNumbers = await this.inputWinningNumbers();
        const bonusNumber = await this.inputBonusNumber();

        const results = this.model.calculateResults(lottos, winningNumbers, bonusNumber,purchaseAmount);
        this.view.displayResults(results);
        this.view.displayTotalEarningsRate(results.totalEarningsRate);
    }

    async buyLottoTickets() {
        try {
            const userInput = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.\n");
            if (isNaN(userInput) || userInput === null || userInput.includes(" ")) {
                throw new Error(`[ERROR] 잘못된 숫자 입력입니다.`);
            }

            const purchaseAmount = parseInt(userInput);
            if (purchaseAmount % 1000 !== 0 || purchaseAmount <= 0) {
                throw new Error(`[ERROR] 숫자는 1000이상 입력해야 합니다.`);
            }
            MissionUtils.Console.print("");
            return purchaseAmount;
        } catch (error) {
            MissionUtils.Console.print(`[ERROR] 잘못된 구입금액 입력입니다.`);
        }
    }

    async inputWinningNumbers() {
        try {
            let userInput = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
            const winningNumbers = userInput.split(',').map(Number);

            if (!Array.isArray(winningNumbers) || winningNumbers.length !== 6 || winningNumbers.includes(null) || winningNumbers.includes("") || winningNumbers.includes(" ") || winningNumbers.includes(NaN)) {
                throw new Error(`[ERROR] 잘못된 당첨 번호 입력입니다.`);
            }

            MissionUtils.Console.print("");
            return winningNumbers;
        } catch (error) {
            MissionUtils.Console.print(`[ERROR] 잘못된 당첨 번호 입력입니다.`);
        }
    }

    async inputBonusNumber() {
        try {
            const userInput = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
            const bonusNumber = parseInt(userInput);

            if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
                throw new Error("[ERROR] 잘못된 보너스 번호 입력입니다.");
            }

            MissionUtils.Console.print("");
            return bonusNumber;
        } catch (error) {
            MissionUtils.Console.print(`[ERROR] 잘못된 보너스 번호 입력입니다.`);
        }
    }
}

export default LottoController;