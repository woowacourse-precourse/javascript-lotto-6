import {PRIZE} from "../utils/Define.js";

class Prize {
    constructor() {
        this.rankMap = new Map([
            [1, PRIZE.firstPlaceReward],
            [2,  PRIZE.secondPlaceReward],
            [3, PRIZE.thirdPlaceReward],
            [4,  PRIZE.fourthPlaceReward],
            [5, PRIZE.fifthPlaceReward],
        ]);
    }

    getPrize(rank) {
        return this.rankMap.get(rank);
    }
}
export default Prize;
