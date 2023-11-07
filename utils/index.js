import { MissionUtils } from "@woowacourse/mission-utils"

const print = (msg) => {
    MissionUtils.Console.print(msg);
}

const readLineAsync = async (query) => {
    return MissionUtils.Console.readLineAsync(query);
}


const pickUniqueNumbersInRange = (min,max,count) => {
    return MissionUtils.Random.pickUniqueNumbersInRange(min,max,count);
}

export {
    print, 
    readLineAsync, 
    pickUniqueNumbersInRange
}