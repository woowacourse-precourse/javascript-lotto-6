import { RULE } from "../../constants";
import { print, SIGNS } from "../../utils";
import { Print } from "./Print.js";
import { Input } from "./Input.js";


class LottoView {
    constructor() {
        this.printer = new Print();
        this.inputHandler = new Input();
    }
    // ---------- input -----------
    inputMoney() {
        return this.inputHandler.money();
    }

    inputWinNumber() {
        return this.inputHandler.winNumber();
    }
    
    inputBonusNumber() {
        return this.inputHandler.bonusNumber();
    }

    // ---------- print ------------
    printPrizeReulst() {
        this.printer.prizeResult();
    }
    printSameCount() {
        this.printer.sameCount(arr);
    }
    printRateOfReturn(){
        this.printer.rateOfReturn(rate);
    }
    
}

export default LottoView;
