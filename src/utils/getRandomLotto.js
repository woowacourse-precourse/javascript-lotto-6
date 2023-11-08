import { Random } from "@woowacourse/mission-utils";

const getRandomLotto = () => Random.pickUniqueNumbersInRange(1, 45, 6);

export default getRandomLotto;
