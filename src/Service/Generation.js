import { Console, Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../Constants/Constant";

export default class Generation{

    #lottoNum;

    constructor(){
        this.#lottoNum = [];
    }

    #create(){
        return Random.pickUniqueNumbersInRange(LOTTO.MIN_NUM, LOTTO.MAX_NUM, LOTTO.MAX_COUNT) 
    }
    
    list(num){
        for(let i = 0; i < num; i++){
            const Arr = this.#create();
            this.#lottoNum.push(Arr)
        }
    }

    getNum(){
        return this.#lottoNum
    }
}