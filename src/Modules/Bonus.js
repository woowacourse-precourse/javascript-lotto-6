import { ERROR } from "./constants/messages";
import { Console } from "@woowacourse/mission-utils";


class Bonus {
    #bonus;
    
    constructor(bonus) {
        this.#bonus = Number(bonus);
        this.#validate();
    }

    #validate() {
        this.checkRange();
        this.checkDuplicate();
        this.checkInclude();
    }

    checkRange() {
        try{
            if (this.#bonus < 1 || this.#bonus > 45) throw new Error(BONUS_RANGE);
        }
        catch (error) {
            Console.print(error.message);
        }
        finally {
            //보너스 숫자를 재입력할 함수 
        }
    }

    checkDuplicate(numbers) {
        try{
            if (numbers.split(',').map(Number).includes(this.#bonus)) throw new Error(BONUS_DUPLICATE);
        }
        catch (error) {
            Console.print(error.message);
        }
        finally {
            //보너스 숫자를 재입력할 함수 
        }
    }

    checkInclude() {
        try{
            if (isNaN(this.#bonus)) throw new Error(BONUS_INCLUDE);
        }
        catch (error) {
            Console.print(error.message);
        }
        finally {
            //보너스 숫자를 재입력할 함수 
        }
    }

    getBonusNumber() {
        return this.#bonus;
    }
}

export default Bonus;