import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

async function inputWinningNumbers() {
    let winningNumbers = (await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.\n")).split(",").map(Number);
    try {
        const lotto = new Lotto(winningNumbers);
        MissionUtils.Console.print("");
        return winningNumbers;
    } catch(err) {
        MissionUtils.Console.print(err.message);
        return inputWinningNumbers();
    }       
}

export default inputWinningNumbers;
