import { MissionUtils } from "@woowacourse/mission-utils";

class inputView {
    async inputBudget() {
        const inputLottoBudget = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.)");
        return parseInt(inputLottoBudget);
    }
}

export default inputView;