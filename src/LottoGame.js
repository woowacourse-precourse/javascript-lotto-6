import IOUtils from "./IOUtils.js";

class LottoGame {
    async inputWinningNumbers() {
        const winningNumbers = await IOUtils.input("당첨 번호를 입력해 주세요.");
        this.#validateWinningNumbers(winningNumbers);
        return winningNumbers;
    }

    #validateWinningNumbers(winningNumbers) {};



}

export default LottoGame;