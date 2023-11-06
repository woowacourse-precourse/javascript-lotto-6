import IOUtils from "./IOUtils.js";

class LottoGame {
    async inputWinningNumbers() {
        const winningNumbers = await IOUtils.input("당첨 번호를 입력해 주세요.");
        this.#validateWinningNumbers(winningNumbers);
        return winningNumbers;
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



}

export default LottoGame;