import { MESSAGE } from "../../constants";
import { readLineAsync } from "../../utils";

class Input {
    money() {
        return readLineAsync(MESSAGE.MONEY);
    }
    
    winNumber() {
        return readLineAsync(MESSAGE.WIN_NUMBER);    
    }

    bonusNumber() {
        return readLineAsync(MESSAGE.BONUS_NUMBER);
    }
} 

export default Input;
