import { MissionUtils } from "@woowacourse/mission-utils";

class inputView {
    async inputLottoBudget() {
        const inputBudget = await MissionUtils.Console.readLineAsync("구입금액을 입력해 주세요.");
        return parseInt(inputBudget);
    }

    async inputLottoWinningNumber() {
        const inputWinningNumber = await MissionUtils.Console.readLineAsync("당첨 번호를 입력해 주세요.");
        return inputWinningNumber.split(",").map((number) => Number(number));
    }

    async inputLottoBonusNumber() {
        const inputBonusNumber = await MissionUtils.Console.readLineAsync("보너스 번호를 입력해 주세요.");
        return inputBonusNumber;
    }
}

export default inputView;