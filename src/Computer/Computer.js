import { MissionUtils } from "@woowacourse/mission-utils";

export class Computer {
    getRandomNum() {
        const randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        return randomNum;    
    }
}