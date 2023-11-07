import IOUtils from "./IOUtils.js";
import {lottoPrize, prizeAmount} from "./LottoConstant.js";

class LottoGame {
    #lottoResultCount;
    #winningNumbers;
    #bonusNumber;

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
        const winningNumbers = await IOUtils.input("\n당첨 번호를 입력해 주세요.\n");
        this.#validateWinningNumbers(winningNumbers);
        this.#winningNumbers = new Set(winningNumbers.split(",").map(Number));
    }

    #validateWinningNumbers(winningNumbers) {
        if(winningNumbers.split(",").length !== 6) {
            throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
        }

        if (new Set(winningNumbers.split(",")).size !== 6) {
            throw new Error("[ERROR] 당첨 번호에 중복된 번호가 있습니다.");
        }

        winningNumbers.split(",").forEach((number) => {
            const winningNumber = Number(number);
            if (isNaN(winningNumber)) {
                throw new Error("[ERROR] 당첨 번호는 숫자여야 합니다.");
            }

            if (winningNumber < 1 || winningNumber > 45) {
                throw new Error("[ERROR] 당첨 번호는 1과 45 사이여야 합니다.");
            }
        })
    };

    async inputBonusNumber() {
        const bonusNumber = await IOUtils.input("\n보너스 번호를 입력해 주세요.\n");
        this.#validateBonusNumber(bonusNumber);
        return bonusNumber;
    }

    #validateBonusNumber(number) {
        const bonusNumber = Number(number);

        if (isNaN(bonusNumber)) {
            throw new Error("[ERROR] 보너스 번호는 숫자여야 합니다.");
        }

        if (bonusNumber < 1 || bonusNumber > 45) {
            throw new Error("[ERROR] 보너스 번호는 1과 45 사이여야 합니다.");
        }

        if (this.#winningNumbers.has(bonusNumber)) {
            throw new Error("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
        }
    }

    matchAllLottoTicket(lottoTickets) {
            lottoTickets.forEach((lottoTicket) => {
                const matchedCount = this.#getMatchedCount(lottoTicket);
                const isMatchedBonus = this.#isMatchedBonus(lottoTicket);

                if (matchedCount === 5) {
                    return this.#lottoResultCount[lottoPrize[5](isMatchedBonus)] += 1;
                }

                if (matchedCount >= 3) {
                    this.#lottoResultCount[lottoPrize[matchedCount]] += 1;
                }
        })
    }

    #getMatchedCount(lottoTicket) {
        return lottoTicket.numbers.filter((number) => this.#winningNumbers.has(number)).length;
    }

    #isMatchedBonus(lottoTicket) {
        return lottoTicket.numbers.includes(this.#bonusNumber);
    }

    #calculateProfitRate(purchaseAmount) {
        return (Object.keys(this.#lottoResultCount)
            .reduce((acc, key) => {
                return acc + prizeAmount[key] * this.#lottoResultCount[key];
            }, 0) * 100 / purchaseAmount).toFixed(1);
    }

    printResult(purchaseAmount) {
        IOUtils.output("\n당첨 통계\n---");
        Object.keys(this.#lottoResultCount).forEach((key) => {
            IOUtils.output(`${key} (${prizeAmount[key].toLocaleString('ko-KR')}원) - ${this.#lottoResultCount[key]}개`);
        })
        IOUtils.output(`총 수익률은 ${this.#calculateProfitRate(purchaseAmount)}%입니다.`);
    }
}

export default LottoGame;