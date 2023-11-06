import IOUtils from "./IOUtils.js";
import {lottoPrize, prizeAmount} from "./LottoConstant.js";

class LottoGame {
    #lottoResultCount;

    constructor() {
        this.#lottoResultCount = this.#initializeResultCount();
    }

    #initializeResultCount() {
        const lottoResultCount = {};
        Object.keys(prizeAmount).forEach((key) => {
            lottoResultCount[key] = 0;
        })
        return lottoResultCount;
    }

    async inputWinningNumbers() {
        const winningNumbers = await IOUtils.input("당첨 번호를 입력해 주세요.");
        this.#validateWinningNumbers(winningNumbers);
        return new Set(winningNumbers.split(",").map(Number));
    }

    #validateWinningNumbers(winningNumbers) {
        if(winningNumbers.split(",").length() !== 6) {
            throw new Error("당첨 번호는 6개여야 합니다.");
        }

        if (new Set(winningNumbers.split(",")).size !== 6) {
            throw new Error("당첨 번호에 중복된 번호가 있습니다.");
        }

        winningNumbers.split(",").forEach((number) => {
            const winningNumber = Number(number);
            if (isNaN(winningNumber)) {
                throw new Error("당첨 번호는 숫자여야 합니다.");
            }

            if (winningNumber < 1 || winningNumber > 45) {
                throw new Error("당첨 번호는 1과 45 사이여야 합니다.");
            }
        })
    };

    async inputBonusNumber() {
        const bonusNumber = await IOUtils.input("보너스 번호를 입력해 주세요.\n");
        this.#validateBonusNumber(bonusNumber);
        return bonusNumber;
    }

    #validateBonusNumber(number) {
        const bonusNumber = Number(number);

        if (isNaN(bonusNumber)) {
            throw new Error("보너스 번호는 숫자여야 합니다.");
        }

        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error("보너스 번호는 1과 45 사이여야 합니다.");
        }
    }

    #matchAllLottoTicket(winningNumbers, bonusNumber, lottoTickets) {
            IOUtils.output("\n당첨 통계\n---");

            lottoTickets.forEach((lottoTicket) => {
                const matchedCount = this.#getMatchedCount(winningNumbers);
                const isMatchedBonus = this.#isMatchedBonus(bonusNumber);

                if (matchedCount === 5) {
                    return this.#lottoResultCount[lottoPrize[5](isMatchedBonus)] += 1;
                }

                this.#lottoResultCount[lottoPrize[matchedCount]] += 1;
        })
    }

    #getMatchedCount(winningNumbers, lottoTicket) {
        return lottoTicket.numbers.filter((number) => winningNumbers.has(number)).length;
    }

    #isMatchedBonus(bonusNumber, lottoTicket) {
        return lottoTicket.numbers.includes(bonusNumber);
    }

    #calculateProfitRate(purchaseAmount) {
        return (Object.keys(this.#lottoResultCount)
            .reduce((acc, key) => {
                return acc + prizeAmount[key] * this.#lottoResultCount[key];
            }) * 100 / purchaseAmount).toFixed(1);
    }

    #printResult(purchaseAmount) {
        Object.keys(this.#lottoResultCount).forEach((key) => {
            IOUtils.output(`${key} (${prizeAmount[key].toLocaleString('ko-KR')}원) - ${this.#lottoResultCount[key]}개`);
        })
        IOUtils.output(`총 수익률은 ${this.#calculateProfitRate(purchaseAmount)}%입니다.`);
    }
}

export default LottoGame;