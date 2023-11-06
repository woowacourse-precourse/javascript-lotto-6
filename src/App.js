import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
    async play() {
        const purchaseAmount = await this.inputPurchaseAmount();
        Console.print("\n" + purchaseAmount / 1000 + "개를 구매했습니다.");

        const lottoTickets = [];
        for (let i = 0; i < purchaseAmount / 1000; i++) {
            const lottoNumbers = this.generateLottoNumbers();
            const lottoTicket = new Lotto(lottoNumbers);
            lottoTickets.push(lottoTicket);
        }

        for (const lottoTicket of lottoTickets) {
            Console.print(lottoTicket.getNumbers());
        }
        const winningNumbers = await this.inputWinningNumbers();
        const bonusNumber = await this.inputBonusNumber();
        this.checkDuplicate(winningNumbers, bonusNumber);
    }

    async inputPurchaseAmount() {
        const purchaseAmount = await Console.readLineAsync(
            "구입금액을 입력해 주세요.\n"
        );
        if (purchaseAmount % 1000 !== 0 || purchaseAmount < 1000) {
            throw new Error(
                "[ERROR] 구입금액은 1000원 이상이어야 하며, 1000원 단위로 입력해야 합니다."
            );
        }
        return purchaseAmount;
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
        const winningNumbers = await Console.readLineAsync(
            "당첨 번호를 입력해 주세요.\n"
        ).then((winningNumbers) => winningNumbers.split(",").map(Number));
        const lottoTicket = new Lotto(winningNumbers);

        return winningNumbers;
    }

    async inputBonusNumber() {
        const bonusNumber = await Console.readLineAsync(
            "보너스 번호를 입력해 주세요.\n"
        );
        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error("[ERROR] 보너스 번호는 1~45 사이여야 합니다.");
        }
        return bonusNumber;
    }
    // 당첨번호와 보너스번호 중복 확인
    checkDuplicate(winningNumbers, bonusNumber) {
        if (winningNumbers.includes(bonusNumber)) {
            throw new Error("[ERROR] 당첨 번호와 보너스 번호가 중복됩니다.");
        }
    }
}

export default App;
