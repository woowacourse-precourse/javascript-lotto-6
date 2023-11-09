import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../src/common/outputMessage.js";
import Validate from "../src/common/Validate.js";
import Lotto from "../src/Lotto.js";
import LottoPlay from "../src/LottoPlay.js";

class InputAndOutput{
    
    constructor(){
        this.validate = new Validate();
        this.lottoPlay = new LottoPlay();
    }
    async inputPurchasePrice(){
        while(true){
            try {
                const PURCHASE_PRICE = await Console.readLineAsync(`${MESSAGE.PURCHASE_NUMBER_INPUT}\n`);   
                const VALIDATE_PURCHASE_PRICE = await this.validate.validatePrice(PURCHASE_PRICE);
                return VALIDATE_PURCHASE_PRICE; 
            } catch (error) {
                Console.print(`${error}`);
            }
        }
    }
    async inputWinNumber(){
        while(true){
            try {
                const WIN_NUMBER = await Console.readLineAsync(`${MESSAGE.WIN_NUMBER_INPUT}\n`);
                const SPLIT_WIN_NUMBER = WIN_NUMBER.split(',').map(Number);
                Console.print('');
                new Lotto(SPLIT_WIN_NUMBER);
                return SPLIT_WIN_NUMBER;       
            } catch (error) {
                Console.print(`${error}`);
            }
        }
    }
    async inputBonusNumber(numbers){
        while(true) {
            try {
                const BONUS_NUMBER = parseInt(await Console.readLineAsync(`${MESSAGE.BONUS_NUMBER_INPUT}\n`));
                await this.validate.validateBonusNumber(BONUS_NUMBER,numbers);
                Console.print('');
                return BONUS_NUMBER;     
            } catch (error) {
                Console.print(`${error}`);
            }
        }
    }
    async purchasedLottoOutput(number, amount){
        Console.print(`${amount}${MESSAGE.NUMBER_OF_PURCHASE}`);
        number.forEach(e => {
           Console.print(`[${e.join(', ')}]`);
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
export default InputAndOutput