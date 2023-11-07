import { MissionUtils } from "@woowacourse/mission-utils";

export class Computer {
    
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