import { MissionUtils } from "@woowacourse/mission-utils";

export function compareNumbers(a,b){
    return a-b;
};

export function makeLotto(lottoArray,count){
    for(let i = 0 ; i< count ; i++){
        const RANDOM_NUMBERS =  MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
        RANDOM_NUMBERS.sort(this.compareNumbers);
        lottoArray.push(RANDOM_NUMBERS);
    }
};

