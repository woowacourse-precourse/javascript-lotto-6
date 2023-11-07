import { Console } from "@woowacourse/mission-utils";
import { GAMEMST_OUTPUT_BOUGHT_LOTTO_NUMBERS } from "../constants/GameMessage.js";

class Output{
    constructor(){}

    static outputError(errorMessage){
        Console.print(`[ERROR] ${errorMessage}`);
    }

    static outputBoughtLottoNumbers(boughtLottoNumber){
        Console.print(`\n${boughtLottoNumber}${GAMEMST_OUTPUT_BOUGHT_LOTTO_NUMBERS}`);
    }

}

export default Output;