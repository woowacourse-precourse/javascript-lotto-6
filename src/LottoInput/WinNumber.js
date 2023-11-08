import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export class WinNumber {
    async winnumber() {
        let winnum;
        while (true) {
            try {
                const winnumInput = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해주세요.\n");
                winnum = winnumInput.split(',').map(num => Number(num.trim()));
                new Lotto(winnum);
                break;
            } catch (error) {
                MissionUtils.Console.print(error.message);
            }
        }
        return winnum;
    }
}
