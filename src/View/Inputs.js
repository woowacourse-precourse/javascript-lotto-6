import { MESSAGE } from "../../constants/index.js";
import { readLineAsync } from "../../utils/index.js";

class Inputs {
    async money() {
        return await readLineAsync(MESSAGE.MONEY);
        
    }
    
    async winNumber() {
        const winNumber = await readLineAsync(MESSAGE.WIN_NUMBER);
        return winNumber.split(',').map(number => Number(number.trim()));   
    }

    async bonusNumber() {
        const bonusNumber = await readLineAsync(MESSAGE.BONUS_NUMBER);
        return Number(bonusNumber);
    }

    
} 

export default Inputs;
