import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../Constants/Constant";

export default class Generation{

    #lottoNum;

    constructor(){
        this.#lottoNum = []
    }

    create(){
        while(this.#lottoNum.length < LOTTO.MAX_COUNT){
            const winnigNum = Random.pickNumberInRange(LOTTO.MIN_NUM, LOTTO.MAX_NUM)
            this.#lottoNum.push(winnigNum)
            
        }
    }

    getNum(){
        this.create()
        return this.#lottoNum;
    }
}