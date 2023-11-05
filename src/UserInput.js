import { MissionUtils } from "@woowacourse/mission-utils";
import Exceptions from "./Lotto.js";

class UserInput {
    constructor() {
        this.Exceptions = new Exceptions();
    }
    async purchaseAmount() {
        const purchaseAmount = await MissionUtils.Console.readLineAsync('구입급액을 입력해 주세요. \n');
        if (Number(purchaseAmount) % 1000 === 0) {
            const ticketAmount = Number(purchaseAmount) / 1000;
            return ticketAmount;
        }
        // 에러인 경우 Lotto 함수 참조해서 추가
    }


}
export default UserInput;