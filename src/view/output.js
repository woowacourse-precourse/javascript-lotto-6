import { Console } from "@woowacourse/mission-utils";
import { GAMEMST_OUTPUT_BOUGHT_LOTTO_NUMBERS } from "../constants/GameMessage.js";

class Output{
    constructor(){}

    static outputError(errorMessage){
        Console.print(`[ERROR] ${errorMessage}`);
    }

    static outputBoughtLottoNumber(boughtLottoNumber){
        Console.print(`\n${boughtLottoNumber}${GAMEMST_OUTPUT_BOUGHT_LOTTO_NUMBERS}`);
    }

    static outputLottoSetNumbers(lottoSetString){
        Console.print(`${lottoSetString}\n`);
    }

}

export default Output;