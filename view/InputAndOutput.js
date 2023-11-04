import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/common/OutputMessage.js";
import Validate from "../src/common/validate.js";
import Lotto from "../src/Lotto.js";

class InputAndOutput{
    
    constructor(){
        this.validate = new Validate();
    }

    async inputPurchaseAmount(){
        const PURCHASE_AMOUNT = await Console.readLineAsync(`${MESSAGE.PURCHASE_NUMBER_INPUT}\n`);   
        const VALIDATE_PURCHASE_AMOUNT = this.validate.validatePrice(PURCHASE_AMOUNT);
        return VALIDATE_PURCHASE_AMOUNT;
    }
    async inputWinNumber(){
        const WIN_NUMBER = await Console.readLineAsync(`${MESSAGE.WIN_NUMBER_INPUT}\n`);
        const SPLIT_WIN_NUMBER = WIN_NUMBER.split(',');

        // TODO: 입력된 로또 번호의 유효성 검사를 진행
        new Lotto(SPLIT_WIN_NUMBER);
        return SPLIT_WIN_NUMBER;
    }
    async inputBonusNumber(){
        const BONUS_NUMBER = await Console.readLineAsync(`${MESSAGE.BONUS_NUMBER_INPUT}\n`);
        const VALIDATE_BONUS_NUMBER = this.validate.validateBonusNumber(BONUS_NUMBER);
        return VALIDATE_BONUS_NUMBER;     
    }
}
export default InputAndOutput;