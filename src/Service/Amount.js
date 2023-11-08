import { Console } from "@woowacourse/mission-utils";
import { LOTTO } from "../Constants/Constant";
import { ERROR } from "../Constants/Message";

export default class Amount {

    #price;
    #chance;

    constructor(){
        this.#price = 0;
        this.#chance = 0;
    }

    #isNum(price){
        if(isNaN(price)){
            throw new Error(ERROR.NOT_NUM)
        }
        return price
    }

    #checkPrice(price){
        if(price % LOTTO.PURCHASE_UNIT !== 0){
            throw new Error(ERROR.PURCHASE_INPUT)
        }
        return price
    }

    validatePirce(price){
        try{
            this.#isNum(price)
            this.#checkPrice(price);
        }
        catch(error){
            Console.print(error.message)
        }
    }

    #changeToChance(price){
        this.#chance = Number(price) / LOTTO.PURCHASE_UNIT;
    }

    #totalPrice(price){
        this.#price = Number(price)
    }

    makeVariables(price){
        this.#changeToChance(price)
        this.#totalPrice(price)
    }

    getChance(){
        return this.#chance
    }

    getPrice(){
        return this.#price
    }
}