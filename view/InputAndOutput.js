import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/common/OutputMessage.js";
import Validate from "../src/common/validate.js";
import Lotto from "../src/Lotto.js";
import LottoPlay from "../src/Lottoplay.js";

class InputAndOutput{
    
    constructor(){
        this.validate = new Validate();
        this.lottoPlay = new LottoPlay();
    }

    async inputPurchasePrice(){
        const PURCHASE_PRICE = await Console.readLineAsync(`${MESSAGE.PURCHASE_NUMBER_INPUT}\n`);   
        const VALIDATE_PURCHASE_PRICE = this.validate.validatePrice(PURCHASE_PRICE);
        return VALIDATE_PURCHASE_PRICE;
    }
    async inputWinNumber(){
        const WIN_NUMBER = await Console.readLineAsync(`${MESSAGE.WIN_NUMBER_INPUT}\n`);
        const SPLIT_WIN_NUMBER = WIN_NUMBER.split(',').map(Number);
        Console.print('');
        // TODO: 입력된 로또 번호의 유효성 검사를 진행
        new Lotto(SPLIT_WIN_NUMBER);
        return SPLIT_WIN_NUMBER;
    }
    async inputBonusNumber(numbers){
        const BONUS_NUMBER = parseInt(await Console.readLineAsync(`${MESSAGE.BONUS_NUMBER_INPUT}\n`));
        this.validate.validateBonusNumber(BONUS_NUMBER,numbers);
        Console.print('');
        return BONUS_NUMBER;     
    }
    async purchasedLottoOutput(number, amount){
        // const PURCHASE_LOTTO_NUMBER = this.lottoPlay.autoLottoGenerator(amount);
        Console.print(`${amount}${MESSAGE.NUMBER_OF_PURCHASE}`);
        number.forEach(e => {
           Console.print(`[${e.join(', ')}]`);
        //    Console.print(JSON.stringify(e));
        });
        Console.print('');
    }
    gameResultOutput(result, ratio){
        const RANK = Object.values(MESSAGE.RANK);
        Console.print(MESSAGE.WIN_STATISTICS);
        Console.print(MESSAGE.DIVIDE_LINE);
        
        for(let i = 0; i < RANK.length; i++){
            Console.print(`${RANK[i]}${result[i]}${MESSAGE.UNIT}`);
        }
        Console.print(`${MESSAGE.TOTAL_RETURN.FRONT} ${ratio}${MESSAGE.TOTAL_RETURN.BACK}`);
    }
}
export default InputAndOutput;