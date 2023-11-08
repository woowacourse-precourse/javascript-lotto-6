import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export class BonusNumber {
    constructor(winNumbers) {
        this.winNumbers = winNumbers;
    }

    async bonusNumber() {
        let bonusNum;
        while (true) {
            try {
                const bonusInput = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
                bonusNum = Number(bonusInput);
                new Lotto([...this.winNumbers, bonusNum], true); 
                break;
            } catch (error) {
                MissionUtils.Console.print(error.message);
            }
        }
        return bonusNum;
    }
}