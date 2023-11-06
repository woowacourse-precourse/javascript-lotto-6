import { MissionUtils } from "@woowacourse/mission-utils";

function getRandomNum() {
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

export function createNumbers(n) {
    return Array.from({ length: n }, () => getRandomNum());
}
