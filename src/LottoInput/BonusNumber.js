import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export class BonusNumber {
    constructor(winNumbers) {
        this.winNumbers = winNumbers;
    }

    async bonusNumber() {
        const bonusInput = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
        const bonusNum = Number(bonusInput);
        new Lotto([...this.winNumbers, bonusNum], true);
        return bonusNum;
    }
}