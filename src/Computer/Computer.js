import { MissionUtils } from "@woowacourse/mission-utils";
import { PurchaseLotto } from "./PurchaseLotto";

export class Computer {
constructor(n) {
this.numbers = Array.from({ length: n }, () => this.getRandomNum());
}

getRandomNum() {
    const number = [];
    while (number.length < 6) {
        const randomNum = MissionUtils.Random.pickNumberInRange(1, 45);
        if (!number.includes(randomNum)) {
            number.push(randomNum);
        }
    }
    console.log(number);
    return number;
    
}
}