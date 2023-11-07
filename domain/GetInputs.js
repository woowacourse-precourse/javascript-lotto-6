import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/const/message";
import Validation from "./Validation";


class getInputs {
    static async boughtPrice () {
        try {
            const priceInput = await MissionUtils.Console.readLineAsync(MESSAGE.BUY);
            Validation.validPurchaseAmount(priceInput);
            return priceInput;
        } catch(error) {
            MissionUtils.Console.print(error.message);
            return await this.boughtPrice();
        }
    }
}

export default getInputs;