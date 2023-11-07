import { Random } from "@woowacourse/mission-utils";

export const randomNumbers = () => {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
}