import { MissionUtils } from "@woowacourse/mission-utils";
import { PurChaseLotto } from "../PurchaseLotto.js";

export class Computer {
    purchaseLotto = new PurChaseLotto();
    

    constructor(PurChaseLotto) {
    this.numbers = Array.from({ length: PurChaseLotto }, () => this.getRandomNum());
    }
    
    getRandomNum() {
        const number = [];
       
        while (number.length < 6) {
            const randomNum = MissionUtils.Random.pickNumberInRange(1, 45);
            if (!number.includes(randomNum)) {
                number.push(randomNum);
            }
        }
        
        return number;    
    }
}