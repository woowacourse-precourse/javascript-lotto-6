import { Random } from "@woowacourse/mission-utils";

const numberSort = (numbers) => {
  const sortedNumber = numbers.sort((a, b) => {
    return a - b;
  });
  return sortedNumber;
};

export const generateRandomNumber = () => {
  return numberSort(Random.pickUniqueNumbersInRange(1, 45, 6));
};
