import { MissionUtils } from "@woowacourse/mission-utils";

class InputUi {
    constructor() {
    }
    async askpurchaseAmount() {
        const PURCHASE_AMOUNT = await MissionUtils.Console.readLineAsync('구입 금액을 입력하세요.');
        return PURCHASE_AMOUNT;
    }
}
export default InputUi;