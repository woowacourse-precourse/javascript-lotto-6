import { calculateResult } from "./calculateCount";

const compareLottos = (lottos, winNumbers, bonusNumber) => {
  try {
    const matchingNumber = lottos.map((lotto) => {
      const matchingNumber2 = lotto.filter((number) =>
        winNumbers.includes(number)
      );
      return matchingNumber2.length;
    });
    const bonusArr = lottos.map((lotto) => {
      const temp2 = lotto.filter((number) => number === bonusNumber);
      return temp2.length;
    });
    return calculateResult(matchingNumber, bonusArr);
  } catch (error) {
    Console.print(error.message);
  }
};

export default compareLottos;
