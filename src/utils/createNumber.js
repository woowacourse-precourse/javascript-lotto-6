import { Random } from "@woowacourse/mission-utils";

export const createNumber = () => {
  const array = [];

  while (array.length < 6) {
    const number = Random.pickNumberInRange(1, 45);
    if (!array.includes(number)) {
      array.push(number);
    }
  }
  const lottoArray = array.sort((a, b) => a - b);
  return lottoArray;
};
